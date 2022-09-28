const main = document.querySelector("main");
const button = document.querySelector("button");
const counter = document.querySelector(".counter");
const mainStyle = getComputedStyle(main).getPropertyValue("--bg-gradient");

main.addEventListener("click", counterIncrease);
document.addEventListener("keydown", function(event){
    if (event.code === "Enter" || event.code === "Space"){
        counterIncrease();
    }
});
button.addEventListener("click", function() {
    counter.innerText = "0";
})

function counterIncrease () {
    let number = counter.innerText;
    number ++;
    counter.innerText = number;
    gradientIncrease(number);
}

function gradientIncrease (number) {
    while (number - 100 > 0){
        number = number - 100;
    }
    main.style.setProperty("--bg-gradient", `${number}%`);
}

