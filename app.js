let main = document.querySelector(".main");
let home = document.querySelector(".home");
let arr = document.querySelector(".arr");
let hover = document.querySelector(".hover");
main.addEventListener("mouseenter", () => {
    arr.style.right="20px";
    hover.style.left="0px";
});
home.addEventListener("mouseenter", () => {
    arr.style.right="-40px";
    hover.style.left="-155px";
});
