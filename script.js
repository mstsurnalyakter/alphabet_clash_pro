// common function start
const getElementById = (btnId) => {
  return document.getElementById(btnId);
};

const addClass = (id, className) => {
  getElementById(id).classList.add(className);
};

const removeClass = (id, className) => {
  getElementById(id).classList.remove(className);
};

const getScore = (id) => {
  return parseInt(getElementById(id).innerText);
};

const updateScore = (id, score) => {
  getElementById(id).innerText = score;
};

// common function end

const getARandomAlphabet = () => {
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetString.split("");

  const index = Math.round(Math.random() * 25);
  const alphabet = alphabets[index];

  return alphabet;
};

document.addEventListener("keyup", (e) => {
  const playPressedAlphabet = e.key.toLowerCase();

  const expectedAlphabet =
    getElementById("current-alphabet").innerText.toLowerCase();

  let currentScore = getScore("score");
  let lifeScore = getScore("life");
  if (playPressedAlphabet === expectedAlphabet) {
    //update score
    currentScore++;
    updateScore("score", currentScore);
    //start a new ground
    removeClass(expectedAlphabet, "bg-orange-400");
    continueGame();
  } else {
    lifeScore--;
    updateScore("life", lifeScore);

    removeClass(expectedAlphabet, "bg-orange-400");
    continueGame();

    if (lifeScore === 0) {
      gameOver(currentScore);
    }
  }

  // stop the game if pressed 'Esc'
  if (playPressedAlphabet === "escape") {
    gameOver(currentScore);
  }
});

const continueGame = () => {
  //step - 1: generate a random alphabet
  const alphabet = getARandomAlphabet();

  //step - 2: set randomly generate alphabet
  const para = getElementById("current-alphabet");
  para.innerText = alphabet;

  //step - 3 set background color
  addClass(alphabet, "bg-orange-400");
};

getElementById("homeBtn").addEventListener("click", () => {
  addClass("home-section", "hidden");
  removeClass("play-ground-section", "hidden");
  continueGame();
});

const gameOver = (currentScore) => {
  addClass("play-ground-section", "hidden");
  removeClass("score-section", "hidden");
   updateScore("gain-score", currentScore);
   playAgain();
};

const playAgain = () =>{
   getElementById("play-again").addEventListener("click", (e) => {
     removeClass("play-ground-section", "hidden");
     addClass("score-section", "hidden");
     updateScore("score",0);
     updateScore("life", 5)
   });
}
