    document.getElementById('match-pin').style.display = 'none';
    document.getElementById('misMatch-pin').style.display = 'none';

//Automatic pin generate button activity
    document.getElementById("pin-generate-button").addEventListener("click", function() {
    document.getElementById("pin-OTP").value = Math.floor(1000 + Math.random() * 8999);
})

//BackSpace Button Activity
function backspace(){
    var value = document.getElementById("pin-entry").value;
    document.getElementById("pin-entry").value = value.substr(0, value.length - 1);
}

//Clear Button Activity
function allClear(){
    document.getElementById("pin-entry").value="";
}

//Number Buttons(0-9) Activity
function numberButton(num) {
    document.getElementById('pin-entry').value = document.getElementById('pin-entry').value + num;
}

//Submit Button Activity
function submitButton() {
    let pinInput = document.getElementById('pin-entry').value;
    let generatedPin = document.getElementById('pin-OTP').value;
    if (pinInput == "" && generatedPin == "") {
        alert('Please generate correct pin or your pin number is empty!!');
    } else if (pinInput == generatedPin) {
        document.getElementById('match-pin').style.display = 'block';
        document.getElementById('misMatch-pin').style.display = 'none';
    } else {
        document.getElementById('misMatch-pin').style.display = 'block';
        document.getElementById('match-pin').style.display = 'none';
        tryLeft();
    }
}