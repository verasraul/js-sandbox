//Group Members: Braun, Jerome

//Exercise #1
//Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number. 
// Call that function 2 times with different number pairs
// and log the output to make sure it works 
//(e.g. "The greater number of 5 and 10 is 10")
function greaterNum(num1, num2) {
  //If conditional way
  /*if (num1 > num2) {
    return num1;
  }
  else {
    return num2
  }*/

  //Ternary way
  return num1 > num2 ? num1 : num2;
}

console.log("The greater number of the two is " + greaterNum(3, 5));
console.log("The greater number of the two is " + greaterNum(2,1));






//Exercise #2
//Write a function named helloWorld that: 
// takes 1 argument, a language code ("es", "de", "en")
// returns "Hello, World" for the given language, for at least 
// 3 languages. It should default to returning English
//Call that function for each of the supported languages and log the 
// resultto make sure it works
function helloWorld(lang) {
  switch (lang) {
    case "es":
      //Spanish
      return "Hola Mundo";
    case "jp":
      //Japanese
      return "こんにちは世界 (Kon'nichiwa sekai)";
    default:
      //English
      return "Hello World"
  }
}
console.log(helloWorld("es"));
console.log(helloWorld("jp"));
console.log(helloWorld("en"));







//Exercise #3
//Write a function named assignGrade that:
//takes 1 argument, a number score
//returns a grade for the score, either "A", "B", "C", "D", or "F"
//Call that function for a few different scores and log the result 
//to make sure it works
function assignGrade(num) {
  switch (true) {
    case num >= 90:
      return "A";
    case num <= 89 && num >= 80:
      return "B";
    case num <= 79 && num >= 70:
      return "C";
    case num <= 69 && num >= 60:
      return "D";
    case num < 60:
      return "F";
  }
}
console.log("Your letter grade is: " + assignGrade(85));
console.log("Your letter grade is: " + assignGrade(59));
console.log("Your letter grade is: " + assignGrade(93));









//Exercise #4
//Write a function named pluralize that:
//takes 2 arguments, a noun and a number
//returns the number and pluralized form, like "5 cats" or "1 dog"
//call that function for a few different scores
//and log the result to make sure it works
//Bonus: Make it handle a few collective nouns like "sheep" and "geese"
function pluralize(noun, num) {
  let string = "";
  if (num > 1) {
    string = num + " " + noun + "s";
  }
  return string;
}
console.log(pluralize("bean", 2));