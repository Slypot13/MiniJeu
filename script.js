const grid = document.getElementById("grid");
const cells = document.querySelectorAll(".cell");
const scoreSpan = document.getElementById("score");
const timeSpan = document.getElementById("time");
const bestScoreSpan = document.getElementById("bestScore");
const startBtn = document.getElementById("startBtn");
const message = document.getElementById("message");

let score = 0;
let timeLeft = 30;
let activeIndex = null;
let gameInterval = null;
let timeInterval = null;
let isPlaying = false;

// Charger le meilleur score depuis le localStorage (facultatif mais cool)
let bestScore = parseInt(localStorage.getItem("bestScore") || "0", 10);
bestScoreSpan.textContent = bestScore;

// Fonction pour choisir une nouvelle case active
function setRandomActiveCell() {
  // retirer l'ancienne
  if (activeIndex !== null) {
    cells[activeIndex].classList.remove("active");
  }
  // nouveau random
  const randomIndex = Math.floor(Math.random() * cells.length);
  activeIndex = randomIndex;
  cells[randomIndex].classList.add("active");
}

// Démarrer la partie
function startGame() {
  if (isPlaying) return;

  isPlaying = true;
  score = 0;
  timeLeft = 30;
  scoreSpan.textContent = score;
  timeSpan.textContent = timeLeft;
  message.textContent = "";
  startBtn.disabled = true;

  // première case
  setRandomActiveCell();

  // toutes les 800ms, la case change
  gameInterval = setInterval(setRandomActiveCell, 800);

  // compte à rebours
  timeInterval = setInterval(() => {
    timeLeft--;
    timeSpan.textContent = timeLeft;

    if (timeLeft <= 0) {
      endGame();
    }
  }, 1000);
}

// Fin de partie
function endGame() {
  isPlaying = false;
  startBtn.disabled = false;

  clearInterval(gameInterval);
  clearInterval(timeInterval);

  // enlever la case active
  if (activeIndex !== null) {
    cells[activeIndex].classList.remove("active");
    activeIndex = null;
  }

  // condition de victoire : 15 points ou plus
  if (score >= 15) {
    message.textContent = `Bravo ! Tu as gagné avec ${score} points 🎉`;
  } else {
    message.textContent = `Partie terminée. Score : ${score}. Retente ta chance !`;
  }

  // maj meilleur score
  if (score > bestScore) {
    bestScore = score;
    bestScoreSpan.textContent = bestScore;
    localStorage.setItem("bestScore", bestScore.toString());
  }
}

// Gestion du clic sur les cases
cells.forEach((cell, index) => {
  cell.addEventListener("click", () => {
    if (!isPlaying) return;

    // Si c'est la bonne case
    if (index === activeIndex) {
      score++;
      scoreSpan.textContent = score;

      // petite récompense visuelle : on change direct de case
      setRandomActiveCell();
    } else {
      // clic raté = petite pénalité
      score = Math.max(0, score - 1);
      scoreSpan.textContent = score;

      cell.classList.add("wrong");
      setTimeout(() => cell.classList.remove("wrong"), 150);
    }
  });
});

// Bouton start
startBtn.addEventListener("click", startGame);
