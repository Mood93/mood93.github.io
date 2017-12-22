var myImage = document.querySelector('img');

myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/moudy-taleb-portrait-suit-saturated.jpg') {
        myImage.setAttribute ('src','images/moudy-taleb-portrait-suit.jpg'); 
    } else {
        myImage.setAttribute ('src','images/moudy-taleb-portrait-suit-saturated.jpg');
    }
}

var myButton = document.querySelector('button');
var welcomeMessage = document.getElementById('welcomeMessage');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    welcomeMessage.textContent = 'Welcome, ' + myName + '.';
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    welcomeMessage.textContent = 'Welcome, ' + storedName + '.';
}

myButton.onclick = function() { setUserName(); }