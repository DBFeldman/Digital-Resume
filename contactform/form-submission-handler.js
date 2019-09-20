
var regEx = /\S+@\S+\.\S+/;


function checkInput() {
    var inputName = document.getElementById('name');
    var inputMail = document.getElementById('mail');
    var inputMessage = document.getElementById('msg');
    var button = document.querySelector('.submit-button');
    if (inputName.value.trim() !== "" && regEx.test(inputMail.value) && inputMessage.value.trim() !== "") {
        button.style.backgroundColor = '#686565';
        button.disabled = false;
    } else {
        button.style.backgroundColor = '#979695';
        button.disabled = true;
    }
}

function sendData() {
    var button = document.querySelector('.submit-button');
    button.disabled = true;
    var XHR = new XMLHttpRequest();
    XHR.addEventListener("error", function(event){
        alert('Something went wrong.');
    })
    XHR.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200){
            alert("Your message has been sent!");
            form.reset();
            button.disabled = false;
    } else if (this.readyState == 4 && this.status !== 200) {
        alert("An error has occured, please resubmit your message.");
        button.disabled = false;
    }}
    XHR.open("POST", "https://script.google.com/macros/s/AKfycbwlOUI4GCxM6aDEuzmt78153u4uiM-pov6QQtjyGgn3ziT-mUMX/exec");
    var form = document.getElementById("contactForm")
    XHR.send(new FormData(form));
}
