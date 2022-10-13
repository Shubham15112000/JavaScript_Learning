
console.log("******************************Ass.01*****************************");
var wordLenghtSquare = function (word){
    var wordLength = word.length;
    
    return wordLength * wordLength;
}
console.log(` Square of lenght javaScript =`);
console.log(wordLenghtSquare("javaScript"));
console.log(` Square of lenght Google =`);
console.log(wordLenghtSquare("Google"));
console.log(`Square of lenght Developer =`);
console.log(wordLenghtSquare("Developer"));


console.log("******************************* Question No. 2*********************");

  function message(){
    var givenStringLength = "i am Angular Developer".length;
    var result = "i am Angular Developer".split(" ");
    var total_word = result.length;
    givenStringLength/total_word;
    givenStringLength*total_word;
    console.log("string lenght : 22");
    console.log("total word : 4");
    console.log( "String length divide by total word:",givenStringLength/total_word);
    console.log( "String length multiply total word:",givenStringLength*total_word);
}
message();
console.log("***************************** Ass 02. Q-1***************************");
var number = function (num1,num2){
    var result = num1 > num2 ? num1 :num2;
    console.log(result);
}

console.log(`greatest number in 10,-10 is=` );
number(10,-10)
console.log("greatest number in 800,899 is=");
number (800,899)

console.log("*****Number is even or odd****");

var isEvenOrOdd = function(num1){
    var result = num1%2==0 ? true : false ;
    console.log(result);
return result;    

}
console.log("29------->");
isEvenOrOdd (29);
console.log("44------->");
isEvenOrOdd (44);
console.log("0------->");
isEvenOrOdd (0);
console.log(`101------->`);
isEvenOrOdd (101);






