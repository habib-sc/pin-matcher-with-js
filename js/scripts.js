// pin getting function 
function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinStr = pin + '';
    if (pinStr.length == 4) {
        return pin;
    } else {
        return getPin();
    }
}

// pin generate function and displaying generated pin 
function generatePin() {
    const pin = getPin();
    document.getElementById('pin-generate-display').value = pin;
}

// Key pad value captureing 
document.getElementById('key-pads').addEventListener('click', function name(event) {
    const keyValue = event.target.innerText
    const keyPadDisplay = document.getElementById('key-pad-display');
    const previousKeyPadDisplay = keyPadDisplay.value;

    if (isNaN(keyValue)) {
        if (keyValue == 'C') {
            keyPadDisplay.value = '';
        }
    } else {
        keyPadDisplay.value = previousKeyPadDisplay + keyValue;
    }
})