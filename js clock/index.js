window.onload = function(){

    function displayTime(){
        const date = new Date()
        document.getElementById("clock").innerHTML = date.toLocaleTimeString();
    };

    setInterval(displayTime, 1000);

};