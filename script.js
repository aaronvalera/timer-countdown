let index = 10;

const timer = () => {
    index--;
    console.log(index);
    if(index === 0) {
        clearInterval(countDown);
        console.log("Interval cleared.");
    }
}

const countDown = setInterval(timer, 1000);