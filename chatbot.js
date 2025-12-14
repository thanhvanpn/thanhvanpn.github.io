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

async function fetchWithRetry(url, options, retries = 3, delay = 800) {
  let lastError;

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, options);

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      const data = await res.json();

      if (!data || !data.choices?.[0]?.message?.content) {
        throw new Error("Invalid AI response");
      }

      return data; // ✅ success
    } catch (err) {
      lastError = err;
      console.warn(`Retry ${attempt}/${retries} failed:`, err.message);

      if (attempt < retries) {
        await new Promise(r => setTimeout(r, delay * attempt)); // backoff
      }
    }
  }

  throw lastError;
}

async function sendMsg() {
  const input = document.getElementById("userInput");
  const messagesBox = document.getElementById("chatMessages");

  const userMessage = input.value.trim();
  if (!userMessage) return;

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

  try {
    const data = await fetchWithRetry(
      WORKER_URL,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [
            { role: "system", content: "You are an IELTS tutoring assistant." },
            { role: "user", content: userMessage }
          ]
        })
      },
      3 // 👈 retry 3 lần
    );

    const aiMsg = data.choices[0].message.content;

    document.getElementById(typingId)?.remove();
    messagesBox.innerHTML += `
      <div class="msg-ai">${formatAIMessage(aiMsg)}</div>
    `;
    scrollDown();

  } catch (error) {
    console.error("AI failed after retries:", error);

    document.getElementById(typingId)?.remove();
    messagesBox.innerHTML += `
      <div class="msg-ai error">
        ⚠️ Xin lỗi, hệ thống đang bận. Vui lòng thử lại sau ít phút.
      </div>
    `;
    scrollDown();
  }
}