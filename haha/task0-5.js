function convertInUAH(usd){
    var usd;
    var uah = usd*26;
    return uah;
}

function convertInUSD(uah){
    var uah;
    var usd = uah/26;
    return usd;
}

console.log("5 USD is: " + convertInUAH(5) + " UAH");
console.log("130 UAH is: " + convertInUSD(130) + " USD");