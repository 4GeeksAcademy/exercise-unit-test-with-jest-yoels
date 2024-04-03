function sum(a, b){
    return a + b;
}

function fromEuroToDollar(euro){
    return euro * 1.07
}

function fromDollarToEuro(dollar){
    let result = dollar / 1.07.toFixed(3)
    let newResult = result.toFixed(2);
    return newResult;
}

function fromDollarToYen(dollar){
    let euroToYen = fromEuroToDollar(dollar) * 156.5
}

console.log(fromDollarToEuro(1));

module.exports = {sum, fromEuroToDollar, fromDollarToEuro};