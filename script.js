const inputItself = document.getElementById('inputItself');
const inputButton = document.getElementById('inputButton');
const outputContainer = document.querySelector('.output');
const outputItselfIndicator = document.querySelectorAll('.output-itself-indicator');
let errorMessages = [];

// INPUT ITSELF

inputItself.addEventListener('input', e => {
    const inputValue = inputItself.value;
    // MUST BE MORE THAN 8 CHARACTERS
    if (inputValue.length < 8) {
        errorMessages.push('Must be more than 8 characters.');
        outputItselfIndicator[0].classList.remove('requirement-is-met');
    } else {
        outputItselfIndicator[0].classList.add('requirement-is-met');
    };
    // MUST BE LESS THAN 16 CHARACTERS
    if (inputValue.length > 16) {
        errorMessages.push('Must be more than 8 characters.');
        outputItselfIndicator[1].classList.remove('requirement-is-met');
    } else {
        outputItselfIndicator[1].classList.add('requirement-is-met');
    };
    // MUST INCLUDE AT LEAST ONE UPPER CASE LETTER
    if (!upperCaseLetter(inputValue)) {
        errorMessages.push('Must include at least one upper case letter.');
        outputItselfIndicator[2].classList.remove('requirement-is-met');
    } else {
        errorMessages = [];
        outputItselfIndicator[2].classList.add('requirement-is-met');
    };
    // MUST INCLUDE AT LEAST ONE LOWER CASE LETTER
    if (!lowerCaseLetter(inputValue)) {
        errorMessages.push('Must include at least one lower case letter.');
        outputItselfIndicator[3].classList.remove('requirement-is-met');
    } else {
        errorMessages = [];
        outputItselfIndicator[3].classList.add('requirement-is-met');
    };
    // MUST INCLUDE AT LEAST ONE NUMBER
    if (!containNumber(inputValue)) {
        errorMessages.push('Must include at least one number.');
        outputItselfIndicator[4].classList.remove('requirement-is-met');
    } else {
        errorMessages = [];
        outputItselfIndicator[4].classList.add('requirement-is-met');
    };
    // MUST INCLUDE AT LEAST ONE SPECIAL CHARACTER (e.g. !, @, #).
    /* if (!regex.match(inputValue)) {
        errorMessages.push('Must include at least one special character.');
        outputItselfIndicator[5].classList.remove('requirement-is-met');
    } else {
        errorMessages = [];
        outputItselfIndicator[5].classList.add('requirement-is-met');
    }; */
    // MAKING SURE THAT A USER CANNOT SEND A REQUEST WITHOUT A PASSWORD
    if (inputValue.length === 0) {
        errorMessages.push('Empty input');
        for (const outputItselfIndicators of outputItselfIndicator) {
            outputItselfIndicators.classList.remove('requirement-is-met');
        };
    };
});

// SUBMIT BUTTON

inputButton.addEventListener('click', e => {
    e.preventDefault();

    // SUCCES MESSAGE
    if (errorMessages.length === 0) {
        alert('Your password is secure enough.');
        for (const outputItselfIndicators of outputItselfIndicator) {
            outputItselfIndicators.classList.remove('requirement-is-met');
        };
        errorMessages = [];
        inputItself.value = '';
    } else {
        alert('Your password must meet the requirements.');
    };
});

// FUNCTIONS

function upperCaseLetter(upperCaseString) {
    const regex = /[A-Z]/g;
    return upperCaseString.match(regex);
};

function lowerCaseLetter(lowerCaseString) {
    const regex = /[a-z]/g;
    return lowerCaseString.match(regex);
};

function containNumber(number) {
    const regex = /[0-9]/;
    return number.match(regex);
};

/* const regex = /[-’/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]/g; */

function removeWhiteSpace(whiteSpace) {
    const regex = /\s/gi;
    return whiteSpace.replace(regex, '');
}