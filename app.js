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
