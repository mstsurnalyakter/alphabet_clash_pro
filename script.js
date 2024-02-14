const getElementById = (btnId) =>{
    return document.getElementById(btnId);
}

const hiddenElementById = id =>{
    getElementById(id).classList.add('hidden');
}

const showElementById = id =>{
    getElementById(id).classList.remove("hidden");
}

const setBackgroundColorById = id =>{
    const element = getElementById(id);
    element.classList.add("bg-orange-400");
}

const getARandomAlphabet = () =>{
    const alphabetString = "abcdefghijklmnopqrstuvwxyz";
    const alphabets = alphabetString.split("");

    const index = Math.round(Math.random()*25);
    const alphabet = alphabets[index];

    return alphabet;
}


const continueGame = () => {
    //step - 1: generate a random alphabet
  const alphabet = getARandomAlphabet();

  //step - 2: set randomly generate alphabet
  const para = getElementById("current-alphabet");
  para.innerText = alphabet;

  //step - 3 set background color
  setBackgroundColorById(alphabet);


};

getElementById("homeBtn").addEventListener('click',()=>{
    hiddenElementById("home-section");
    showElementById("play-ground-section");
    continueGame();
});
