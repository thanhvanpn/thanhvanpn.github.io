function loadHTML(targetId, url) {
  console.log(`Loading ${url} into #${targetId}`);

  fetch(url)
    .then(res => res.text())
    .then(html => {
      document.getElementById(targetId).innerHTML = html;

      if (url === "chatbot.html") {
        const script = document.createElement("script");
        script.src = "chatbot.js";
        script.defer = true;
        document.body.appendChild(script);
      }
    })
    .catch(err => console.error("Load HTML error:", err));
}

// Load components
loadHTML("header", "header.html");
loadHTML("footer", "footer.html");
loadHTML("chatbot", "chatbot.html");

/* Build a list of passages data */
const passages = [
  {
    id: 1,
    title: "[ThanhVan] - The Origins of Everyday Tools",
    label: "Full Test 1",
    count: 3969,
    thumb: "assets/pass1.jpg",
    statement: `You should spend about 20 minutes on questions 1 - 13 which are based on Reading Passage below.`,
    passage: `
                                            The kākāpō

The kākāpō is a nocturnal, flightless parrot that is critically endangered and one of New Zealand's unique treasures

The kākāpō, also known as the owl parrot, is a large, forest-dwelling bird, with a pale owl-like face. Up to 64 cm in length, it has predominantly yellow-green feathers,  forward-facing eyes, a large grey beak, large blue feet, and relatively short wings  and tail. It is the world's only flightless parrot, and is also possibly one of the world's  longest-living birds, with a reported lifespan of up to 100 years.

Kākāpō are solitary birds and tend to occupy the same home range for many years.  They forage on the ground and climb high into trees. They often leap from trees and  flap their wings, but at best manage a controlled descent to the ground. They are  entirely vegetarian, with their diet including the leaves, roots and bark of trees as well as bulbs, and fern fronds.

Kākāpō breed in summer and autumn, but only in years when food is plentiful.  Males play no part in incubation or chick-rearing - females alone incubate eggs and  feed the chicks. The 1-4 eggs are laid in soil, which is repeatedly turned over before  and during incubation. The female kākāpō has to spend long periods away from the  nest searching for food, which leaves the unattended eggs and chicks particularly  vulnerable to predators.

Before humans arrived, kākāpō were common throughout New Zealand's forests.  However, this all changed with the arrival of the first Polynesian settlers about 700  years ago. For the early settlers, the flightless kākāpō was easy prey. They ate its  meat and used its feathers to make soft cloaks. With them came the Polynesian dog  and rat, which also preyed on kākāpō. By the time European colonisers arrived in  the early 1800s, kākāpō had become confined to the central North Island and  forested parts of the South Island. The fall in kākāpō numbers was accelerated by  European colonisation. A great deal of habitat was lost through forest clearance,  and introduced species such as deer depleted the remaining forests of food. Other  predators such as cats, stoats and two more species of rat were also introduced.  The kākāpō were in serious trouble.

In 1894, the New Zealand government launched its first attempt to save the kākāpō.  Conservationist Richard Henry led an effort to relocate several hundred of the birds  to predator-free Resolution Island in Fiordland. Unfortunately, the island didn't  remain predator free - stoats arrived within six years, eventually destroying the  kākāpō population. By the mid-1900s, the kākāpō was practically a lost species.  Only a few clung to life in the most isolated parts of New Zealand.

From 1949 to 1973, the newly formed New Zealand Wildlife Service made over 60  expeditions to find kākāpō, focusing mainly on Fiordland. Six were caught, but there  were no females amongst them and all but one died within a few months of captivity. In 1974, a new initiative was launched, and by 1977, 18 more kākāpō were found in  Fiordland. However, there were still no females. In 1977, a large population of males  was spotted in Rakiura - a large island free from stoats, ferrets and weasels. There were about 200 individuals, and in 1980 it was confirmed females were also present.  These birds have been the foundation of all subsequent work in managing the  species.

Unfortunately, predation by feral cats on Rakiura Island led to a rapid decline in  kākāpō numbers. As a result, during 1980-97, the surviving population was  evacuated to three island sanctuaries: Codfish Island, Maud Island and Little Barrier  Island. However, breeding success was hard to achieve. Rats were found to be a  major predator of kākāpō chicks and an insufficient number of chicks survived to  offset adult mortality. By 1995, although at least 12 chicks had been produced on the islands, only three had survived. The kākāpō population had dropped to 51 birds.  The critical situation prompted an urgent review of kākāpō management in New  Zealand.

In 1996, a new Recovery Plan was launched, together with a specialist advisory  group called the Kākāpō Scientific and Technical Advisory Committee and a higher  amount of funding. Renewed steps were taken to control predators on the three  islands. Cats were eradicated from Little Barrier Island in 1980, and possums were  eradicated from Codfish Island by 1986. However, the population did not start to  increase until rats were removed from all three islands, and the birds were more  intensively managed. This involved moving the birds between islands,  supplementary feeding of adults and rescuing and hand-raising any failing chicks.

After the first five years of the Recovery Plan, the population was on target. By 2000,  five new females had been produced, and the total population had grown to 62 birds. For the first time, there was cautious optimism for the future of kākāpō and by  June 2020, a total of 210 birds was recorded.  

Today, kākāpō management continues to be guided by the kākāpō Recovery Plan.  Its key goals are: minimise the loss of genetic diversity in the kākāpō population,  restore or maintain sufficient habitat to accommodate the expected increase in the  kākāpō population, 

    `,
    questions: [
      // ========= Questions 1–6: Multiple Choice =========
      {
        id: "p1_q1",
        type: "mcq",
        q: "What is special about the kākāpō compared to other parrots?",
        choices: [
          "It migrates long distances",
          "It is nocturnal and flightless",
          "It has brightly coloured feathers",
          "It lives mainly in grasslands"
        ],
        answer: "It is nocturnal and flightless"
      },
      {
        id: "p1_q2",
        type: "mcq",
        q: "How long can a kākāpō live according to the passage?",
        choices: ["Up to 40 years", "Up to 60 years", "Up to 80 years", "Up to 100 years"],
        answer: "Up to 100 years"
      },
      {
        id: "p1_q3",
        type: "mcq",
        q: "What do kākāpō do instead of flying?",
        choices: [
          "Run quickly on the ground",
          "Glide short distances",
          "Leap from trees and descend",
          "Swim across rivers"
        ],
        answer: "Leap from trees and descend"
      },
      {
        id: "p1_q4",
        type: "mcq",
        q: "What role do male kākāpō play in raising chicks?",
        choices: [
          "They incubate eggs",
          "They feed the chicks",
          "They guard the nest",
          "They play no role"
        ],
        answer: "They play no role"
      },
      {
        id: "p1_q5",
        type: "mcq",
        q: "Why are kākāpō eggs vulnerable?",
        choices: [
          "They are laid in trees",
          "The shells are very thin",
          "Females leave nests to find food",
          "They hatch very slowly"
        ],
        answer: "Females leave nests to find food"
      },
      {
        id: "p1_q6",
        type: "mcq",
        q: "Which animals were introduced by Polynesian settlers?",
        choices: [
          "Cats and stoats",
          "Rats and dogs",
          "Possums and deer",
          "Ferrets and weasels"
        ],
        answer: "Rats and dogs"
      },

      // ========= Questions 7–13: Dropdown (Matching ideas) =========
      {
        id: "p1_q7",
        type: "dropdown",
        q: "The kākāpō became endangered mainly because of:",
        choices: ["A", "B", "C", "D", "E"],
        answer: "C"
      },
      {
        id: "p1_q8",
        type: "dropdown",
        q: "European colonisation caused:",
        choices: ["A", "B", "C", "D", "E"],
        answer: "D"
      },
      {
        id: "p1_q9",
        type: "dropdown",
        q: "Richard Henry attempted to save kākāpō by:",
        choices: ["A", "B", "C", "D", "E"],
        answer: "B"
      },
      {
        id: "p1_q10",
        type: "dropdown",
        q: "The failure of Resolution Island was due to:",
        choices: ["A", "B", "C", "D", "E"],
        answer: "A"
      },
      {
        id: "p1_q11",
        type: "dropdown",
        q: "Early Wildlife Service expeditions were unsuccessful because:",
        choices: ["A", "B", "C", "D", "E"],
        answer: "E"
      },
      {
        id: "p1_q12",
        type: "dropdown",
        q: "Rakiura Island was important because:",
        choices: ["A", "B", "C", "D", "E"],
        answer: "C"
      },
      {
        id: "p1_q13",
        type: "dropdown",
        q: "The kākāpō population reached its lowest point at:",
        choices: ["A", "B", "C", "D", "E"],
        answer: "D"
      },

      // ========= Questions 14–25: Fill in the blanks =========
      {
        id: "p1_q14",
        type: "fill",
        q: "The kākāpō is a _____ bird that is active at night.",
        answer: ["nocturnal"]
      },
      {
        id: "p1_q15",
        type: "fill",
        q: "The feathers of the kākāpō are mainly _____ in colour.",
        answer: ["yellow-green"]
      },
      {
        id: "p1_q16",
        type: "fill",
        q: "Kākāpō are completely _____ in their diet.",
        answer: ["vegetarian"]
      },
      {
        id: "p1_q17",
        type: "fill",
        q: "Eggs are laid in _____ and turned over during incubation.",
        answer: ["soil"]
      },
      {
        id: "p1_q18",
        type: "fill",
        q: "Before humans arrived, kākāpō were _____ throughout New Zealand.",
        answer: ["common"]
      },
      {
        id: "p1_q19",
        type: "fill",
        q: "European settlers introduced predators such as cats and _____.",
        answer: ["stoats"]
      },
      {
        id: "p1_q20",
        type: "fill",
        q: "By the mid-1900s, the kākāpō was almost a _____ species.",
        answer: ["lost"]
      },
      {
        id: "p1_q21",
        type: "fill",
        q: "In 1977, a population of males was discovered on _____ Island.",
        answer: ["Rakiura"]
      },
      {
        id: "p1_q22",
        type: "fill",
        q: "Feral _____ caused serious decline on Rakiura Island.",
        answer: ["cats"]
      },
      {
        id: "p1_q23",
        type: "fill",
        q: "Rats were a major predator of kākāpō _____.",
        answer: ["chicks"]
      },
      {
        id: "p1_q24",
        type: "fill",
        q: "The population fell to _____ birds by 1995.",
        answer: ["51"]
      },
      {
        id: "p1_q25",
        type: "fill",
        q: "By June 2020, the kākāpō population reached _____.",
        answer: ["210"]
      },

      // ========= Questions 26–35: True / False / Not Given =========
      {
        id: "p1_q26",
        type: "tfng",
        q: "Kākāpō can fly short distances.",
        answer: "False"
      },
      {
        id: "p1_q27",
        type: "tfng",
        q: "Male kākāpō help raise chicks.",
        answer: "False"
      },
      {
        id: "p1_q28",
        type: "tfng",
        q: "Polynesians used kākāpō feathers for clothing.",
        answer: "True"
      },
      {
        id: "p1_q29",
        type: "tfng",
        q: "Deer were present in New Zealand before humans arrived.",
        answer: "False"
      },
      {
        id: "p1_q30",
        type: "tfng",
        q: "Resolution Island remained predator-free permanently.",
        answer: "False"
      },
      {
        id: "p1_q31",
        type: "tfng",
        q: "Only male kākāpō were found in early expeditions.",
        answer: "True"
      },
      {
        id: "p1_q32",
        type: "tfng",
        q: "All chicks produced in 1995 survived.",
        answer: "False"
      },
      {
        id: "p1_q33",
        type: "tfng",
        q: "Removing rats helped the population recover.",
        answer: "True"
      },
      {
        id: "p1_q34",
        type: "tfng",
        q: "The Recovery Plan reduced funding for conservation.",
        answer: "False"
      },
      {
        id: "p1_q35",
        type: "tfng",
        q: "Genetic diversity is a key goal of current management.",
        answer: "True"
      },

      // ========= Questions 36–40: Summary Completion =========
      {
        id: "p1_q36",
        type: "fill",
        q: "The kākāpō Recovery Plan was launched in _____.",
        answer: ["1996"]
      },
      {
        id: "p1_q37",
        type: "fill",
        q: "Birds were moved between _____ to improve survival.",
        answer: ["islands"]
      },
      {
        id: "p1_q38",
        type: "fill",
        q: "Extra food was given through _____ feeding.",
        answer: ["supplementary"]
      },
      {
        id: "p1_q39",
        type: "fill",
        q: "Failing chicks were _____ raised by humans.",
        answer: ["hand"]
      },
      {
        id: "p1_q40",
        type: "fill",
        q: "The long-term aim is to protect both population size and _____ diversity.",
        answer: ["genetic"]
      }
    ]
  },
  {
    id: 2,
    title: "[ThanhVan] - Urban Gardens and City Life",
    label: "Full Test 2",
    count: 3350,
    thumb: "assets/pass2.jpg",
        passage: `
                                            The kākāpō

The kākāpō is a nocturnal, flightless parrot that is critically endangered and one of New Zealand's unique treasures

The kākāpō, also known as the owl parrot, is a large, forest-dwelling bird, with a pale owl-like face. Up to 64 cm in length, it has predominantly yellow-green feathers,  forward-facing eyes, a large grey beak, large blue feet, and relatively short wings  and tail. It is the world's only flightless parrot, and is also possibly one of the world's  longest-living birds, with a reported lifespan of up to 100 years.

Kākāpō are solitary birds and tend to occupy the same home range for many years.  They forage on the ground and climb high into trees. They often leap from trees and  flap their wings, but at best manage a controlled descent to the ground. They are  entirely vegetarian, with their diet including the leaves, roots and bark of trees as well as bulbs, and fern fronds.

Kākāpō breed in summer and autumn, but only in years when food is plentiful.  Males play no part in incubation or chick-rearing - females alone incubate eggs and  feed the chicks. The 1-4 eggs are laid in soil, which is repeatedly turned over before  and during incubation. The female kākāpō has to spend long periods away from the  nest searching for food, which leaves the unattended eggs and chicks particularly  vulnerable to predators.

Before humans arrived, kākāpō were common throughout New Zealand's forests.  However, this all changed with the arrival of the first Polynesian settlers about 700  years ago. For the early settlers, the flightless kākāpō was easy prey. They ate its  meat and used its feathers to make soft cloaks. With them came the Polynesian dog  and rat, which also preyed on kākāpō. By the time European colonisers arrived in  the early 1800s, kākāpō had become confined to the central North Island and  forested parts of the South Island. The fall in kākāpō numbers was accelerated by  European colonisation. A great deal of habitat was lost through forest clearance,  and introduced species such as deer depleted the remaining forests of food. Other  predators such as cats, stoats and two more species of rat were also introduced.  The kākāpō were in serious trouble.

In 1894, the New Zealand government launched its first attempt to save the kākāpō.  Conservationist Richard Henry led an effort to relocate several hundred of the birds  to predator-free Resolution Island in Fiordland. Unfortunately, the island didn't  remain predator free - stoats arrived within six years, eventually destroying the  kākāpō population. By the mid-1900s, the kākāpō was practically a lost species.  Only a few clung to life in the most isolated parts of New Zealand.

From 1949 to 1973, the newly formed New Zealand Wildlife Service made over 60  expeditions to find kākāpō, focusing mainly on Fiordland. Six were caught, but there  were no females amongst them and all but one died within a few months of captivity. In 1974, a new initiative was launched, and by 1977, 18 more kākāpō were found in  Fiordland. However, there were still no females. In 1977, a large population of males  was spotted in Rakiura - a large island free from stoats, ferrets and weasels. There were about 200 individuals, and in 1980 it was confirmed females were also present.  These birds have been the foundation of all subsequent work in managing the  species.

Unfortunately, predation by feral cats on Rakiura Island led to a rapid decline in  kākāpō numbers. As a result, during 1980-97, the surviving population was  evacuated to three island sanctuaries: Codfish Island, Maud Island and Little Barrier  Island. However, breeding success was hard to achieve. Rats were found to be a  major predator of kākāpō chicks and an insufficient number of chicks survived to  offset adult mortality. By 1995, although at least 12 chicks had been produced on the islands, only three had survived. The kākāpō population had dropped to 51 birds.  The critical situation prompted an urgent review of kākāpō management in New  Zealand.

In 1996, a new Recovery Plan was launched, together with a specialist advisory  group called the Kākāpō Scientific and Technical Advisory Committee and a higher  amount of funding. Renewed steps were taken to control predators on the three  islands. Cats were eradicated from Little Barrier Island in 1980, and possums were  eradicated from Codfish Island by 1986. However, the population did not start to  increase until rats were removed from all three islands, and the birds were more  intensively managed. This involved moving the birds between islands,  supplementary feeding of adults and rescuing and hand-raising any failing chicks.

After the first five years of the Recovery Plan, the population was on target. By 2000,  five new females had been produced, and the total population had grown to 62 birds. For the first time, there was cautious optimism for the future of kākāpō and by  June 2020, a total of 210 birds was recorded.  

Today, kākāpō management continues to be guided by the kākāpō Recovery Plan.  Its key goals are: minimise the loss of genetic diversity in the kākāpō population,  restore or maintain sufficient habitat to accommodate the expected increase in the  kākāpō population, 

    `,
    questions: [
      // ========= Questions 1–6: Multiple Choice =========
      {
        id: "p1_q1",
        type: "mcq",
        q: "What is special about the kākāpō compared to other parrots?",
        choices: [
          "It migrates long distances",
          "It is nocturnal and flightless",
          "It has brightly coloured feathers",
          "It lives mainly in grasslands"
        ],
        answer: "It is nocturnal and flightless"
      },
      {
        id: "p1_q2",
        type: "mcq",
        q: "How long can a kākāpō live according to the passage?",
        choices: ["Up to 40 years", "Up to 60 years", "Up to 80 years", "Up to 100 years"],
        answer: "Up to 100 years"
      },
      {
        id: "p1_q3",
        type: "mcq",
        q: "What do kākāpō do instead of flying?",
        choices: [
          "Run quickly on the ground",
          "Glide short distances",
          "Leap from trees and descend",
          "Swim across rivers"
        ],
        answer: "Leap from trees and descend"
      },
      {
        id: "p1_q4",
        type: "mcq",
        q: "What role do male kākāpō play in raising chicks?",
        choices: [
          "They incubate eggs",
          "They feed the chicks",
          "They guard the nest",
          "They play no role"
        ],
        answer: "They play no role"
      },
      {
        id: "p1_q5",
        type: "mcq",
        q: "Why are kākāpō eggs vulnerable?",
        choices: [
          "They are laid in trees",
          "The shells are very thin",
          "Females leave nests to find food",
          "They hatch very slowly"
        ],
        answer: "Females leave nests to find food"
      },
      {
        id: "p1_q6",
        type: "mcq",
        q: "Which animals were introduced by Polynesian settlers?",
        choices: [
          "Cats and stoats",
          "Rats and dogs",
          "Possums and deer",
          "Ferrets and weasels"
        ],
        answer: "Rats and dogs"
      },

      // ========= Questions 7–13: Dropdown (Matching ideas) =========
      {
        id: "p1_q7",
        type: "dropdown",
        q: "The kākāpō became endangered mainly because of:",
        choices: ["A", "B", "C", "D", "E"],
        answer: "C"
      },
      {
        id: "p1_q8",
        type: "dropdown",
        q: "European colonisation caused:",
        choices: ["A", "B", "C", "D", "E"],
        answer: "D"
      },
      {
        id: "p1_q9",
        type: "dropdown",
        q: "Richard Henry attempted to save kākāpō by:",
        choices: ["A", "B", "C", "D", "E"],
        answer: "B"
      },
      {
        id: "p1_q10",
        type: "dropdown",
        q: "The failure of Resolution Island was due to:",
        choices: ["A", "B", "C", "D", "E"],
        answer: "A"
      },
      {
        id: "p1_q11",
        type: "dropdown",
        q: "Early Wildlife Service expeditions were unsuccessful because:",
        choices: ["A", "B", "C", "D", "E"],
        answer: "E"
      },
      {
        id: "p1_q12",
        type: "dropdown",
        q: "Rakiura Island was important because:",
        choices: ["A", "B", "C", "D", "E"],
        answer: "C"
      },
      {
        id: "p1_q13",
        type: "dropdown",
        q: "The kākāpō population reached its lowest point at:",
        choices: ["A", "B", "C", "D", "E"],
        answer: "D"
      },

      // ========= Questions 14–25: Fill in the blanks =========
      {
        id: "p1_q14",
        type: "fill",
        q: "The kākāpō is a _____ bird that is active at night.",
        answer: ["nocturnal"]
      },
      {
        id: "p1_q15",
        type: "fill",
        q: "The feathers of the kākāpō are mainly _____ in colour.",
        answer: ["yellow-green"]
      },
      {
        id: "p1_q16",
        type: "fill",
        q: "Kākāpō are completely _____ in their diet.",
        answer: ["vegetarian"]
      },
      {
        id: "p1_q17",
        type: "fill",
        q: "Eggs are laid in _____ and turned over during incubation.",
        answer: ["soil"]
      },
      {
        id: "p1_q18",
        type: "fill",
        q: "Before humans arrived, kākāpō were _____ throughout New Zealand.",
        answer: ["common"]
      },
      {
        id: "p1_q19",
        type: "fill",
        q: "European settlers introduced predators such as cats and _____.",
        answer: ["stoats"]
      },
      {
        id: "p1_q20",
        type: "fill",
        q: "By the mid-1900s, the kākāpō was almost a _____ species.",
        answer: ["lost"]
      },
      {
        id: "p1_q21",
        type: "fill",
        q: "In 1977, a population of males was discovered on _____ Island.",
        answer: ["Rakiura"]
      },
      {
        id: "p1_q22",
        type: "fill",
        q: "Feral _____ caused serious decline on Rakiura Island.",
        answer: ["cats"]
      },
      {
        id: "p1_q23",
        type: "fill",
        q: "Rats were a major predator of kākāpō _____.",
        answer: ["chicks"]
      },
      {
        id: "p1_q24",
        type: "fill",
        q: "The population fell to _____ birds by 1995.",
        answer: ["51"]
      },
      {
        id: "p1_q25",
        type: "fill",
        q: "By June 2020, the kākāpō population reached _____.",
        answer: ["210"]
      },

      // ========= Questions 26–35: True / False / Not Given =========
      {
        id: "p1_q26",
        type: "tfng",
        q: "Kākāpō can fly short distances.",
        answer: "False"
      },
      {
        id: "p1_q27",
        type: "tfng",
        q: "Male kākāpō help raise chicks.",
        answer: "False"
      },
      {
        id: "p1_q28",
        type: "tfng",
        q: "Polynesians used kākāpō feathers for clothing.",
        answer: "True"
      },
      {
        id: "p1_q29",
        type: "tfng",
        q: "Deer were present in New Zealand before humans arrived.",
        answer: "False"
      },
      {
        id: "p1_q30",
        type: "tfng",
        q: "Resolution Island remained predator-free permanently.",
        answer: "False"
      },
      {
        id: "p1_q31",
        type: "tfng",
        q: "Only male kākāpō were found in early expeditions.",
        answer: "True"
      },
      {
        id: "p1_q32",
        type: "tfng",
        q: "All chicks produced in 1995 survived.",
        answer: "False"
      },
      {
        id: "p1_q33",
        type: "tfng",
        q: "Removing rats helped the population recover.",
        answer: "True"
      },
      {
        id: "p1_q34",
        type: "tfng",
        q: "The Recovery Plan reduced funding for conservation.",
        answer: "False"
      },
      {
        id: "p1_q35",
        type: "tfng",
        q: "Genetic diversity is a key goal of current management.",
        answer: "True"
      },

      // ========= Questions 36–40: Summary Completion =========
      {
        id: "p1_q36",
        type: "fill",
        q: "The kākāpō Recovery Plan was launched in _____.",
        answer: ["1996"]
      },
      {
        id: "p1_q37",
        type: "fill",
        q: "Birds were moved between _____ to improve survival.",
        answer: ["islands"]
      },
      {
        id: "p1_q38",
        type: "fill",
        q: "Extra food was given through _____ feeding.",
        answer: ["supplementary"]
      },
      {
        id: "p1_q39",
        type: "fill",
        q: "Failing chicks were _____ raised by humans.",
        answer: ["hand"]
      },
      {
        id: "p1_q40",
        type: "fill",
        q: "The long-term aim is to protect both population size and _____ diversity.",
        answer: ["genetic"]
      }
    ]
  },
  {
    id: 3,
    title: "[ThanhVan] - Language Change Over Generations",
    label: "Full Test 3",
    count: 2086,
    thumb: "assets/pass3.jpg",
        passage: `
                                            The kākāpō

The kākāpō is a nocturnal, flightless parrot that is critically endangered and one of New Zealand's unique treasures

The kākāpō, also known as the owl parrot, is a large, forest-dwelling bird, with a pale owl-like face. Up to 64 cm in length, it has predominantly yellow-green feathers,  forward-facing eyes, a large grey beak, large blue feet, and relatively short wings  and tail. It is the world's only flightless parrot, and is also possibly one of the world's  longest-living birds, with a reported lifespan of up to 100 years.

Kākāpō are solitary birds and tend to occupy the same home range for many years.  They forage on the ground and climb high into trees. They often leap from trees and  flap their wings, but at best manage a controlled descent to the ground. They are  entirely vegetarian, with their diet including the leaves, roots and bark of trees as well as bulbs, and fern fronds.

Kākāpō breed in summer and autumn, but only in years when food is plentiful.  Males play no part in incubation or chick-rearing - females alone incubate eggs and  feed the chicks. The 1-4 eggs are laid in soil, which is repeatedly turned over before  and during incubation. The female kākāpō has to spend long periods away from the  nest searching for food, which leaves the unattended eggs and chicks particularly  vulnerable to predators.

Before humans arrived, kākāpō were common throughout New Zealand's forests.  However, this all changed with the arrival of the first Polynesian settlers about 700  years ago. For the early settlers, the flightless kākāpō was easy prey. They ate its  meat and used its feathers to make soft cloaks. With them came the Polynesian dog  and rat, which also preyed on kākāpō. By the time European colonisers arrived in  the early 1800s, kākāpō had become confined to the central North Island and  forested parts of the South Island. The fall in kākāpō numbers was accelerated by  European colonisation. A great deal of habitat was lost through forest clearance,  and introduced species such as deer depleted the remaining forests of food. Other  predators such as cats, stoats and two more species of rat were also introduced.  The kākāpō were in serious trouble.

In 1894, the New Zealand government launched its first attempt to save the kākāpō.  Conservationist Richard Henry led an effort to relocate several hundred of the birds  to predator-free Resolution Island in Fiordland. Unfortunately, the island didn't  remain predator free - stoats arrived within six years, eventually destroying the  kākāpō population. By the mid-1900s, the kākāpō was practically a lost species.  Only a few clung to life in the most isolated parts of New Zealand.

From 1949 to 1973, the newly formed New Zealand Wildlife Service made over 60  expeditions to find kākāpō, focusing mainly on Fiordland. Six were caught, but there  were no females amongst them and all but one died within a few months of captivity. In 1974, a new initiative was launched, and by 1977, 18 more kākāpō were found in  Fiordland. However, there were still no females. In 1977, a large population of males  was spotted in Rakiura - a large island free from stoats, ferrets and weasels. There were about 200 individuals, and in 1980 it was confirmed females were also present.  These birds have been the foundation of all subsequent work in managing the  species.

Unfortunately, predation by feral cats on Rakiura Island led to a rapid decline in  kākāpō numbers. As a result, during 1980-97, the surviving population was  evacuated to three island sanctuaries: Codfish Island, Maud Island and Little Barrier  Island. However, breeding success was hard to achieve. Rats were found to be a  major predator of kākāpō chicks and an insufficient number of chicks survived to  offset adult mortality. By 1995, although at least 12 chicks had been produced on the islands, only three had survived. The kākāpō population had dropped to 51 birds.  The critical situation prompted an urgent review of kākāpō management in New  Zealand.

In 1996, a new Recovery Plan was launched, together with a specialist advisory  group called the Kākāpō Scientific and Technical Advisory Committee and a higher  amount of funding. Renewed steps were taken to control predators on the three  islands. Cats were eradicated from Little Barrier Island in 1980, and possums were  eradicated from Codfish Island by 1986. However, the population did not start to  increase until rats were removed from all three islands, and the birds were more  intensively managed. This involved moving the birds between islands,  supplementary feeding of adults and rescuing and hand-raising any failing chicks.

After the first five years of the Recovery Plan, the population was on target. By 2000,  five new females had been produced, and the total population had grown to 62 birds. For the first time, there was cautious optimism for the future of kākāpō and by  June 2020, a total of 210 birds was recorded.  

Today, kākāpō management continues to be guided by the kākāpō Recovery Plan.  Its key goals are: minimise the loss of genetic diversity in the kākāpō population,  restore or maintain sufficient habitat to accommodate the expected increase in the  kākāpō population, 

    `,
    questions: [
      // ========= Questions 1–6: Multiple Choice =========
      {
        id: "p1_q1",
        type: "mcq",
        q: "What is special about the kākāpō compared to other parrots?",
        choices: [
          "It migrates long distances",
          "It is nocturnal and flightless",
          "It has brightly coloured feathers",
          "It lives mainly in grasslands"
        ],
        answer: "It is nocturnal and flightless"
      },
      {
        id: "p1_q2",
        type: "mcq",
        q: "How long can a kākāpō live according to the passage?",
        choices: ["Up to 40 years", "Up to 60 years", "Up to 80 years", "Up to 100 years"],
        answer: "Up to 100 years"
      },
      {
        id: "p1_q3",
        type: "mcq",
        q: "What do kākāpō do instead of flying?",
        choices: [
          "Run quickly on the ground",
          "Glide short distances",
          "Leap from trees and descend",
          "Swim across rivers"
        ],
        answer: "Leap from trees and descend"
      },
      {
        id: "p1_q4",
        type: "mcq",
        q: "What role do male kākāpō play in raising chicks?",
        choices: [
          "They incubate eggs",
          "They feed the chicks",
          "They guard the nest",
          "They play no role"
        ],
        answer: "They play no role"
      },
      {
        id: "p1_q5",
        type: "mcq",
        q: "Why are kākāpō eggs vulnerable?",
        choices: [
          "They are laid in trees",
          "The shells are very thin",
          "Females leave nests to find food",
          "They hatch very slowly"
        ],
        answer: "Females leave nests to find food"
      },
      {
        id: "p1_q6",
        type: "mcq",
        q: "Which animals were introduced by Polynesian settlers?",
        choices: [
          "Cats and stoats",
          "Rats and dogs",
          "Possums and deer",
          "Ferrets and weasels"
        ],
        answer: "Rats and dogs"
      },

      // ========= Questions 7–13: Dropdown (Matching ideas) =========
      {
        id: "p1_q7",
        type: "dropdown",
        q: "The kākāpō became endangered mainly because of:",
        choices: ["A", "B", "C", "D", "E"],
        answer: "C"
      },
      {
        id: "p1_q8",
        type: "dropdown",
        q: "European colonisation caused:",
        choices: ["A", "B", "C", "D", "E"],
        answer: "D"
      },
      {
        id: "p1_q9",
        type: "dropdown",
        q: "Richard Henry attempted to save kākāpō by:",
        choices: ["A", "B", "C", "D", "E"],
        answer: "B"
      },
      {
        id: "p1_q10",
        type: "dropdown",
        q: "The failure of Resolution Island was due to:",
        choices: ["A", "B", "C", "D", "E"],
        answer: "A"
      },
      {
        id: "p1_q11",
        type: "dropdown",
        q: "Early Wildlife Service expeditions were unsuccessful because:",
        choices: ["A", "B", "C", "D", "E"],
        answer: "E"
      },
      {
        id: "p1_q12",
        type: "dropdown",
        q: "Rakiura Island was important because:",
        choices: ["A", "B", "C", "D", "E"],
        answer: "C"
      },
      {
        id: "p1_q13",
        type: "dropdown",
        q: "The kākāpō population reached its lowest point at:",
        choices: ["A", "B", "C", "D", "E"],
        answer: "D"
      },

      // ========= Questions 14–25: Fill in the blanks =========
      {
        id: "p1_q14",
        type: "fill",
        q: "The kākāpō is a _____ bird that is active at night.",
        answer: ["nocturnal"]
      },
      {
        id: "p1_q15",
        type: "fill",
        q: "The feathers of the kākāpō are mainly _____ in colour.",
        answer: ["yellow-green"]
      },
      {
        id: "p1_q16",
        type: "fill",
        q: "Kākāpō are completely _____ in their diet.",
        answer: ["vegetarian"]
      },
      {
        id: "p1_q17",
        type: "fill",
        q: "Eggs are laid in _____ and turned over during incubation.",
        answer: ["soil"]
      },
      {
        id: "p1_q18",
        type: "fill",
        q: "Before humans arrived, kākāpō were _____ throughout New Zealand.",
        answer: ["common"]
      },
      {
        id: "p1_q19",
        type: "fill",
        q: "European settlers introduced predators such as cats and _____.",
        answer: ["stoats"]
      },
      {
        id: "p1_q20",
        type: "fill",
        q: "By the mid-1900s, the kākāpō was almost a _____ species.",
        answer: ["lost"]
      },
      {
        id: "p1_q21",
        type: "fill",
        q: "In 1977, a population of males was discovered on _____ Island.",
        answer: ["Rakiura"]
      },
      {
        id: "p1_q22",
        type: "fill",
        q: "Feral _____ caused serious decline on Rakiura Island.",
        answer: ["cats"]
      },
      {
        id: "p1_q23",
        type: "fill",
        q: "Rats were a major predator of kākāpō _____.",
        answer: ["chicks"]
      },
      {
        id: "p1_q24",
        type: "fill",
        q: "The population fell to _____ birds by 1995.",
        answer: ["51"]
      },
      {
        id: "p1_q25",
        type: "fill",
        q: "By June 2020, the kākāpō population reached _____.",
        answer: ["210"]
      },

      // ========= Questions 26–35: True / False / Not Given =========
      {
        id: "p1_q26",
        type: "tfng",
        q: "Kākāpō can fly short distances.",
        answer: "False"
      },
      {
        id: "p1_q27",
        type: "tfng",
        q: "Male kākāpō help raise chicks.",
        answer: "False"
      },
      {
        id: "p1_q28",
        type: "tfng",
        q: "Polynesians used kākāpō feathers for clothing.",
        answer: "True"
      },
      {
        id: "p1_q29",
        type: "tfng",
        q: "Deer were present in New Zealand before humans arrived.",
        answer: "False"
      },
      {
        id: "p1_q30",
        type: "tfng",
        q: "Resolution Island remained predator-free permanently.",
        answer: "False"
      },
      {
        id: "p1_q31",
        type: "tfng",
        q: "Only male kākāpō were found in early expeditions.",
        answer: "True"
      },
      {
        id: "p1_q32",
        type: "tfng",
        q: "All chicks produced in 1995 survived.",
        answer: "False"
      },
      {
        id: "p1_q33",
        type: "tfng",
        q: "Removing rats helped the population recover.",
        answer: "True"
      },
      {
        id: "p1_q34",
        type: "tfng",
        q: "The Recovery Plan reduced funding for conservation.",
        answer: "False"
      },
      {
        id: "p1_q35",
        type: "tfng",
        q: "Genetic diversity is a key goal of current management.",
        answer: "True"
      },

      // ========= Questions 36–40: Summary Completion =========
      {
        id: "p1_q36",
        type: "fill",
        q: "The kākāpō Recovery Plan was launched in _____.",
        answer: ["1996"]
      },
      {
        id: "p1_q37",
        type: "fill",
        q: "Birds were moved between _____ to improve survival.",
        answer: ["islands"]
      },
      {
        id: "p1_q38",
        type: "fill",
        q: "Extra food was given through _____ feeding.",
        answer: ["supplementary"]
      },
      {
        id: "p1_q39",
        type: "fill",
        q: "Failing chicks were _____ raised by humans.",
        answer: ["hand"]
      },
      {
        id: "p1_q40",
        type: "fill",
        q: "The long-term aim is to protect both population size and _____ diversity.",
        answer: ["genetic"]
      }
    ]

  },
  {
    id: 4,
    title: "[ThanhVan] - The Ethics of Autonomous Vehicles",
    label: "Full Test 4",
    count: 4020,
    thumb: "assets/pass4.jpg",
        passage: `
                                            The kākāpō

The kākāpō is a nocturnal, flightless parrot that is critically endangered and one of New Zealand's unique treasures

The kākāpō, also known as the owl parrot, is a large, forest-dwelling bird, with a pale owl-like face. Up to 64 cm in length, it has predominantly yellow-green feathers,  forward-facing eyes, a large grey beak, large blue feet, and relatively short wings  and tail. It is the world's only flightless parrot, and is also possibly one of the world's  longest-living birds, with a reported lifespan of up to 100 years.

Kākāpō are solitary birds and tend to occupy the same home range for many years.  They forage on the ground and climb high into trees. They often leap from trees and  flap their wings, but at best manage a controlled descent to the ground. They are  entirely vegetarian, with their diet including the leaves, roots and bark of trees as well as bulbs, and fern fronds.

Kākāpō breed in summer and autumn, but only in years when food is plentiful.  Males play no part in incubation or chick-rearing - females alone incubate eggs and  feed the chicks. The 1-4 eggs are laid in soil, which is repeatedly turned over before  and during incubation. The female kākāpō has to spend long periods away from the  nest searching for food, which leaves the unattended eggs and chicks particularly  vulnerable to predators.

Before humans arrived, kākāpō were common throughout New Zealand's forests.  However, this all changed with the arrival of the first Polynesian settlers about 700  years ago. For the early settlers, the flightless kākāpō was easy prey. They ate its  meat and used its feathers to make soft cloaks. With them came the Polynesian dog  and rat, which also preyed on kākāpō. By the time European colonisers arrived in  the early 1800s, kākāpō had become confined to the central North Island and  forested parts of the South Island. The fall in kākāpō numbers was accelerated by  European colonisation. A great deal of habitat was lost through forest clearance,  and introduced species such as deer depleted the remaining forests of food. Other  predators such as cats, stoats and two more species of rat were also introduced.  The kākāpō were in serious trouble.

In 1894, the New Zealand government launched its first attempt to save the kākāpō.  Conservationist Richard Henry led an effort to relocate several hundred of the birds  to predator-free Resolution Island in Fiordland. Unfortunately, the island didn't  remain predator free - stoats arrived within six years, eventually destroying the  kākāpō population. By the mid-1900s, the kākāpō was practically a lost species.  Only a few clung to life in the most isolated parts of New Zealand.

From 1949 to 1973, the newly formed New Zealand Wildlife Service made over 60  expeditions to find kākāpō, focusing mainly on Fiordland. Six were caught, but there  were no females amongst them and all but one died within a few months of captivity. In 1974, a new initiative was launched, and by 1977, 18 more kākāpō were found in  Fiordland. However, there were still no females. In 1977, a large population of males  was spotted in Rakiura - a large island free from stoats, ferrets and weasels. There were about 200 individuals, and in 1980 it was confirmed females were also present.  These birds have been the foundation of all subsequent work in managing the  species.

Unfortunately, predation by feral cats on Rakiura Island led to a rapid decline in  kākāpō numbers. As a result, during 1980-97, the surviving population was  evacuated to three island sanctuaries: Codfish Island, Maud Island and Little Barrier  Island. However, breeding success was hard to achieve. Rats were found to be a  major predator of kākāpō chicks and an insufficient number of chicks survived to  offset adult mortality. By 1995, although at least 12 chicks had been produced on the islands, only three had survived. The kākāpō population had dropped to 51 birds.  The critical situation prompted an urgent review of kākāpō management in New  Zealand.

In 1996, a new Recovery Plan was launched, together with a specialist advisory  group called the Kākāpō Scientific and Technical Advisory Committee and a higher  amount of funding. Renewed steps were taken to control predators on the three  islands. Cats were eradicated from Little Barrier Island in 1980, and possums were  eradicated from Codfish Island by 1986. However, the population did not start to  increase until rats were removed from all three islands, and the birds were more  intensively managed. This involved moving the birds between islands,  supplementary feeding of adults and rescuing and hand-raising any failing chicks.

After the first five years of the Recovery Plan, the population was on target. By 2000,  five new females had been produced, and the total population had grown to 62 birds. For the first time, there was cautious optimism for the future of kākāpō and by  June 2020, a total of 210 birds was recorded.  

Today, kākāpō management continues to be guided by the kākāpō Recovery Plan.  Its key goals are: minimise the loss of genetic diversity in the kākāpō population,  restore or maintain sufficient habitat to accommodate the expected increase in the  kākāpō population, 

    `,
    questions: [
      // ========= Questions 1–6: Multiple Choice =========
      {
        id: "p1_q1",
        type: "mcq",
        q: "What is special about the kākāpō compared to other parrots?",
        choices: [
          "It migrates long distances",
          "It is nocturnal and flightless",
          "It has brightly coloured feathers",
          "It lives mainly in grasslands"
        ],
        answer: "It is nocturnal and flightless"
      },
      {
        id: "p1_q2",
        type: "mcq",
        q: "How long can a kākāpō live according to the passage?",
        choices: ["Up to 40 years", "Up to 60 years", "Up to 80 years", "Up to 100 years"],
        answer: "Up to 100 years"
      },
      {
        id: "p1_q3",
        type: "mcq",
        q: "What do kākāpō do instead of flying?",
        choices: [
          "Run quickly on the ground",
          "Glide short distances",
          "Leap from trees and descend",
          "Swim across rivers"
        ],
        answer: "Leap from trees and descend"
      },
      {
        id: "p1_q4",
        type: "mcq",
        q: "What role do male kākāpō play in raising chicks?",
        choices: [
          "They incubate eggs",
          "They feed the chicks",
          "They guard the nest",
          "They play no role"
        ],
        answer: "They play no role"
      },
      {
        id: "p1_q5",
        type: "mcq",
        q: "Why are kākāpō eggs vulnerable?",
        choices: [
          "They are laid in trees",
          "The shells are very thin",
          "Females leave nests to find food",
          "They hatch very slowly"
        ],
        answer: "Females leave nests to find food"
      },
      {
        id: "p1_q6",
        type: "mcq",
        q: "Which animals were introduced by Polynesian settlers?",
        choices: [
          "Cats and stoats",
          "Rats and dogs",
          "Possums and deer",
          "Ferrets and weasels"
        ],
        answer: "Rats and dogs"
      },

      // ========= Questions 7–13: Dropdown (Matching ideas) =========
      {
        id: "p1_q7",
        type: "dropdown",
        q: "The kākāpō became endangered mainly because of:",
        choices: ["A", "B", "C", "D", "E"],
        answer: "C"
      },
      {
        id: "p1_q8",
        type: "dropdown",
        q: "European colonisation caused:",
        choices: ["A", "B", "C", "D", "E"],
        answer: "D"
      },
      {
        id: "p1_q9",
        type: "dropdown",
        q: "Richard Henry attempted to save kākāpō by:",
        choices: ["A", "B", "C", "D", "E"],
        answer: "B"
      },
      {
        id: "p1_q10",
        type: "dropdown",
        q: "The failure of Resolution Island was due to:",
        choices: ["A", "B", "C", "D", "E"],
        answer: "A"
      },
      {
        id: "p1_q11",
        type: "dropdown",
        q: "Early Wildlife Service expeditions were unsuccessful because:",
        choices: ["A", "B", "C", "D", "E"],
        answer: "E"
      },
      {
        id: "p1_q12",
        type: "dropdown",
        q: "Rakiura Island was important because:",
        choices: ["A", "B", "C", "D", "E"],
        answer: "C"
      },
      {
        id: "p1_q13",
        type: "dropdown",
        q: "The kākāpō population reached its lowest point at:",
        choices: ["A", "B", "C", "D", "E"],
        answer: "D"
      },

      // ========= Questions 14–25: Fill in the blanks =========
      {
        id: "p1_q14",
        type: "fill",
        q: "The kākāpō is a _____ bird that is active at night.",
        answer: ["nocturnal"]
      },
      {
        id: "p1_q15",
        type: "fill",
        q: "The feathers of the kākāpō are mainly _____ in colour.",
        answer: ["yellow-green"]
      },
      {
        id: "p1_q16",
        type: "fill",
        q: "Kākāpō are completely _____ in their diet.",
        answer: ["vegetarian"]
      },
      {
        id: "p1_q17",
        type: "fill",
        q: "Eggs are laid in _____ and turned over during incubation.",
        answer: ["soil"]
      },
      {
        id: "p1_q18",
        type: "fill",
        q: "Before humans arrived, kākāpō were _____ throughout New Zealand.",
        answer: ["common"]
      },
      {
        id: "p1_q19",
        type: "fill",
        q: "European settlers introduced predators such as cats and _____.",
        answer: ["stoats"]
      },
      {
        id: "p1_q20",
        type: "fill",
        q: "By the mid-1900s, the kākāpō was almost a _____ species.",
        answer: ["lost"]
      },
      {
        id: "p1_q21",
        type: "fill",
        q: "In 1977, a population of males was discovered on _____ Island.",
        answer: ["Rakiura"]
      },
      {
        id: "p1_q22",
        type: "fill",
        q: "Feral _____ caused serious decline on Rakiura Island.",
        answer: ["cats"]
      },
      {
        id: "p1_q23",
        type: "fill",
        q: "Rats were a major predator of kākāpō _____.",
        answer: ["chicks"]
      },
      {
        id: "p1_q24",
        type: "fill",
        q: "The population fell to _____ birds by 1995.",
        answer: ["51"]
      },
      {
        id: "p1_q25",
        type: "fill",
        q: "By June 2020, the kākāpō population reached _____.",
        answer: ["210"]
      },

      // ========= Questions 26–35: True / False / Not Given =========
      {
        id: "p1_q26",
        type: "tfng",
        q: "Kākāpō can fly short distances.",
        answer: "False"
      },
      {
        id: "p1_q27",
        type: "tfng",
        q: "Male kākāpō help raise chicks.",
        answer: "False"
      },
      {
        id: "p1_q28",
        type: "tfng",
        q: "Polynesians used kākāpō feathers for clothing.",
        answer: "True"
      },
      {
        id: "p1_q29",
        type: "tfng",
        q: "Deer were present in New Zealand before humans arrived.",
        answer: "False"
      },
      {
        id: "p1_q30",
        type: "tfng",
        q: "Resolution Island remained predator-free permanently.",
        answer: "False"
      },
      {
        id: "p1_q31",
        type: "tfng",
        q: "Only male kākāpō were found in early expeditions.",
        answer: "True"
      },
      {
        id: "p1_q32",
        type: "tfng",
        q: "All chicks produced in 1995 survived.",
        answer: "False"
      },
      {
        id: "p1_q33",
        type: "tfng",
        q: "Removing rats helped the population recover.",
        answer: "True"
      },
      {
        id: "p1_q34",
        type: "tfng",
        q: "The Recovery Plan reduced funding for conservation.",
        answer: "False"
      },
      {
        id: "p1_q35",
        type: "tfng",
        q: "Genetic diversity is a key goal of current management.",
        answer: "True"
      },

      // ========= Questions 36–40: Summary Completion =========
      {
        id: "p1_q36",
        type: "fill",
        q: "The kākāpō Recovery Plan was launched in _____.",
        answer: ["1996"]
      },
      {
        id: "p1_q37",
        type: "fill",
        q: "Birds were moved between _____ to improve survival.",
        answer: ["islands"]
      },
      {
        id: "p1_q38",
        type: "fill",
        q: "Extra food was given through _____ feeding.",
        answer: ["supplementary"]
      },
      {
        id: "p1_q39",
        type: "fill",
        q: "Failing chicks were _____ raised by humans.",
        answer: ["hand"]
      },
      {
        id: "p1_q40",
        type: "fill",
        q: "The long-term aim is to protect both population size and _____ diversity.",
        answer: ["genetic"]
      }
    ]
  },
  {
    id: 5,
    title: "[ThanhVan] - Small Businesses and Digital Platforms",
    label: "Passage 1",
    count: 2813,
    thumb: "assets/pass5.jpg",
    passage:
      `Digital platforms have lowered barriers to market entry for many entrepreneurs. A craftsman can now reach global customers through online marketplaces, bypassing traditional intermediaries. However, reliance on a single platform also brings risks: sudden policy changes, fee increases or algorithm updates can dramatically affect visibility and income. Businesses that diversify channels and build direct relationships with customers tend to be more resilient. Moreover, digital tools generate data about customers’ preferences, enabling targeted marketing and inventory optimisation. Yet the effective use of data requires skills that small business owners may lack, prompting a growing market of third-party advisers and services. Therefore, while digital platforms offer opportunity, success depends on strategic use and adaptability.`,
    questions: [
      { id: "p5_q1", type: "dropdown", q: "The passage suggests that digital platforms:", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "A" },
      { id: "p5_q2", type: "dropdown", q: "What is a risk for platform-based sellers?", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "D" },
      { id: "p5_q3", type: "mcq", q: "What do digital tools provide that helps businesses?", choices: ["Loans", "Customer data", "Legal advice", "Employee training"], answer: "Customer data" }
    ]
  },
  {
    id: 6,
    title: "[ThanhVan] - The Rewilding Movement",
    label: "Passage 2",
    count: 14455,
    thumb: "assets/pass6.jpg",
    passage:
      `Rewilding aims to restore ecosystems to a more natural state, often by reintroducing key species and reducing human interference. Advocates highlight ecological benefits: restored predator-prey dynamics, greater biodiversity and improved resilience to climate change. Critics worry about conflicts with agriculture and the needs of local communities; reintroducing large herbivores or carnivores can threaten crops and livestock. Successful projects typically involve careful consultation, compensation schemes and gradual implementation. Moreover, rewilding can deliver cultural benefits: people reconnect with wilder landscapes and derive psychological benefits from observing richer wildlife. In many regions, rewilding also necessitates policy change — incentives for landowners and long-term funding models are crucial for sustained outcomes.`,
    questions: [
      { id: "p6_q1", type: "dropdown", q: "The passage mainly focuses on:", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "C" },
      { id: "p6_q2", type: "dropdown", q: "Which concern do the critics raise?", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "D" },
      { id: "p6_q3", type: "mcq", q: "What is essential for rewilding success?", choices: ["Music festivals", "Compensation schemes", "Industrial growth", "Tax cuts"], answer: "Compensation schemes" }
    ]
  },
  {
    id: 7,
    title: "[ThanhVan] - Sleep and Memory Consolidation",
    label: "Passage 3",
    count: 943,
    thumb: "assets/pass7.jpg",
    passage:
      `Research increasingly shows that sleep plays a vital role in consolidating memories. During particular stages of sleep, the brain replays patterns of activity from the day, reinforcing synaptic connections and transferring memories from short-term to long-term storage. This process is not uniform; different types of memory — procedural skills or factual knowledge — benefit from different sleep stages. For example, rapid eye movement (REM) sleep is associated with emotional memory processing, while slow-wave sleep supports declarative memory. Sleep deprivation disrupts these processes, impairing learning and recall. Consequently, educational policies that favour extremely early school start times may inadvertently reduce students’ capacity to retain new information.`,
    questions: [
      { id: "p7_q1", type: "dropdown", q: "Which function of sleep is highlighted?", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "B" },
      { id: "p7_q2", type: "dropdown", q: "Which sleep stage is linked to declarative memory?", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "E" },
      { id: "p7_q3", type: "mcq", q: "What is a consequence of sleep deprivation?", choices: ["Improved memory", "Impaired recall", "Faster learning", "No change"], answer: "Impaired recall" }
    ]
  },
  {
    id: 8,
    title: "[ThanhVan] - Microplastics in the Food Chain",
    label: "Passage 4",
    count: 402,
    thumb: "assets/pass8.jpg",
    passage:
      `Tiny fragments of plastic, known as microplastics, have been discovered across marine and terrestrial food chains. These particles originate from larger plastic debris breaking down, synthetic textiles and certain personal care products. Once in the environment, microplastics can be ingested by small organisms and then bioaccumulate up the food chain, eventually reaching fish and shellfish consumed by humans. Scientists are still researching health implications, but concerns include chemical exposure and potential inflammatory effects. Policy responses include bans on microbeads, improved waste management and innovation in biodegradable materials. Public awareness campaigns also play a role; reducing single-use plastics can decrease the source material for microplastics.`,
    questions: [
      { id: "p8_q1", type: "dropdown", q: "The passage primarily raises concerns about:", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "G" },
      { id: "p8_q2", type: "dropdown", q: "Which measure is mentioned as a policy response?", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "E" },
      { id: "p8_q3", type: "mcq", q: "Microplastics can enter human diet via:", choices: ["Imported fruits", "Seafood", "Bottled water only", "Canned vegetables"], answer: "Seafood" }
    ]
  },
  {
    id: 9,
    title: "[ThanhVan] - Remote Work and Urban Geography",
    label: "Passage 5",
    count: 1077,
    thumb: "assets/pass9.jpg",
    passage:
      `The surge in remote work is reshaping urban patterns. As commuting pressure lessens, some workers relocate to suburbs or smaller towns, altering demand for office space and local services. City centres once dominated by daily commuters may diversify into cultural and leisure hubs. Real estate developers respond by redesigning buildings for mixed uses. Yet not all effects are positive: local businesses reliant on office workers may suffer, and unequal access to high-speed internet can exacerbate regional disparities. Urban planners face a dual challenge: adapt infrastructure to support new residential patterns while finding strategies to sustain vibrant central districts. Ultimately, remote work has introduced both flexibility and complexity into urban geography.`,
    questions: [
      { id: "p9_q1", type: "dropdown", q: "One effect of remote work is:", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "F" },
      { id: "p9_q2", type: "dropdown", q: "A negative consequence mentioned is:", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "D" },
      { id: "p9_q3", type: "mcq", q: "What infrastructure issue is highlighted?", choices: ["Electricity shortages", "Internet access", "Road congestion", "Public transport reliability"], answer: "Internet access" }
    ]
  },
  {
    id: 10,
    title: "[ThanhVan] - The Science of Taste",
    label: "Passage 6",
    count: 4020,
    thumb: "assets/pass10.jpg",
    passage:
      `Taste perception blends biology and experience. The tongue senses basic tastes — sweet, sour, salty, bitter and umami — through specialised receptors. However, flavour is a cognitive construction; smell, texture and even visual cues strongly influence what we perceive. Cultural upbringing shapes taste preferences: childhood exposure to certain foods tends to foster lifelong affinities. Scientists also investigate genetic differences that make some people highly sensitive to bitter compounds, which can influence food choices and nutrition. In culinary innovation, chefs manipulate multisensory elements to create surprising pairings; molecular gastronomy frequently exploits these principles to transform familiar ingredients.`,
    questions: [
      { id: "p10_q1", type: "dropdown", q: "The passage suggests taste is:", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "B" },
      { id: "p10_q2", type: "dropdown", q: "What influences lifelong food preference?", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "E" },
      { id: "p10_q3", type: "mcq", q: "Which discipline uses scientific principles to alter food?", choices: ["Sociology", "Molecular gastronomy", "Botany", "Nutrition only"], answer: "Molecular gastronomy" }
    ]
  },
  {
    id: 11,
    title: "[ThanhVan] - Memory Aids and Modern Learning",
    label: "Passage 7",
    count: 2813,
    thumb: "assets/pass11.jpg",
    passage:
      `Students often use mnemonic devices to retain complex information. Methods like acronyms, storytelling and spatial association (the "memory palace") transform abstract facts into memorable images. Cognitive psychologists explain success by noting that vivid, structured encodings recruit multiple brain systems and provide several retrieval cues. Yet critics warn against overreliance: a mnemonic might help recall a formula without understanding its meaning. Optimal learning combines mnemonic strategies with active practice and conceptual reflection. Educators increasingly design curricula that blend memorisation techniques with exercises requiring application, thereby promoting both retention and deeper comprehension.`,
    questions: [
      { id: "p11_q1", type: "dropdown", q: "A potential drawback of mnemonics is:", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "C" },
      { id: "p11_q2", type: "dropdown", q: "Why are mnemonics effective?", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "F" },
      { id: "p11_q3", type: "mcq", q: "What teaching approach is recommended?", choices: ["Memorisation only", "Blend of techniques", "Strict lectures", "No practice"], answer: "Blend of techniques" }
    ]
  },
  {
    id: 12,
    title: "[ThanhVan] - Water-Sensitive Urban Design",
    label: "Passage 8",
    count: 107,
    thumb: "assets/pass12.jpg",
    passage:
      `Cities increasingly integrate water-sensitive design to manage floods and supply. Green infrastructure — permeable pavements, bioswales and rain gardens — reduces runoff and replenishes groundwater. These measures can be cost-effective compared with large underground drainage projects, and they add amenity value. However, retrofitting older urban areas presents logistical constraints, and maintenance responsibilities must be clarified. With climate change intensifying storms, planners view such nature-based solutions as essential complements to grey infrastructure.`,
    questions: [
      { id: "p12_q1", type: "dropdown", q: "Green infrastructure helps to:", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "B" },
      { id: "p12_q2", type: "dropdown", q: "A difficulty mentioned is:", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "D" },
      { id: "p12_q3", type: "mcq", q: "Green approaches are seen as complements to:", choices: ["Road building", "Grey infrastructure", "Parks", "Housing"], answer: "Grey infrastructure" }
    ]
  },
  {
    id: 13,
    title: "[ThanhVan] - The Art Market and Digital Sales",
    label: "Passage 9",
    count: 4020,
    thumb: "assets/pass13.jpg",
    passage:
      `Online platforms have transformed the art market, enabling collectors to discover works beyond local galleries. Lower transaction costs and wider reach attract new buyers, though concerns exist about provenance and valuation accuracy. Auction houses adopt hybrid models: physical viewings combined with online bidding. For artists, digital exposure expands visibility but increases competition. Some artists use limited digital releases and certificates of authenticity to safeguard value. The online art economy is thus a dynamic mix of opportunity, risk and evolving trust mechanisms.`,
    questions: [
      { id: "p13_q1", type: "dropdown", q: "One advantage of digital sales is:", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "A" },
      { id: "p13_q2", type: "dropdown", q: "Which concern does the passage raise?", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "F" },
      { id: "p13_q3", type: "mcq", q: "What do artists use to protect digital value?", choices: ["Limited releases", "Free downloads", "Open access", "Unlimited prints"], answer: "Limited releases" }
    ]
  },
  {
    id: 14,
    title: "[ThanhVan] - Plant Communication through Roots",
    label: "Passage 10",
    count: 943,
    thumb: "assets/pass14.jpg",
    passage:
      `Recent studies reveal that plants exchange information via root networks and fungal partners. Through chemical signals, a stressed plant can warn neighbours of drought or disease, prompting protective responses. Mycorrhizal fungi often act as conduits for these signals, forming an underground network sometimes likened to a 'wood-wide web'. This communication influences community composition and survival strategies, though interpretative caution is needed: experimental conditions in labs may simplify complex field interactions. The findings nevertheless challenge simplistic views of plants as passive organisms and highlight ecological interconnectedness.`,
    questions: [
      { id: "p14_q1", type: "dropdown", q: "The passage suggests plants can:", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "G" },
      { id: "p14_q2", type: "dropdown", q: "What acts as a conduit for signals?", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "E" },
      { id: "p14_q3", type: "mcq", q: "Why caution is advised?", choices: ["Lab conditions differ from field", "Signals are unheard", "Plants don't communicate", "No fungi exist"], answer: "Lab conditions differ from field" }
    ]
  },
  {
    id: 15,
    title: "[ThanhVan] - The Revival of Artisan Baking",
    label: "Passage 11",
    count: 1077,
    thumb: "assets/pass15.jpg",
    passage:
      `A revival in artisan baking reflects both culinary trends and local economic shifts. Consumers seek bread with distinct textures and flavours, often preferring loaves made from local grains and traditional starters. Small bakeries emphasise craft methods — long fermentation and manual shaping — as differentiators. Such businesses can support local supply chains and create neighborhood vitality. However, scalability is a challenge; artisan methods are time-consuming and difficult to standardize for mass distribution. Some bakers find balance by offering workshops and direct sales that complement wholesale channels.`,
    questions: [
      { id: "p15_q1", type: "dropdown", q: "One reason artisan baking is popular is:", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "B" },
      { id: "p15_q2", type: "dropdown", q: "A difficulty for artisan bakers is:", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "D" },
      { id: "p15_q3", type: "mcq", q: "What do baker workshops provide?", choices: ["Supply chains", "Customer engagement", "Large-scale production", "Tax advice"], answer: "Customer engagement" }
    ]
  },
  {
    id: 16,
    title: "[ThanhVan] - Citizen Science and Data Quality",
    label: "Passage 12",
    count: 943,
    thumb: "assets/pass16.jpg",
    passage:
      `Citizen science projects harness public participation for large-scale data collection: bird counts, water quality logs and phenology observations. Enthusiastic volunteers extend researchers' reach, but data quality can vary. Projects improve reliability by providing clear protocols, training modules and validation steps, such as expert review or algorithmic filtering. When successful, citizen contributions fuel discoveries and foster public engagement with science. The social benefits — education and empowerment — complement the scientific value, though ensuring long-term volunteer commitment remains a key management challenge.`,
    questions: [
      { id: "p16_q1", type: "dropdown", q: "A benefit of citizen science is:", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "B" },
      { id: "p16_q2", type: "dropdown", q: "How do projects maintain data quality?", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "F" },
      { id: "p16_q3", type: "mcq", q: "What is a managerial challenge mentioned?", choices: ["Funding only", "Volunteer retention", "Lack of interest", "Hardware"], answer: "Volunteer retention" }
    ]
  },
  {
    id: 17,
    title: "[ThanhVan] - Portable Solar and Off-grid Power",
    label: "Passage 13",
    count: 107,
    thumb: "assets/pass17.jpg",
    statement: `You should spend about 20 minutes on questions 1 - 13 which are based on Reading Passage 1 below.`,
    passage:
      `Portable solar panels and battery storage are changing energy access in remote areas. Lightweight kits power lights, refrigerators and communication devices, improving living standards and supporting microenterprises. The technology is modular: households can scale systems gradually. Nevertheless, issues like battery disposal, upfront costs and seasonal variability of sunlight must be addressed. Microfinancing schemes and government subsidies can help adoption, while recycling programmes reduce environmental costs. As storage technologies improve, off-grid solar offers a promising pathway to equitable energy provision.`,
    questions: [
      { id: "p17_q1", type: "dropdown", q: "Portable solar primarily aids:", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "A" },
      { id: "p17_q2", type: "dropdown", q: "Which obstacle is listed?", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "D" },
      { id: "p17_q3", type: "mcq", q: "What helps households afford systems?", choices: ["Microfinancing", "Free panels", "No batteries", "Subsidies only"], answer: "Microfinancing" }
    ]
  },
  {
    id: 18,
    title: "[ThanhVan] - Language Apps and Motivation",
    label: "Passage 14",
    count: 3350,
    thumb: "assets/pass18.jpg",
    passage:
      `Language learning apps have popularised bite-sized lessons and gamified practice. Their strengths include accessibility and immediate feedback; they suit learners who need flexibility. Critics note that gamification may prioritise streaks over depth and that speaking proficiency often lags behind receptive skills. Complementary classroom instruction or conversation partners can bridge this gap. Importantly, motivation remains a decisive factor: learners who set clear goals and combine app practice with real-world use tend to progress most rapidly.`,
    questions: [
      { id: "p18_q1", type: "dropdown", q: "A shortcoming of language apps is:", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "C" },
      { id: "p18_q2", type: "dropdown", q: "What helps learners improve speaking?", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "F" },
      { id: "p18_q3", type: "mcq", q: "What is decisive for progress?", choices: ["Time only", "Motivation", "App design", "Cost"], answer: "Motivation" }
    ]
  },
  {
    id: 19,
    title: "[ThanhVan] - Noise Pollution and Urban Health",
    label: "Passage 15",
    count: 4020,
    thumb: "assets/pass19.jpg",
    passage:
      `Chronic exposure to urban noise — traffic, construction and transit hubs — is linked to stress, sleep disturbance and cardiovascular risk. Noise abatement strategies include traffic calming, sound barriers and building insulation. Urban design that reduces vehicular dependence can deliver quieter neighbourhoods, but policy implementation often contends with competing economic priorities. Community engagement helps identify hotspots and acceptable interventions. Monitoring sensors now provide data to target measures more effectively, yet addressing noise pollution demands an integrated approach combining planning, regulation and public participation.`,
    questions: [
      { id: "p19_q1", type: "dropdown", q: "Noise pollution can lead to:", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "C" },
      { id: "p19_q2", type: "dropdown", q: "Which solution is cited?", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "D" },
      { id: "p19_q3", type: "mcq", q: "What technology helps target measures?", choices: ["Sensors", "Drones", "Robots", "Satellites"], answer: "Sensors" }
    ]
  },
  {
    id: 20,
    title: "[ThanhVan] - The Role of Libraries Today",
    label: "Passage 16",
    count: 2078,
    thumb: "assets/pass20.jpg",
    passage:
      `Modern libraries are no longer mere repositories of books; they function as community hubs offering digital resources, meeting spaces and learning programmes. Libraries bridge digital divides by providing internet access and training for those without home connectivity. Their role in lifelong learning and civic engagement has strengthened calls for sustained funding. At the same time, libraries must innovate: pop-up services, mobile lending and partnerships with local organisations expand reach. The core value remains: equitable access to information and a supportive space for learning and exchange.`,
    questions: [
      { id: "p20_q1", type: "dropdown", q: "A current function of libraries is:", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "B" },
      { id: "p20_q2", type: "dropdown", q: "What challenge do libraries address?", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "F" },
      { id: "p20_q3", type: "mcq", q: "Which innovation is mentioned?", choices: ["E-book bans", "Mobile lending", "Higher fines", "Book destruction"], answer: "Mobile lending" }
    ]
  }
];

