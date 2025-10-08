const answer = document.querySelectorAll(".answer");
const toggleButton = document.querySelectorAll(".question button");
const question = document.querySelectorAll(".question");
for (let i = 0; i < answer.length; i++) {
  toggleButton[i].addEventListener("click", function (e) {
    e.stopPropagation();
    if (answer[i].style.display === "none" || answer[i].style.display === "") {
      answer[i].style.display = "block";
    } else {
      answer[i].style.display = "none";
    }
  });
}
question.forEach((para, index) => {
  para.addEventListener("click", () => {
    if (
      answer[index].style.display === "none" ||
      answer[index].style.display === ""
    ) {
      answer[index].style.display = "block";
    } else {
      answer[index].style.display = "none";
    }
  });
});
