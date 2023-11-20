"use strict";

// Dark Theme Button Functionality
function toggleButton(){
    let darkmode = document.body.classList;
    darkmode.toggle("darkmode");
}
//action when clicking the button
document.getElementById("toggleMode").addEventListener("click", toggleButton);

//Guessing Game

//Product Display

//Form Validation
function formSubmission(event){
    //stops from submitting default
    event.preventDefault();

    //accessing the form
    let form = document.querySelector("#contactForm");

    //holds the messages 
    let message = document.querySelectorAll(".message");
    
    //tracks if the form is valid
    let isValid = true;

    //reset display of error mesaages
    message.forEach(function(span){
        span.classList.remove("error");
    });

    //hide the success submission message
    document.querySelector("#submitted").classList.remove("show");
    document.querySelector("#submitted").classList.add("hide");

    //regex rexpressions
    let emailRgx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
    let nameRgx = /[a-z] [a-z]/i;
    let phoneNumber = /^\+?[0-9-]+$/;

    //fullname input
    if(fullname.value === "" || fullname.value.length <= 1 || !nameRgx.test(fullname.value)){
        //displays message when their is an error
        message[0].classList.add("error");
        //when form is invalid
        isValid = false;
    }

    //inputs for preferred method
    let checkedEmail = document.getElementById("email-radio");
    let checkedPhone = document.getElementById("phone-radio");

    //email input
    if(checkedEmail.checked === true && (email.value === "" || !emailRgx.test(email.value))){
        message[1].classList.add("error");
        isValid = false;
    }

    //phone input
    if(checkedPhone.checked === true && (phone.value === "" || !phoneNumber.test(phone.value))){
        message[2].classList.add("error");
        isValid = false;
    }

    //comment input
    if(comment.value === ""){
        message[3].classList.add("error");
        isValid = false;
    }

    //if the form is valid
    if(isValid){
        //show user the submission submitted successfully
        document.querySelector("#submitted").classList.remove("hide");
        document.querySelector("#submitted").classList.add("show");

        //display the users data to them
        let userSubmission = document.getElementById("submissionForm");

        userSubmission.innerHTML = 
        "<strong>Full Name: </strong>" + form.fullname.value + 
        "<br> <strong>Email: </strong>" + form.email.value +
        "<br><strong>Phone Number: </strong>" + form.phone.value + "<br><strong>Comment: </strong>" + form.comment.value;

        //reset the form
        form.reset();
    }
}
//upon submission of the form
document.querySelector("#contactForm").addEventListener("submit", formSubmission);