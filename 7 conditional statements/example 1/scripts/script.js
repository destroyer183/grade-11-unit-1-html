'use strict';

// store character's health, choose a random starting number between 0 and 100
let health = Math.round(Math.random() * 100);

// function to add the health text when the page loads
function start() {
    document.getElementById('health').innerText = 'health: ' + health;
}

// function to heal the character every time the function is called
function heal() {

    // check if the health is less than or equal to 250
    if (health <= 250) {
        // add 50 health
        health += 50;

    // this case is when the health is greater than 250
    } else {
        // calculate the difference between the health and 300, and add that to the health
        health += 300 % health;

        // hide the image
        document.getElementById('heal-button').style.visibility = 'hidden';
    }

    // display the new health
    document.getElementById('health').innerText = 'health: ' + health;

}
