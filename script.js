const element = document.querySelector(".menuBar");
const menuBarElement = document.querySelector(".menuBarButton");
const closeElement = document.querySelector(".closeButton");

menuBarElement.addEventListener("click", function(){
    element.style.visibility = "visible";
    element.style.opacity = "1";
    menuBarElement.style.visibility = "hidden";
})

closeElement.addEventListener("click", function(){
    menuBarElement.style.visibility = "visible";
    element.style.visibility = "hidden";
    element.style.opacity = "0";
    element.style.transition = "visibility 0.5s, opacity 0.5s linear";
})