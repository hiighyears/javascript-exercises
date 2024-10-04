const sumAll = function(firstNum,lastNum) {
    let totalSum = 0;
    if(firstNum>lastNum){
        let middleMan = 0;
        middleMan = firstNum;
        firstNum = lastNum;
        lastNum = middleMan;
    }
    if(firstNum<0 || lastNum<0 || firstNum%1!=0 || lastNum%1!=0 || !Number.isInteger(firstNum) ||!Number.isInteger(lastNum)){
        return totalSum="ERROR";
    }
    for(let i = firstNum;i<=lastNum;i++){
        totalSum += i;
    }return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
