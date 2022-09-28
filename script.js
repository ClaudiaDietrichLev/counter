const main = document.querySelector("main");
const button = document.querySelector("button");
const counter = document.querySelector(".counter");
const root = document.documentElement;

main.addEventListener("click", counterIncrease);
document.addEventListener("keydown", function(event){
    console.log (event.code)
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
    console.log(number);
    counter.innerText = number;
}

function gradientIncrease (number) {
    let styles = getComputedStyle(document.documentElement);
    let colorValue = styles.getPropertyValue("–bg-gradient");
    root.style.setProperty(`--bg-gradient`, `linear-gradient(90deg, rgb(255, 221, 0) 0% ${number}%, white ${number}% 100%))`);
    console.log(styles);
}