/* Expose to global so reading-test.html can use it */
window.__IELTS_PASSAGES = passages;

/* Render cards on index page (if exist) */
function renderIndexCards(typez, passageList) {
  const el = document.getElementById(typez);
  if (!el) return;
  el.innerHTML = '';
  passageList.forEach(p => {
    const card = document.createElement('div');
    card.className = 'card';
    card.onclick = () => openReadingTest(p.id);
    const labels = ["label-p1", "label-p2", "label-p3"];
    const randomLabel = labels[Math.floor(Math.random() * labels.length)];

    card.innerHTML = `
      <div class="thumb">
        <img src="${p.thumb}" alt="${p.title}">
        <div class="tag">${p.label}</div>
        <div class="count">${p.count.toLocaleString()} lượt làm bài</div>
      </div>
      <div class="info">
        <div>
          <div class="${randomLabel}">${p.label}</div>
          <div class="title">${p.title}</div>
          <div class="meta">
            <div>• Gap Filling</div>
            <div>• Multiple Choice</div>
            <div>• True/False/Not Given</div>
          </div>
        </div>
        <div style="margin-top:12px;">
          <small style="color:#999">Click để làm bài &rarr;</small>
        </div>
      </div>
    `;
    el.appendChild(card);
  });
}

/* Open reading test page */
function openReadingTest(id) {
  window.location.href = `reading-test.html?id=${id}`;
}

/* Export functions */
window.renderIndexCards = renderIndexCards;
window.openReadingTest = openReadingTest;

/* If the page is index.html, render now */
document.addEventListener('DOMContentLoaded', () => {
  renderIndexCards('cardGrid', passages.slice(0, 4));
  renderIndexCards('cardGrid1', passages.slice(4, 20));
});
