//dom elements
const emailInput = document.getElementById('mail-field');
const subscribeButton = document.getElementById('subs-button');
const validEmail = document.getElementById('valid-mail-message');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const sucessMessage = document.getElementById('submission-message');

function validateEmail(email){
    return emailRegex.test(email);
};

emailInput.addEventListener('input', () => {
    const userEmail = emailInput.value;
    if(validateEmail(userEmail)){
       validEmail.textContent=`Email is valid, you can now submit your message`;
       validEmail.style.color = "green";
       validEmail.style.display = 'block';
    }else{
        validEmail.textContent = `Please enter a valid email`
        validEmail.style.color = "red";
        validEmail.style.display ='block';
    }
});

subscribeButton.addEventListener("click", () => {
    sucessMessage.style.color = 'green';
    sucessMessage.textContent = `Email sent successfully`;
    sucessMessage.style.display ="block";
    validEmail.style.display ="none";
});




