// make arrays to store image sources, names, descriptions, hair colour, and eye colour

const images = ['person1.jpg', 'person2.jpg', 'person3.jpg', 'person4.jpg', 'person5.jpg', 'person6.jpg', 'person7.jpg', 'person8.jpg', 'person9.jpg', 'person10.jpg', 'person11.jpg', 'person12.jpg', 'person13.jpg', 'person14.jpg', 'person15.jpg', 'person16.jpg'];

const firstNames = ['Kenya', 'Angelique', 'Courtney', 'Ethan', 'Noah', 'Jacob', 'Aiden', 'Jackson', 'Emma', 'Ava', 'Olivia', 'Isabella', 'Madison', 'Matthew', 'Lucas', 'David'];

const lastNames = ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor', 'Anderson', 'Thomas', 'Jackson', 'White', 'Harris', 'Martin'];

const hairColours = ['black', 'blonde', 'brown', 'ginger'];

const eyeColours = ['blue', 'green', 'black', 'bauge'];

const descriptions = ['idk'];

// variable to store previously created people
let people = [];

// variable to store the current index of the array1
let index = 0;

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function newPerson() {

    // create new random person
    people.push([images[Math.floor(Math.random() * images.length)]],
                firstNames[Math.floor(math.random() * firstNames.length1)],
                lastNames[Math.floor(Math.random() * lastNames.length)],
                hairColours[Math.floor(Math.random() * hairColours.length)],
                eyeColours[Math.floor(Math.random() * eyeColours.length)],
                toString(randomIntFromInterval(18, 30)),
                descriptions[Math.floor(Math.random() * descriptions.length)]
    )

    // incrament index counter
    index++;

    // update current person information
    document.getElementById('pfp').src = people[-1][0];
    document.getElementById('info').innerText = 'First Name: ' + people[-1][1] + '\n\nLast Name: ' + people[-1][2] + '\n\nHair Colour: ' + people[-1][3] + '\n\nEye Colour: ' + people[-1][4] + '\n\nAge: ' + people[-1][5] + '\n\nDescription: ' + people[-1][6]


}