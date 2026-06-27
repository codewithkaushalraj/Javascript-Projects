const instrument = document.getElementById("instrument")
instrument.addEventListener('click', (event) => {
    const parent = event.target.parentElement;

    // console.log(parent)
    const audio = parent.children[2];
    audio.currentTime = 0;
    audio.play();
    parent.style.scale = 1.2;
    setInterval(() => {
        parent.style.scale = 1;
    }, 150);
})

document.addEventListener('keydown', (Event) => {
    key = Event.key;
    if (key == "a" || key == "A") audio = document.getElementById("boom")
    else if (key == "s" || key == "S") audio = document.getElementById("clap")    
    else if (key == "d" || key == "D") audio = document.getElementById("hihat")
    else if (key == "f" || key == "F") audio = document.getElementById("kick")
    else if (key == "g" || key == "G") audio = document.getElementById("openhat")
    else if (key == "h" || key == "H") audio = document.getElementById("ride")
    else if (key == "j" || key == "J") audio = document.getElementById("snare")
    else if (key == "k" || key == "K") audio = document.getElementById("tink")
    else if (key == "l" || key == "L") audio = document.getElementById("sound_tom")
    else audio = none;


console.log(audio)
audio.currentTime = 0;
audio.play();
const parent=audio.parentElement
 parent.style.scale = 1.2;
    setInterval(() => {
        parent.style.scale = 1;
    }, 150);

})




