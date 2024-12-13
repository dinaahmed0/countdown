const newYear = new Date(`January 1, ${new Date().getFullYear() + 1} 00:00:00`).getTime();  

const countdown = setInterval(() => {  
    const now = new Date().getTime();   
    const timeLeft = newYear - now;   
    
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));  
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));  
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));  
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);  

    document.getElementById("days").textContent = days;  
    document.getElementById("hours").textContent = hours;  
    document.getElementById("minutes").textContent = minutes;  
    document.getElementById("seconds").textContent = seconds;  

    if (timeLeft < 0) {  
        clearInterval(countdown);  
        document.querySelector(".countdown").innerHTML = "<h1>Happy New Year!</h1>";  
    }  
}, 1000);
