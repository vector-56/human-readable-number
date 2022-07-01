module.exports = function toReadable (number) {
    let numbers = [
        ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"],
        ["ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
    ]
 
    let numberToString = String(number);
    let numberToMassive = numberToString.split("");
 
    if (number<20) {
        return numbers[0][number];
    }
    if (numberToString.length===2&&numberToMassive[1]==="0") {
        return numbers[1][Number(numberToMassive[0])-1];
    }
    if (numberToString.length===2&&numberToMassive[1]!=="0") {
        return numbers[1][Number(numberToMassive[0])-1] + " " + numbers[0][Number(numberToMassive[1])];
    }
    if (numberToString.length===3&&numberToMassive[1]==="0"&&numberToMassive[2]==="0") {
        return numbers[0][Number(numberToMassive[0])] + " " + "hundred";
    }
    if (numberToString.length===3&&numberToMassive[1]!=="0"&&numberToMassive[2]==="0") {
        return numbers[0][Number(numberToMassive[0])] + " " + "hundred" + " " + numbers[1][Number(numberToMassive[1])-1];
    }
    if (numberToString.length===3&&numberToMassive[1]==="1"||numberToMassive[1]==="0"&&numberToMassive[2]!=="0") {
        return numbers[0][Number(numberToMassive[0])] + " " + "hundred" + " " + numbers[0][number-Math.trunc(number/100)*100];
    }
    if (numberToString.length===3&&numberToMassive[1]!=="0"&&numberToMassive[2]!=="0") {
        return numbers[0][Number(numberToMassive[0])] + " " + "hundred" + " " + numbers[1][Number(numberToMassive[1])-1] + " " + numbers[0][Number(numberToMassive[2])];
    }
}