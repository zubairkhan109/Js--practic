alert("Hello, World")

alert("Submission Successfull ")

// Use Case:
// Registration complete ho gayi.
// Feedback submit ho gaya.

alert("Please Enter Your Email Adders")

// User ne required field khali chhor di.

// let age = 15

if (age < 18){
    alert("You Are Not Eligible")
}

// Use Case:
// Voting systems
// Gaming websites
// Restricted content

let password = 123;

if(password !== "admin123"){
    alert("Invalid Password")
}

// Use Case:
// Login page


// Project: Simple Login System
    
let usernmae = prompt("Enter Your Name")
let password = prompt("Enter Yout Password")

if(usernmae === "zubair" && password === "123"){
    alert("Login Successfull")
}else{
    alert("Invalid Username or Password")
}


let number = Number(prompt("Enter Your Number"))
let opration = prompt("Enter Your Opration")
let number1 = Number(prompt("Enter Your Second Number"))

let result;

if(opration === "+"){
    result = number + number1
}else if(opration === "-"){
    result =number - number1
}else if(opration === "*"){
    result = number * number1
}else if(opration ==="/"){
    result = number / number1
}else{
    alert("Invalid Opration")
}

alert("Result " + result)   