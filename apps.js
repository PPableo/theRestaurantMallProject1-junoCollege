
// Target the Elements we want

    // Carousel Container and Images
const carouselContainer = document.querySelector(".carouselContainer");
const carouselImg = document.querySelectorAll(".carouselContainer img");

    // Buttons Prev/Next
const prevItem = document.querySelector(".prev");
const nextItem = document.querySelector(".next");

    // create a variable that will see what image you are on or index
let counter = 1;
const size = carouselImg[0].clientWidth;
    // 

carouselContainer.style.transform = "translateX(" + (-size * counter) + "px)";

nextItem.addEventListener("click", () => {
    carouselContainer.style.transition = "transform 0.4 ease-in-out"
    counter++;
    carouselContainer.style.transform = "translateX(" + (-size * counter) + "px)";

});

prevItem.addEventListener("click", () => {
    carouselContainer.style.transition = "transform 0.4 ease-in-out"
    counter--;
    carouselContainer.style.transform = "translateX(" + (-size * counter) + "px)";

});

// nextItem.addEventListener("click", () => {
//     console.log("this works")
// });