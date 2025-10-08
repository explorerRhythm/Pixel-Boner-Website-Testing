const answer = document.querySelectorAll(".answer");
const toggleButton = document.querySelectorAll(".question button");
const question = document.querySelectorAll(".question");
const pushLine = document.querySelector("#after-faq");

// Function to toggle answer (reusable)
function toggleAnswer(index) {
  if (answer[index].style.display === "none" || answer[index].style.display === "") {
    answer[index].style.display = "block";
    pushLine.style.marginTop = "20rem";
  } else {
    answer[index].style.display = "none";
    pushLine.style.marginTop = "10rem";
  }
}

// Button click listener
for (let i = 0; i < answer.length; i++) {
  toggleButton[i].addEventListener("click", function (e) {
    e.stopPropagation(); // Prevent question div listener from firing
    toggleAnswer(i);
  });
}

// Question div click listener
question.forEach((para, index) => {
  para.addEventListener("click", () => {
    toggleAnswer(index);
  });
});
