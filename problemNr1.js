console.log('main.js loaded...');

let firstNumber = document.querySelector('#user-number-1');
let secondNumber = document.querySelector('#user-number-2');
let thirdNumber = document.querySelector('#user-number-3');

function calculate() {
    let errors = false;

    let nr1 = testUserValue(firstNumber, 'The first number is invalid!');
    if (nr1 === false) {
        errors = true;
    }

    let nr2 = testUserValue(secondNumber, 'The second number is invalid!');
    if (nr2 === false) {
        errors = true;
    }

    let nr3 = testUserValue(thirdNumber, 'The third number is invalid');
    if (nr3 === false) {
        errors = true;
    }

    if (errors) {
        return;
    }

    if (nr1 + nr2 == 0 || nr2 == 0 || nr2 * (nr1 || nr3) == 0) {
        alert('The division is not possible!');
    }
    else {
        let calculate = ((nr1 * nr2) + (nr2 * nr3)) / (nr1 + nr2);
        alert('The result is: ' + calculate + '.');
    }
    location.reload();
}


function testUserValue(textbox, errorMsg) {
    let nr = textbox.value;
    textbox.style.borderColor = 'black';
    if (checkNumber(nr) == false) {
        alert(errorMsg);
        textbox.style.borderColor = 'red';
        return false;
    }
    return Number(nr);
}