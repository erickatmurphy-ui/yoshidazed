const prompts = [
  "Who is acting the most suspicious and why?",
  "Who is taking this weekend more seriously than they should?",
  "Who is pretending to be chill but is clearly plotting?",
  "Who would be the first person eliminated on a real reality show?",
  "Who is most likely to accidentally win?",
  "Who has main character energy today?",
  "Who is giving producer plant energy?",
  "What moment already deserves a replay?",
  "What is the most unhinged thing someone has said so far?",
  "Who is carrying the group energy right now?",
  "Who is most likely to flirt their way out of trouble?",
  "Who looks innocent but absolutely is not?",
  "Who needs supervision after 10 PM?",
  "What is your favorite thing about Nicole and Brandon together?",
  "What is your prediction for their married-couple superpower?"
];
const promptBox = document.getElementById("promptBox");
const newPrompt = document.getElementById("newPrompt");
if (promptBox && newPrompt) {
  newPrompt.addEventListener("click", () => {
    const current = promptBox.textContent;
    const pool = prompts.filter((prompt) => prompt !== current);
    promptBox.textContent = pool[Math.floor(Math.random() * pool.length)];
  });
}
const awkwardPrompts = [
  "Production has detected dead air. Fix it: everyone say one nice thing about Nicole and Brandon. No speeches.",
  "This silence is being documented. Fix it: nominate the current main character of the weekend.",
  "The vibes have paused. Fix it: someone give a 10-second State of the Weekend address.",
  "Production is concerned. Fix it: everyone vote on who has been acting suspiciously quiet.",
  "The room has lost momentum. Fix it: someone tell the most dramatic thing that happened on the drive.",
  "This is awkward. Fix it: everyone pick a fake title for this episode.",
  "Production has reviewed the silence and found it lacking. Fix it: someone give a one-sentence toast.",
  "The conversation has flatlined. Fix it: everyone answer: pool, nap, snack, drink, or chaos?",
  "An uncomfortable pause has entered the chat. Fix it: point to the person most likely to start drama and deny it.",
  "Production refuses to air this silence. Fix it: someone explain the weekend so far like they are on a reunion episode.",
  "The energy has become suspicious. Fix it: everyone accuse one person of knowing too much.",
  "This silence is not making the final edit. Fix it: someone make a prediction that will age badly.",
  "Production has detected social buffering. Fix it: everyone reveal their most questionable snack opinion.",
  "The group has gone quiet. Bold choice. Fix it: nominate the MVP of the last hour.",
  "This pause feels intentional. Fix it: someone compliment the person to their left in the most suspicious way possible.",
  "Production is not mad, just disappointed. Fix it: someone deliver a dramatic reading of the last Production HQ text.",
  "The silence is giving low-budget reunion special. Fix it: everyone choose loyalty, strategy, chaos, or snacks.",
  "This is officially awkward. Fix it: someone give a fake apology to Production HQ.",
  "Production has identified a vibe outage. Fix it: ask Brandon one question Nicole probably already knows the answer to.",
  "Production has identified a vibe outage. Fix it: ask Nicole one question Brandon should probably memorize."
];
const awkwardBox = document.getElementById("awkwardBox");
const awkwardButton = document.getElementById("awkwardButton");
if (awkwardBox && awkwardButton) {
  awkwardButton.addEventListener("click", () => {
    const current = awkwardBox.textContent;
    const pool = awkwardPrompts.filter((prompt) => prompt !== current);
    awkwardBox.textContent = pool[Math.floor(Math.random() * pool.length)];
  });
}
