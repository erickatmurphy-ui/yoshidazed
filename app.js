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
  "Production has detected dead air. Everyone say one nice thing about Nicole and Brandon. No speeches.",
  "This silence is being documented. Nominate the current main character of the weekend.",
  "The vibes have paused. Someone give a 10-second State of the Weekend address.",
  "Production is concerned. Everyone vote on who has been acting suspiciously quiet.",
  "The room has lost momentum. Someone tell the most dramatic thing that happened on the drive.",
  "This is awkward enough to become content. Everyone pick a fake title for this episode.",
  "Production has reviewed the silence and found it lacking. Someone give a one-sentence toast.",
  "The conversation has flatlined. Everyone answer: pool, nap, snack, drink, or chaos?",
  "An uncomfortable pause has entered the chat. Point to the person most likely to start drama and deny it.",
  "Production refuses to air this silence. Someone explain the weekend so far like they are on a reunion episode.",
  "The energy has become suspicious. Everyone accuse one person of knowing too much.",
  "This silence is not making the final edit. Someone make a prediction that will age badly.",
  "Production has detected social buffering. Everyone reveal their most questionable snack opinion.",
  "The group has gone quiet. Bold choice. Nominate the MVP of the last hour.",
  "This pause feels intentional. Compliment the person to your left in the most suspicious way possible.",
  "Production is not mad, just disappointed. Someone deliver a dramatic reading of the last Production HQ text.",
  "The silence is giving low-budget reunion special. Everyone choose: loyalty, strategy, chaos, or snacks.",
  "This is officially awkward. Someone give a fake apology to Production HQ.",
  "Production has identified a vibe outage. Ask Brandon one question Nicole probably already knows the answer to.",
  "Production has identified a vibe outage. Ask Nicole one question Brandon should probably memorize."
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
