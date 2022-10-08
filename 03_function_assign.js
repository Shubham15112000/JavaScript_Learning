
function shubham(){
    console.log("Thise are my information");
}
shubham()

function sawale(){
    console.log("Shubham Vishwanath Sawale");
}
sawale()
console.log("-------------Q-2----------");
function rudra( arg1, arg2){
    console.log( arg1,arg2);    
}
rudra( "Shubham", "Sawale");

console.log("---------Q-3------------");
function rudra( arg1,arg2){
    console.log("---------- Before swap-------------");
    console.log(arg1, arg2);
    console.log("---------- After swap-------------");
    var temp = arg1;
    arg1 = arg2;
    arg2 = temp;
    console.log(arg1, arg2);
}
rudra("Virat", "Anushka");
rudra("1000","2000")

console.log("--------Q-4---------");
function addition( arg1,arg2,arg3){
    console.log( arg1 + arg2 + arg3);
}
addition(10.23,600,40);
addition("Hello","Good","Morning");
