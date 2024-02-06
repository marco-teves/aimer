let currentScore = 0;
const pointOut = document.getElementById('out');

function moveAway(e) {
    if (Math.random() < 0.3){
        typeStandard(e);
    } else if (Math.random() >= 0.4 && Math.random() >= 0.8){
        typeTracker(e);
    }    
    else {
        typeFeinter(e);
    };
}

function moveListener(){
    const button = document.querySelector('button');
    button.addEventListener('click', moveAway);
}

function addPoint(){ // (pointAm)
    currentScore += 1;
    // currentScore += pointAm.value;
    pointOut.textContent = `Score: ${currentScore}`;
}

function removePoint(){
    currentScore -= 1;
    pointOut.textContent = `Score: ${currentScore}`;
}

function clickListener(){
    const button = document.querySelector('button');
    button.addEventListener('click', addPoint);
}
/*
function isClicked(bool){
    let validateClick = true;
    return validateClick;
}
*/
function timer(){
// put code for timer here
}

// enemy types

function typeStandard(e){
    const button = e.target;
    button.style.transition = 'none';
    button.style.transform = `translate(${Math.random() * 95}vw, ${Math.random() * 95}vh )`;

    /* i dont fucking know // make this validate if it is clicked then this enemy type will reward 1 point
    if (isClicked == true){
        addPoint(1);
    };
    */

}

function typeFeinter(e) {
    // will spaw in and instantly feint to anotehr loccation
    // this enemy will reward 2 points
    const button = e.target;
    let feintTime = 0;
    button.style.transition = 'none';
    button.style.transform = `translate(${Math.random() * 95}vw, ${Math.random() * 95}vh )`;

    if (Math.random() < 0.5){
        feintTime = 0.10;
    } else {
        feintTime = 0.45;
    }

    setTimeout(() => {
        button.style.transform = `translate(${Math.random() * 95}vw, ${Math.random() * 95}vh )`;
        button.style.transition = `transform ${feintTime}s ease-in-out`;
        button.style.height = "50px";
        button.style.width = "50px";
    }, 0);
}

function typeTracker(e){
    // will require the player to click + drag in a specified pathway
    // the longer the user tracks it, the more points they are awarded
    // if the user doesnt make it past the first point it will remove a point
    randomInitOne = Math.random();
    randomInitTwo = Math.random();
    const button = e.target;
    button.style.transition = 'none';
    button.style.transform = `translate(${Math.random() * 95}vw, ${Math.random() * 95}vh )`;
    button.backgroundColor = 'rgba(255, 255, 255)';
    // button.style.transform = `translate(${randomInitOne * 95}vw, ${randomInitTwo * 95}vh )`;

    setTimeout(() => {
        button.style.transform = `translate(${Math.random() * 95}vw, ${Math.random() * 95}vh )`;
        // button.style.transform = `translate(${(randomInitOne + Math.random()) * 95}vw, ${(randomInitTwo + Math.random()) * 95}vh )`;
        button.style.transition = 'transform 3s ease-in-out';
    }, 100);
}

function typeCloner(){

}

function typeBlinder(){
    // willl blind the screen
}

function typeHoarder(){
    // main target will be invincible until all of its sub targets are destroyed
    // sub targets gradualy will go to the main target and if absorbed, will penalize the player
}
clickListener();
moveListener();
