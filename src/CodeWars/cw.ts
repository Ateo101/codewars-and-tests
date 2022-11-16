export const zeroFuel = (distanceToPump:number, mpg:number, fuelLeft:number) => {

    /*You were camping with your friends far away from home, but when it's time to go back, you realize that
    your fuel is running out and the nearest pump is 50 miles away! You know that on average,
    your car runs on about 25 miles per gallon. There are 2 gallons left.

    Considering these factors, write a function that tells you if it is possible to get to the pump or not.

    Function should return true if it is possible and false if not.*/

    return fuelLeft * mpg >= distanceToPump ? true : false
}

function isPalindrome(str: string) {
    const arr = str.toLowerCase().split('');
    const reverseArr = arr.reverse();
    const reverseStr = reverseArr.join('');
    return str.toLowerCase() == reverseStr ? true : false
}

// @ts-ignore
String.prototype.toAlternatingCase = function () {
    // altERnaTIng cAsE <=> ALTerNAtiNG CaSe
    let newString = [];
    let character = '';
    for (let i = 0; i < this.length; i++) {
        character = this[i].toString()
        if (character === character.toUpperCase()) {
            newString.push(character.toLowerCase())
        }
        else if (character === character.toLowerCase()) {
            newString.push(character.toUpperCase())
        }
        else {
            newString.push(character)
        }
    }
    return newString.toString().replace(/,/g, '')
}