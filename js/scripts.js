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

// Verify pin or matching pin function
let tryCount = 3;

function verifyPin() {
    const pinGenerateDisplay = document.getElementById('pin-generate-display').value;
    const keyPressedDisplay = document.getElementById('key-pad-display').value;

    if (tryCount > 0) {
        if (pinGenerateDisplay == keyPressedDisplay) {
            document.getElementById('notify-success').style.display = 'block';
            document.getElementById('notify-fail').style.display = 'none';
        } else {
            document.getElementById('notify-fail').style.display = 'block';
            document.getElementById('notify-success').style.display = 'none';
        }
        tryCount--;
        document.getElementById('try-count').innerText = tryCount;
    }


}