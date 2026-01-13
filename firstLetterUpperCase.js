const readline = require('readline')

function firstLetterUpperCase(str) {
    let newStr = str.toString().split(' ');
    let firstLetter = newStr[0].toUpperCase();

    const upperStr = newStr.map((index) => {
        let strArray = index.toString().split('');
        let charUpper = strArray[0].toUpperCase();
        strArray.shift()
        strArray.unshift(charUpper)
        return strArray.join('');
    })
    return upperStr.join(' ');

};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a phrase in all lower-case: ', (answer) => {
    console.log(firstLetterUpperCase(`${answer}`));
    rl.close();
});

