var dollarRate = 26;

function convertInUAH(usd){
    var usd;
    var uah = usd*dollarRate;
    return uah;
}

function convertInUSD(uah){
    var uah;
    var usd = uah/dollarRate;
    return usd;
}

console.log("5 USD is: " + convertInUAH(5) + " UAH");
console.log("130 UAH is: " + convertInUSD(130) + " USD");
