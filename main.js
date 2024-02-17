const checkBtnLm = document.getElementById('check-btn');
const textInputLm = document.getElementById('text-input');
   
function changeTipAtHover() {
    const lightBulbOnLm = document.getElementById('lightbulb-on');
    const lightBulbOffLm = document.getElementById('lightbulb-off');
    const tooltipTextLm = document.getElementById('tooltip-text');

    lightBulbOffLm.addEventListener('mouseover', () => {
        lightBulbOnLm.style.display = 'block';
        tooltipTextLm.innerHTML = `<p>Examples of palindromes: <br />Civic, Radar, Race car, Never odd or even, (A man, a plan, a canal, Panama.)</p>`
    });
    
    lightBulbOffLm.addEventListener('mouseout', () => {
        lightBulbOnLm.style.display = 'none';
        tooltipTextLm.innerHTML = `<p>A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.</p>`
    });
}

changeTipAtHover();
    
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

    const isEqual = textInput === textInputReverse ? true : false;

    if (isEqual) {
        resultLm.innerHTML = `<p><span>${textInputLm.value}</span> is a palindrome</p>`;
        clearInput(textInputLm);

    } else {
        resultLm.innerHTML = `<p><span>${textInputLm.value}</span> is not a palindrome</p>`;
        clearInput(textInputLm);
    }
}

checkBtnLm.addEventListener('click', isAPalindrome);

textInputLm.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        isAPalindrome();
    }
});





