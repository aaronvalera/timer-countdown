// Selectors
const video = document.querySelector("#rocket-launch-video");
const elementsContainer = document.querySelector("#countdown-timer");;
const btnsContainer = document.querySelector("#time-buttons");
const timeBtns = document.querySelectorAll("button");
const title = document.querySelector("#title");
const countdownDisplay = document.querySelector("#countdown-display");
const modal = document.querySelector("#modal");
const resetBtn = document.querySelector("#reset-button");

// Variables
let index = 0;
let countDown = null;

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
        setTimeout(() => {
            modal.classList.remove("hidden");
        }, 19000);
    };
};

// Event listeners
timeBtns.forEach(button => {
    button.addEventListener("click", () => {
        index = parseInt(button.value);
        btnsContainer.innerHTML = "";
        title.textContent = "Initiating launch in...";
        countDown = setInterval(timer, 1000);
    });
});

resetBtn.addEventListener("click", () => {
    location.reload();
});