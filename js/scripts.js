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

function generatePin() {
    const pin = getPin();
    document.getElementById('pin-generate-display').value = pin;
}