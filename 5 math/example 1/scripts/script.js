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

let costOfXPerYear = 6400000000
let numberOfYearsRunning = 10

let teslaStockPrice = 197.08;
let teslaSharesOwned = 715000000;
let equityNow = teslaStockPrice * teslaSharesOwned;

// Calculate the total cost of running X over the years
let twitterCost = costOfXPerYear * numberOfYearsRunning;


document.getElementById('cost-of-x').innerText = 'X costs $' + costOfXPerYear + ' per year. ' + '\nAfter ' + numberOfYearsRunning + ' years, it will cost $' + totalCostOfX;


//  Calculate how much the Tesla shares will be in 10 years, after compunding 5% per year
let futureEquity = equityNow * (1 + 0.05) ** 10;

// Use the rounding formula to round Elon's future wealth to 2 decimal places
// The rounding formula is:
// 1) multiply by 10 ** numberOfDecimalPlaces
// 2) 


// print out how much money Elon has now
document.getElementById('elon-now').innerText = 'Tesla Stock Price: $' + teslaStockPrice + 
                                                '\nTesla Shares Owned: ' + teslaSharesOwned + 
                                                '\nElon\'s Equity: $' + equityNow;

document.getElementById('twitter-cost').innerText = 'in 10 years, Elon will have lost $' + twitterCost + ' to Twitter.';

let futureTeslaStockPrice = teslaStockPrice * (1 + 0.05) ** 10;

document.getElementById('tesla-stock').innerText = 'In 10 years, Tesla stock will be worth $' + futureTeslaStockPrice;

// calculate the profit from tesla stocks in 10 years
let profitFromTeslaStocks = teslaSharesOwned * futureTeslaStockPrice;

// calculate Elon's future net worth
let futureElonNetWorth = profitFromTeslaStocks - twitterCost;

// this prints out how much money Elon will make in the next 10 years, and adjusts the text if he gets poorer.
if (futureElonNetWorth >= 0) {
    document.getElementById('elon-net-worth').innerText = 'In 10 years, Elon will be $' + futureElonNetWorth + ' richer.';
} else {
    document.getElementById('elon-net-worth').innerText = 'In 10 years, Elon will be $' + futureElonNetWorth + ' poorer.';
}