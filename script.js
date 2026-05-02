// Selectors
const video = document.querySelector("#rocket-launch-video");
const elementsContainer = document.querySelector("#countdown-timer");;
const btnsContainer = document.querySelector("#time-buttons");
const timeBtns = document.querySelectorAll("button");
const title = document.querySelector("#title");
const countdownDisplay = document.querySelector("#countdown-display");

// Variables
let index = 0;
let countDown = undefined;

// Timer function
const timer = () => {
    countdownDisplay.textContent = index;
    index--;
    if(index < 0) {
        clearInterval(countDown);
        video.play();
        title.textContent = "LAUNCH!";
        setTimeout(() => {
            elementsContainer.remove();
        }, 1000);
    };
};

// Event listener
timeBtns.forEach(button => {
    button.addEventListener("click", () => {
        index = parseInt(button.value);
        btnsContainer.innerHTML = "";
        title.textContent = "Initiating launch in...";
        countDown = setInterval(timer, 1000);
    });
});