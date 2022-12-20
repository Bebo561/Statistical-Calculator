var num1;
var num2;
var num3;
document.getElementById("button").onclick = function(){
    var tempStr1 = document.getElementById("var1").value;
    num1 = parseFloat(tempStr1);
    
    var tempStr2 = document.getElementById("var2").value;
    num2 = parseFloat(tempStr2);
    
    var tempStr3 = document.getElementById("var3").value;
    num3 = parseFloat(tempStr3);
    output();
}

function calcMax(num1, num2, num3){
    return Math.max(num1, Math.max(num2, num3));
}
function calcMin(num1, num2, num3){
    return Math.min(num1, Math.min(num2, num3));
}
function calcMean(num1, num2, num3){
    return ((num1 + num2 + num3)/3);
}
function calcRange(max, min){
      return (max - min);
    
}
function calcMedian(num1, num2, num3){
    return [num1, num2, num3].sort()[1];
}

function output(){
    let maxResult = calcMax(num1, num2, num3);
    let minResult = calcMin(num1, num2, num3);
    let rangeResult = calcRange(maxResult, minResult);
    let meanResult = calcMean(num1, num2, num3);
    let medianResult = calcMedian(num1, num2, num3);

    document.getElementById("max").innerHTML = maxResult;
    document.getElementById("mean").innerHTML = meanResult;
    document.getElementById("Range").innerHTML = rangeResult;
    document.getElementById("min").innerHTML = minResult
    document.getElementById("median").innerHTML = medianResult;
}