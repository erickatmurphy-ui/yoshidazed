const prompts = [
  "What should make the final edit?",
  "What was the funniest moment so far?",
  "Who brought the best weekend energy?",
  "Describe Nicole and Brandon in three words.",
  "What is your team doing well?",
  "What is the most Scottsdale thing that happened?",
  "Which photo needs to be in the recap?",
  "What should the award committee know?"
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
