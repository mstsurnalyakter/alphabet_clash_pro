const getElementById = (btnId) =>{
    return document.getElementById(btnId);
}

const hiddenElementById = id =>{
    getElementById(id).classList.add('hidden');
}

const showElementById = id =>{
    getElementById(id).classList.remove("hidden");
}

getElementById("homeBtn").addEventListener('click',()=>{
    hiddenElementById("home-section");
    showElementById("play-ground-section");
});