const checkBtnLm = document.getElementById('check-btn');
const textInputLm = document.getElementById('text-input');


function formatString(str) {
    const regex = /[^a-zA-Z\d]/g;
    return str.replace(regex, '');
}

function clearInput(input) {
    input.value = '';
}

function isAPalindrome() {
    const resultLm = document.getElementById('result');

    const textInput = formatString(textInputLm.value).toLowerCase();
    const textInputReverse = [...textInput].reverse().join('');
    
    if (textInput === '') {
        alert('Please input a value');
        resultLm.innerHTML = '';
        return;
    }

    let isEqual;
    textInput === textInputReverse ? isEqual = true : isEqual = false;

    if (isEqual) {
        resultLm.innerHTML = `<p>${textInputLm.value}  is a palindrome</p>`;
        clearInput(textInputLm);

    } else {
        resultLm.innerHTML = `<p>${textInputLm.value}  is not a palindrome</p>`;
        clearInput(textInputLm);
    }
}


checkBtnLm.addEventListener('click', isAPalindrome);

textInputLm.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        isAPalindrome();
    }
});