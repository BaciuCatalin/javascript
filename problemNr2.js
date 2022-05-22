console.log('main.js loaded...');

let userNumber1 = document.querySelector('#user-number-1');
let userNumber2 = document.querySelector('#user-number-2');
let userNumber3 = document.querySelector('#user-number-3');
let maximNr = [];

function maximumNumber() {
    testUserValue(userNumber1);
    testUserValue(userNumber2);
    testUserValue(userNumber3);
    // debugger;
    if (maximNr.length === 0) {
        alert("Input at least one number!");
    }
    else {
        maximNr = Math.max(...maximNr);
        alert('Maximum number of the three is ' + maximNr + '.');
    }
    location.reload();
}


function testUserValue(textbox) {
    let nr = textbox.value;
    if (checkNumber(nr)) {
        return maximNr.push(Number(nr));
    }
    return false;
}

