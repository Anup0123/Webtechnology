<<<<<<< HEAD
//console.log("Hello world, I am learning JavaScript");

//in javascript we use let, var, const to declare and initialize variable

/*let a=6;
console.log(typeof(a))  // typeof() determines types of data
let b=7;
let sum=a + b;
console.log("The sum of numbers" + sum);*/

/*var a=3;
var b=2;
var result=a * b;
console.log(result);*/

//let a;
//var b;
//a=3;
//b=5;
//using const we cannot declare variable; we should declare and initialization of variable in same place

//while using const write variable name in capital
/*const PI=3.14;
//window.prompt to take user input
let radius= window.prompt("Enter radius: ");
let circumference=2 * PI * radius;
console.log("The cirumference of a circle is: "+circumference);*/

/*let age=window.prompt("Enter age:")//global variable 
//function 
function bark(){
    
    if (age<10){
        console.log("The dog is still young");
    }
    else{
        console.log("The dog is old");
    }
    //console.log("The dog is barking");
}



function sleep(){
    if (age>=10){
        console.log(age);//age is being accesed in sleep function as it is global variable
        console.log("The dog sleep fast"+age);
    }else{
        console.log("The dog sleep slowly");
    }
}

bark();//function call
sleep();*/


/*document.getElementById("mybutton").onclick= function(){
    let radius= document.getElementById("mynumber").value;
    console.log(radius);
    const PI=3.14;
    let circumference = 2 * PI * radius;
    //document.getElementById("circumference").innerHTML =circumference; //innerHTML changes in HTML; overwrite
    document.getElementById("circumference").append(circumference);// circumference= ans ; will be shown in website; append=function which do not overwrite by add the content in side
    //alert("Hello")
}*/


document.getElementById("butn").onclick=function(){
    let name=document.getElementById("username").value;
    //document.getElementById("user").innerHTML=name;
    document.getElementById("user").append(name);
}

//make form of username
//output; Hello, username


=======
//console.log("Hello world, I am learning JavaScript");

//in javascript we use let, var, const to declare and initialize variable

/*let a=6;
console.log(typeof(a))  // typeof() determines types of data
let b=7;
let sum=a + b;
console.log("The sum of numbers" + sum);*/

/*var a=3;
var b=2;
var result=a * b;
console.log(result);*/

//let a;
//var b;
//a=3;
//b=5;
//using const we cannot declare variable; we should declare and initialization of variable in same place

//while using const write variable name in capital
/*const PI=3.14;
//window.prompt to take user input
let radius= window.prompt("Enter radius: ");
let circumference=2 * PI * radius;
console.log("The cirumference of a circle is: "+circumference);*/

/*let age=window.prompt("Enter age:")//global variable 
//function 
function bark(){
    
    if (age<10){
        console.log("The dog is still young");
    }
    else{
        console.log("The dog is old");
    }
    //console.log("The dog is barking");
}



function sleep(){
    if (age>=10){
        console.log(age);//age is being accesed in sleep function as it is global variable
        console.log("The dog sleep fast"+age);
    }else{
        console.log("The dog sleep slowly");
    }
}

bark();//function call
sleep();*/


/*document.getElementById("mybutton").onclick= function(){
    let radius= document.getElementById("mynumber").value;
    console.log(radius);
    const PI=3.14;
    let circumference = 2 * PI * radius;
    //document.getElementById("circumference").innerHTML =circumference; //innerHTML changes in HTML; overwrite
    document.getElementById("circumference").append(circumference);// circumference= ans ; will be shown in website; append=function which do not overwrite by add the content in side
    //alert("Hello")
}*/


document.getElementById("butn").onclick=function(){
    let name=document.getElementById("username").value;
    //document.getElementById("user").innerHTML=name;
    document.getElementById("user").append(name);
}

//make form of username
//output; Hello, username


>>>>>>> aa61a50e5824a25919d96cb93cf843bfae3ccbc5
