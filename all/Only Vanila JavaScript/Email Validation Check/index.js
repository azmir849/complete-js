
//make a function validation
function validation(){
//Imports Elements form index.html
var form = document.getElementById('form');
var email = document.getElementById('emailInput').value;
var text = document.getElementById('text');
var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

//Checking match value of emailInput and pattern
if(email.match(pattern)){
    form.classList.add('valid')
    form.classList.remove('Invalid')
    text.innerHTML = 'Valid email address'
    text.style.color = '#00ff00'
}else{
    form.classList.remove('valid')
    form.classList.add('Invalid')
    text.innerHTML = 'Enter valid email address'
    text.style.color ='#ff0000'
}
}