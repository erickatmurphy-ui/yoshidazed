const prompts = {
  confessional: [
    "What is your official message to Nicole and Brandon?",
    "What moment from this weekend should be replayed dramatically?",
    "Who is giving main-character energy right now?",
    "What is one thing Nicole and Brandon need to see later?",
    "Who would be the worst person to keep a secret?",
    "What is one moment that already belongs in the recap?",
    "What is the funniest thing someone has said so far?",
    "Give your team a dramatic defense in 15 seconds.",
    "Accuse someone of being suspicious, then immediately compliment them."
  ],
  moment: [
    "Ask the group: What is one Nicole and Brandon moment that deserves to be remembered?",
    "Everyone gives Nicole and Brandon a fake reality-show episode title for this weekend.",
    "Pick one person to give a dramatic 20-second recap of the day so far.",
    "Ask: What is the most Scottsdale thing that has happened since we arrived?",
    "Nicole and Brandon each get one word to describe the group right now.",
    "Everyone points to the person most likely to turn a small errand into a full side quest.",
    "Ask the group: What song should be playing over this exact moment?",
    "Someone ask Nicole and Brandon one harmless couple question.",
    "Each team gives itself a fake slogan for the next hour.",
    "Ask: What is one thing from this weekend that already belongs in the recap?",
    "Take 30 seconds and nominate someone for 'Best Supporting Energy.'",
    "Ask: What would the title of this chapter of the weekend be?"
  ],
  road: [
    "ETA Psychic: everyone guesses the arrival time. Closest wins bragging rights.",
    "Snack Draft: defend your road trip snack like it was a life decision.",
    "Playlist Judgment: nominate one song that belongs on the weekend soundtrack.",
    "Quote Collector: save the funniest thing someone says before arrival.",
    "Safe Stop Photo: take one photo that proves the journey had a plot.",
    "Team Identity Challenge: create a team name, pose, and slogan before Scottsdale."
  ],
  sip: [
    "SIP / HYDRATE: Sip or hydrate if you have already said 'I'm fine' while clearly needing a snack.",
    "SHARE: What is one thing Nicole and Brandon do that feels very them?",
    "DARE: Give a 15-second toast to Nicole and Brandon like you are accepting an award.",
    "PHOTO: Take one photo that looks like it belongs in the weekend recap.",
    "SHARE: What is one piece of unserious marriage advice for Nicole and Brandon?",
    "DARE: Choose someone to narrate the current room like a nature documentary.",
    "SIP / HYDRATE: Sip or hydrate if you packed something you absolutely did not need.",
    "COUPLE MOMENT: Nicole and Brandon answer together: who in this group is most likely to survive a reality show?",
    "DARE: Take a team photo where everyone poses like they understood the assignment.",
    "SHARE: What is one moment from the trip so far that should not be forgotten?",
    "PHOTO: Capture Nicole and Brandon with the people nearest them right now.",
    "LIGHT SUSPICION: Name one person who is acting suspiciously helpful. No cross-examination."
  ],
  photo: [
    "Capture Nicole and Brandon looking like the reason everyone showed up.",
    "Get one photo that proves your team understood the assignment.",
    "Take one photo that belongs in the weekend recap.",
    "Capture a couple moment without interrupting the couple.",
    "Document someone giving main-character energy.",
    "Get a photo with Nicole, Brandon, and at least one supporting character.",
    "Capture the most chaotic but still appropriate group moment available."
  ]
};

function pick(key) {
  const list = prompts[key];
  return list[Math.floor(Math.random() * list.length)];
}

document.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-module]");
  if (!button) return;
  const key = button.dataset.module;
  if (key === "team") {
    const team = document.querySelector("#team-color").value;
    const adjectives = ["strategic", "camera-ready", "quietly suspicious", "overconfident"];
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    document.querySelector("#team-output").textContent = `${team}: ${adjective}, loyal for now, and definitely being watched.`;
    return;
  }
  const target = {
    confessional: "#confessional-output",
    moment: "#hq-output",
    sip: "#hq-output",
    road: "#road-output",
    photo: "#photo-output"
  }[key];
  document.querySelector(target).textContent = pick(key);
});
