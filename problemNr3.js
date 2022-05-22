console.log('problemNr3.js loaded...');

let firstNumber = document.querySelector('#user-number-1');
let secondNumber = document.querySelector('#user-number-2');

function sumOfAllEvens() {
    let errors = false;
debugger;
    let n = testUserValue(firstNumber, 'The first number is invalid!');
    if (n === false) {
        errors = true;
    }

    let m = testUserValue(secondNumber, 'The second number is invalid!');
    if (m === false) {
        errors = true;
    }
    
    if (errors) {
        return;
    }

    if (n > m) {
        let aux = n;
        n = m;
        m = aux;
    }

    let sum = 0;
    let i = n;
    while (i <= m) {
        if (i % 2 == 0) {
            sum = sum + i;
        }

        i++;
    }
    alert('The sum of evens is: ' + sum + '.');
    location.reload();
}


function testUserValue(textbox, errorMsg) {
    let nr = textbox.value;
    textbox.style.borderColor = 'black';
    if (checkNumber(nr) == false) {
        alert(errorMsg)
        textbox.style.borderColor = 'red';
        return false;
    }
    return parseInt(Number(nr));
}