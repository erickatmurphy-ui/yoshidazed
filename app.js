const prompts = {
  confessional: [
    "Who is acting the most innocent, and why is that suspicious?",
    "Describe the current group dynamic like a reality-show narrator.",
    "Who would you trust with a secret for exactly six minutes?",
    "What is one moment Production HQ should replay dramatically?"
  ],
  awkward: [
    "Freeze. Name the awkward moment, assign it a title, and move on.",
    "Ask one person to explain themselves in one sentence.",
    "Everyone point to the person making this weirder.",
    "Take a clean group reset photo before the energy changes."
  ],
  road: [
    "ETA Psychic: everyone guesses the arrival time. Closest wins bragging rights.",
    "Snack Draft: rank the car snacks from elite to emergency-only.",
    "Playlist Judgment: nominate the most suspicious song choice.",
    "Quote Collector: capture the best sentence said in the car."
  ],
  sip: [
    "SIP: take a drink, if you want.",
    "DARE: nominate someone to do something mildly chaotic.",
    "CONFESS: answer one honest question from the group.",
    "HYDRATE: drink water and look smug about it."
  ],
  photo: [
    "Capture one team-color photo with every teammate visible.",
    "Capture evidence of someone taking the game too seriously.",
    "Capture Nicole and Brandon looking like the reason everyone showed up.",
    "Capture one dramatic reaction shot with no explanation."
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
    awkward: "#hq-output",
    sip: "#hq-output",
    road: "#road-output",
    photo: "#photo-output"
  }[key];
  document.querySelector(target).textContent = pick(key);
});
