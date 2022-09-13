
 const time = document.querySelector(".time");

 function displayTime() {
    const date = new Date();
    time.innerHTML = date.toLocaleTimeString();
 }
 setInterval(displayTime, 1000);