let score;
let secretNumber;

let highScore = 0;

const initialValues = () => {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
};

initialValues();

document.querySelector(".btn-check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "No Number!";
  } else {
    if (guess === secretNumber) {
      document.querySelector(".message").textContent =
        "Congratulations...You won the game 🎉 ";
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").textContent = guess;
      if (score > highScore) {
        highScore = score;
        document.querySelector(".highscore").textContent = score;
      }
    } else {
      if (guess > secretNumber) {
        if (score <= 0) {
          document.querySelector(".message").textContent =
            "Oh No... You have lost the Game!";
        } else {
          document.querySelector(".message").textContent = "Too High";
          score--;
          document.querySelector(".score").textContent = score;
        }
      } else {
        if (score < 0) {
          document.querySelector(".message").textContent =
            "Oh No... You have lost the Game!";
        } else {
          document.querySelector(".message").textContent = "Too Low";
          score--;
          document.querySelector(".score").textContent = score;
        }
      }
    }
  }
});

document.querySelector(".btn-again ").addEventListener("click", () => {
  initialValues();
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".message").textContent = "Start Guessing....";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = 0;
});
