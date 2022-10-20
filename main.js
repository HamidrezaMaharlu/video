const p = document.body.querySelector(".badge")
const video = document.body.querySelector("video")
const input = document.body.querySelector("input")
const play = document.getElementById("play");
const container= document.body.querySelector(".container")


let loop = 1
let count;
let show=1

// define func Counter
function Counter() {
    count=input.value
    console.log(count)
    video.play();
    playVideo()
    show=1
    p.innerHTML=`${show}`
    video.addEventListener("ended", repeatVideo);
}
function repeatVideo() {
    console.log(count)
    if (count ==1) {
        pauseVideo()
    }
    if(count > 1) {
        count--;
        video.play();
        show++;
        p.innerHTML=`${show}`;
    }
}

// add event listener to input
input.addEventListener("change",()=>{
    if (input.value < 10 && input.value > 0) Counter();
    else {
        alert("you didn't enter a valid value")
    }
})
//--------------------------play/pause--------------------
function playVideo() {
    //add class play to parent and check playing or not in add event listener
    container.classList.add("playing")
    //change the icon
    play.classList.remove("bi-play-fill");
    play.classList.add("bi-pause-fill");
    video.play()
}

function pauseVideo() {
    container.classList.remove("playing")
    play.classList.remove("bi-pause-fill");
    play.classList.add("bi-play-fill");
    video.pause()
}
play.addEventListener("click", () => {
    const isPlaying = container.classList.contains("playing")
    if (isPlaying) {
        pauseVideo();
    } else {
        playVideo()
    }
})


