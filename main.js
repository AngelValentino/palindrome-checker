const textInputLm = document.getElementById('text-input');
const checkBtnLm = document.getElementById('check-btn');
const resultLm = document.getElementById('result');


function formatString(str) {
    const regex = /[^a-zA-Z\d]/g;
    return str.replace(regex, '');
}

checkBtnLm.addEventListener('click', () => {
    const textInput = formatString(textInputLm.value).toLowerCase();
    const textInputReverse = [...textInput].reverse().join('');
    
    if (textInput === '') {
        alert('Please input a value');
    }

    let isEqual;
    textInput === textInputReverse ? isEqual = true : isEqual = false;

    if (isEqual) {
        resultLm.innerHTML = `<p>${textInputLm.value}  is a palindrome</p>`;
    } else {
        resultLm.innerHTML = `<p>${textInputLm.value}  is not a palindrome</p>`;
    }
  

    console.log(isEqual);
    console.log(textInput);
    console.log(textInputReverse);
});