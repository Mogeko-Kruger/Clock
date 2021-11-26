// calling setClock() function every 1 second (1000 milliseconds = 1 second)
setInterval(setClock, 1000);

//selecting the elements in index.html file and assigning them into variables (selecting hands)
const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');


function setClock() {
    //getting the time (date) and assigning into a variable (new date() assigns the current date and time into the variable)
    const currentDate = new Date()
    //setting how far should the secondHand rotate. (the division / 60 sets the scope on how far should seconds go )
    //if there's no limit it will go above 60 and won't do nothing, rendering it useless (it gets stuck)
    const secondsRatio = currentDate.getSeconds() / 60
    //there's 1 minute in 60 seconds, division prevents the problem above
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    //There's only 12 hours in the clock, division sets the scope accordingly
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12

    //setRotation is called and it grabs the hourHand element and hoursRation to know how it should be acting (or limited per say)
    //same goes for the other variables assigned below.
    setRotation(hourHand, hoursRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(secondHand, secondsRatio)   
};

//setRotation gets the --rotate var in css (which is the var of rotation() and rotationRatio * 360 sets how the hands should rotate)
//since it's * 360 it will rotate 360deg, a full rotation around the clock
function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotate', rotationRatio * 360)
}

//aligning clock so that when the page loads it doesn't starts on 0

setClock()