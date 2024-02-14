const getElementById = (btnId) => {
  return document.getElementById(btnId);
};

const addClass = (id, className) => {
  getElementById(id).classList.add(className);
};

const removeClass = (id, className) => {
  getElementById(id).classList.remove(className);
};

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

  let currentScore = parseInt(getElementById("score").innerText);
  let lifeScore = parseInt(getElementById("life").innerText);

  if (playPressedAlphabet === expectedAlphabet) {
    //update score
    currentScore++;
    getElementById("score").innerText = currentScore;

    //start a new ground
    removeClass(expectedAlphabet, "bg-orange-400");
    continueGame();
  } else {
    lifeScore--;
    getElementById("life").innerText = lifeScore;
    removeClass(expectedAlphabet, "bg-orange-400");
    continueGame();

    if (lifeScore <= 0) {
      addClass("play-ground-section", "hidden");
      removeClass("score-section", "hidden");
      getElementById("gain-score").innerText = currentScore;

      getElementById("play-again").addEventListener("click", (e) => {
        removeClass("play-ground-section", "hidden");
        addClass("score-section", "hidden");
        getElementById("score").innerText = 0;
        getElementById("life").innerText = 5;
      });
    }
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
