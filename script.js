// Selectors
const timeBtns = document.querySelectorAll("button");
const countDownDisplay = document.querySelector("#countdown-display");
const title = document.querySelector("#title")

let index = 0;

const timer = () => {
    countDownDisplay.textContent = index;
    console.log(index);
    index--;
    if(index < 0) {
        clearInterval(countDown);
        console.log("Interval cleared.");
        setTimeout(() => {
            countDownDisplay.textContent = "";
            title.textContent = "Launch!";
        }, 2000);
    }
}

let countDown = undefined;

timeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        index = parseInt(btn.value);
        title.textContent = "";
        clearInterval(countDown)
        countDown = setInterval(timer, 1000);
    });
});