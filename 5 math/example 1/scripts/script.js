'use strict';

// Calculate total cost of phone ownership
let monthlyPlanCost = 40;
let monthlyPhoneCost = 22.50;
let phoneDownPayment = 700;

// the total length of contract in months
let contractLength = 24;

// the total cost over 24 months
let totalCost = phoneDownPayment + (monthlyPhoneCost + monthlyPlanCost) * contractLength;

// print out total cost of the phone plan
console.log('total cost: ' + totalCost);
// alert(totalCost);

//print out annual cost of the 2 year plan
console.log('2 year plan: ' + totalCost / 2);
// alert(totalCost / 2);



// Calculate how much $1000 will be worth in 25 years if it compounds annually at 5%
let interestRate = 5 / 100;
let totalInterest = (1 + interestRate) ** 25;
let total = 1000 * totalInterest;
console.log('in 25 years, $1000 earning 5% compounding annually is ' + total);



// Calculate the equity value of Elon Musk's Tesla stock
// Twitter/X costs him $6.4 billion per year for the next 10 years
// Tesla stock will increase by 5% compounding each year for the next 10 years. How much will it be worth in 10 years?

let twitterCost = 6400000000 * 10;

let teslaStockPrice = 197.08;
let teslaSharesOwned = 715000000;
let equityNow = TeslaStockPrice * teslaSharesOwned;

let income = teslaStockPrice * (1 + 0.05) ** 10 * teslaSharesOwned - twitterCost;
console.log('Elon Musk made $' + income);