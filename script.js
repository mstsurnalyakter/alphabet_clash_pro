const getElementById = (btnId) =>{
    return document.getElementById(btnId);
}

const hiddenElementById = id =>{
    getElementById(id).classList.add('hidden');
}

const showElementById = id =>{
    getElementById(id).classList.remove("hidden");
}

const getARandomAlphabet = () =>{
    const alphabetString = "abcdefghijklmnopqrstuvwxyz";
    const alphabets = alphabetString.split("");
    const index = Math.round(Math.random()*25);
    const alphabet = alphabets[index];
    return alphabet;
}


const continueGame = () => {
  const alphabet = getARandomAlphabet()
};

getElementById("homeBtn").addEventListener('click',()=>{
    hiddenElementById("home-section");
    showElementById("play-ground-section");
    continueGame();
});
