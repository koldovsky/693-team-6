const clock = document.querySelector('.clock');

(function() {
    function updateClock() {
        clock.innerHTML = new Date().toLocaleTimeString();
       }
    
    setInterval(updateClock, 1000);
})()

