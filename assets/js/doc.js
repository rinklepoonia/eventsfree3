const menuIcon = document.querySelector("[for=menuIcon]");
// console.log(menuIcon)
const menuList = document.querySelector(".menuList");
menuIcon.addEventListener("click", function () {
    menuList.classList.toggle("show");
    document.body.classList.toggle("overFlowHidden")
})