


function firstLetterUpperCase(str) {
    let newStr = str.toString().split(' ');
    console.log(newStr);
    let firstLetter = newStr[0].toUpperCase();

    const upperStr = newStr.map((index) => {
        let strArray = index.toString().split('');
        console.log(strArray)
        let charUpper = strArray[0].toUpperCase();
        strArray.shift()
        strArray.unshift(charUpper)
        return strArray.join('');
    })
    return upperStr.join(' ')

};
console.log(firstLetterUpperCase('advanced micro devices inc.'))


