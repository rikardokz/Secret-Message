// messages arrays
const heartBreakMessage = messages.heartBreakMessage;
const motivationMessages = messages.motivationMessages;
const gymMessage = messages.hardMessages;

// DOM elements
const wisdom = document.querySelector("#wisdom");
const gym = document.getElementById("gym");
const heart = document.getElementById("heart");
const message = document.getElementById("message");

function RandomIndex(length) {
    return Math.floor(Math.random() * length);
};


wisdom.onclick = () => {
    message.style.color = "darkblue";
    message.innerHTML = "&ldquo;" + motivationMessages[RandomIndex(motivationMessages.length)] + "&ldquo;";
};

gym.onclick = () => {
    message.style.color = "black";
    message.innerHTML = "&ldquo;" + gymMessage[RandomIndex(gymMessage.length)] + "&ldquo;";
};

heart.onclick = () => {
    message.style.color = "darkred";
    message.innerHTML = "&ldquo;" + heartBreakMessage[RandomIndex(heartBreakMessage.length)] + "&ldquo;";
};
