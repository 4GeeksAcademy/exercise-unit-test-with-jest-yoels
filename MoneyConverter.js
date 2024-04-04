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
    let euroToYen = fromDollarToEuro(dollar) * 156.5
    return parseFloat(euroToYen.toFixed(3));
}

function fromYenToEuro(yen){
    let euroToYen = yen / 156.5
    return parseFloat(euroToYen.toFixed(3));
}

function fromYenToPound(yen){
    let pound = fromYenToEuro(yen) * 0.87
    return parseFloat(pound.toFixed(3))
}

console.log(fromYenToPound(290));

module.exports = {sum, fromEuroToDollar, fromDollarToEuro, fromDollarToYen, fromYenToPound};