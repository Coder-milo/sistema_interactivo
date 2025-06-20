function validarEdad(){
//I ask the user for their name and age.
let namee = prompt("Enter your name: ")
let age = prompt("Enter your age: ")

//I convert the age to a number
age = parseInt(age)

//Valid if the user canceled the action or left the field empty
//used the null for remove spaces at the beginning and end the namee
if( namee===null || namee.trim()===""){
    alert("The name field cannot be empty")
//Valid if what the user entered is not a number
}else if (isNaN(age)){
    alert("Please enter a valid number")
    console.error("Enter a valid number")
//In this condition it is valid that if the number entered by the user is not a positive number
}else if(age <0){
    alert("Age cannot be a negative number")
//Condition if the user is a minor, print the message
}else if (age<18){
    alert(`Hello ${namee}, You're a minor. Prepare yourself for great opportunities in the world of programming.`)
//Condition if the user is of legal age, print the message
}else{
    alert(`Hello ${namee}, You're of legal age. Prepare yourself for great opportunities in the world of programming.`)
    }
}
