const x_logo = document.querySelector(".x-logo");
const style = document.createElement("style");
const list_icon = document.querySelector(".fas")
const aside = document.querySelector(".aside")


// spin action
x_logo.addEventListener('mouseover', function () {
    style.innerHTML = `
    @keyframes spin{
        0%{
        transform: rotate(0deg);
        }
        100%{
        transform: rotate(480deg);
        opacity: 0.5;
        }
    }
    `;
    document.head.appendChild(style)
})

//calls sidebar
list_icon.addEventListener("click", function () {
    aside.style.animationName = `move_in`
});

//removes sidebar
x_logo.addEventListener(
    "click", function () {
    aside.style.animationName = `move_out`;
    }
)