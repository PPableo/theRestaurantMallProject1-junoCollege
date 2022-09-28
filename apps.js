// initial state
const ratings = document.querySelectorAll(".ratingCircle");
let selectedRating;

ratings.forEach((item, i) => {
  item.addEventListener("click", (event) => {
    //handle click
    ratings.forEach((item) => {
      item.classList.remove();
    });

    item.classList.add("hide");
    console.log(item.innerText);
    selectedRating = item.innerText;
  });
});

// hides the initial view ratings on submit
const submitButton = document.querySelector(".submit");
const initialView = document.querySelector(".initialView");
const submittedView = document.querySelector(".submittedView");
const spanRating = document.querySelector(".rating");

// will show the submitted rating and thank you message
submitButton.addEventListener("click", (event) => {
  ratings.forEach((rating) => {
    if (rating.classList.contains("hide")) {
      initialView.classList.add("hidden");
      submittedView.classList.remove("hidden");
      spanRating.innerText = selectedRating;
    }
  });
});
