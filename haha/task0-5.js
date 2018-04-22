const DOLLAR_RATE = 26;

function convertInUAH(usd){
    var usd;
    var uah = usd*DOLLAR_RATE;
    return uah;
}

function convertInUSD(uah){
    var uah;
    var usd = uah/DOLLAR_RATE;
    return usd;
}

console.log("5 USD is: " + convertInUAH(5) + " UAH");
console.log("130 UAH is: " + convertInUSD(130) + " USD");
