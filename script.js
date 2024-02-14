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
