// let val;
// val = window.innerHeight;
// val = window.innerwidth;
// val = window.location.pathname;
// console.log(val);

//Alert
// alert ("straight forward");
// Confirm
// if (confirm("straight forward")){
//     console.log("You are faithful");

// }else {
//     console.log("Man you are crook")
// }

// Prompt
// let person = prompt("what is your name?")
// if (person == null || person==""){
//     console.log ("you are anonymous")
// }else {
//     console.log("Hello " + person);
// }

// SetTimeout
// function timeOut(){
//     alert("Hello User, You are welcome")
// }
// const greet = setTimeout(timeOut, 3000);


// SetInterval
// function Interval(){
//     alert("Hi User, need help?")
// }
//  let timer = setInterval(Interval, 3000);
// //  clearTimer
//  clearInterval(timer)


 const time = document.querySelector(".time");

 function displayTime() {
    const date = new Date();
    time.innerHTML = date.toLocaleTimeString();
 }
 setInterval(displayTime, 1000);