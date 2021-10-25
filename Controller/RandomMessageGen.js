import { messages } from "../../Model/Messages.js";

// messages arrays
const heartBreakMessage = messages.heartBreakMessage;
const motivationMessages = messages.motivationMessages;
const gymMessage = messages.hardMessages;

// DOM elements
const wisdom = document.getElementById("wisdom");
const gym = document.getElementById("gym");
const heart = document.getElementById("heart");
const message = document.getElementById("message");

wisdom.onClick = () => {
    console.log("Wisdom clicked");
}