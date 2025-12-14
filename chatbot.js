function formatAIMessage(text) {
  if (!text) return "";

  return text
    // escape basic
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")

    // headings
    .replace(/^### (.*)$/gm, "<h3>$1</h3>")
    .replace(/^#### (.*)$/gm, "<h4>$1</h4>")

    // bold
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")

    // bullet list
    .replace(/^- (.*)$/gm, "<li>$1</li>")
    .replace(/(<li>.*<\/li>)/gs, "<ul>$1</ul>")

    // line breaks
    .replace(/\n\n+/g, "<br><br>")
    .replace(/\n/g, "<br>");
}


const sendBtn = document.getElementById("sendBtn");
const userInput = document.getElementById("userInput");

let isComposing = false;

userInput.addEventListener("compositionstart", () => {
  isComposing = true;
});

userInput.addEventListener("compositionend", () => {
  isComposing = false;
});

userInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    if (isComposing) return; // ⛔ Fix tiếng Việt gửi 2 lần
    e.preventDefault();
    sendMsg();
  }
});

sendBtn.addEventListener("click", sendMsg);

const WORKER_URL = "https://broken-art-6635.sonltcoder.workers.dev";

// Toggle popup
document.getElementById("chatbotButton").onclick = () => {
  const popup = document.getElementById("chatbotPopup");
  const chatMessages = document.getElementById("chatMessages");
  if (chatMessages && chatMessages.children.length === 0) {
    chatMessages.innerHTML += `<div class="msg-ai">Xin chào, tôi có thể giúp gì được cho bạn?</div>`;
  }
  popup.style.display = (popup.style.display === "flex") ? "none" : "flex";
};

// Auto scroll
function scrollDown() {
  const box = document.getElementById("chatMessages");
  box.scrollTop = box.scrollHeight;
}

async function sendMsg() {
  const input = document.getElementById("userInput");
  const messagesBox = document.getElementById("chatMessages");

  const userMessage = input.value.trim();
  if (!userMessage) return;

  // Hiện tin nhắn user
  messagesBox.innerHTML += `<div class="msg-user">${userMessage}</div>`;
  scrollDown();
  input.value = "";

  const typingId = "typing-" + Date.now();
  messagesBox.innerHTML += `
        <div id="${typingId}" class="typing-indicator">
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
        </div>
    `;
  scrollDown();

  // Gửi đến Cloudflare Worker
  const response = await fetch(WORKER_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      messages: [
        { role: "system", content: "You are an IELTS tutoring assistant." },
        { role: "user", content: userMessage }
      ]
    })
  });

  const data = await response.json();
  const aiMsg = data.choices?.[0]?.message?.content || "Error";

  // 👉 Xóa typing indicator
  document.getElementById(typingId)?.remove();

  // Hiện phản hồi
  messagesBox.innerHTML += `<div class="msg-ai">${formatAIMessage(aiMsg)}</div>`;
  scrollDown();
}