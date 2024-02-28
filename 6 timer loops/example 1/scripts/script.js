'use strict';

// keep track of the number of likes the picture has
let likes = 0;

// create a timer loop to automatically like the picture every half-second
let timer;

// create a variable to store the interval between automatic likes in miliseconds1
let interval = 500;

// increase the number of likes for the picture by 1
function likePicture() {

    // increase the like count
    likes++;
    
    // display the new like count
    document.getElementById('p-likes').innerText = likes;
}

function start() {
    timer = setInterval(likePicture, interval);
}

function stop() {
    clearInterval(timer);
}

function increasePopularity() {
    interval /= 2;
}

function decreasePopularity() {
    interval *= 2;
}

function printValues() {
    console.log('Interval: ' + interval);
    console.log('likes: ' + likes);
}