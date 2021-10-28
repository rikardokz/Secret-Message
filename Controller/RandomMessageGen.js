// messages arrays
const heartBreakMessage = messages.heartBreakMessage;
const motivationMessages = messages.motivationMessages;
const gymMessage = messages.hardMessages;

// DOM elements
const wisdom = document.querySelector("#wisdom");
const gym = document.getElementById("gym");
const heart = document.getElementById("heart");
const message = document.getElementById("message");

function calculateRandomMessage(length) {
    return Math.floor(Math.random() * length);
}


wisdom.onclick = () => {
    message.innerHTML = "&ldquo;" + motivationMessages[calculateRandomMessage(motivationMessages.length)] + "&ldquo;";
}