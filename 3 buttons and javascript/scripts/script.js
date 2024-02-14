
const numbers = [1, 2, -2, 6, -7, 9, -4, -8];

console.log('array: ' + numbers.toString());

numbers.sort();

console.log('sorted array: ' + numbers.toString());

console.log('typeof NaN(not a number): \"' + typeof(NaN) + '\"');

console.log('99999999999999999 = ' + 99999999999999999);

console.log('0.5 + 0.1 == 0.6: ' + (0.5 + 0.1 == 0.6));

console.log('0.1 + 0.2 == 0.3: ' + (0.1 + 0.2 == 0.3));

console.log('Math.max(): ' + Math.max());

console.log('Math.min(): ' + Math.min());

console.log('[] + []: \"' + ([] + []) + '\"');

console.log('[] + {}: \"' + ([] + {}) + '\"');

console.log('{} + []: ' + ({} + []));

console.log('true + true + true === 3: ' + (true + true + true === 3));

console.log('true - true: ' + (true - true));

console.log('true == 1: ' + (true == 1));

console.log('true === 1: ' + (true === 1));

console.log('(! + [] + ![]).length: ' + ((! + [] + ![]).length));

console.log('(! + [] + [] + ![]).length: ' + ((! + [] + [] + ![]).length));

console.log('9 + \"1\": \"' + (9 + '1') + '\"');

console.log('91 - \"1\": ' + (91 - '1'));

console.log('[] == 0: ' + ([] == 0));



// alert('Hello World!');



function showQuote4() {
    alert('If not us, who? If not now, when? ');
}

function openYoutubeLink() {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')
}




