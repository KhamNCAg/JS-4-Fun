document.getElementById('checkButton').addEventListener('click',checkPlaindrome);

function isPlaindrome(str){
    const smStr = str.toLowerCase();

    const rvrseStr = smStr.split('').reverse().join('');
    console.log(rvrseStr);
    return smStr === rvrseStr;
}

function checkPlaindrome(){
    const inpt = document.getElementById("inputText").value;
    const result = document.getElementById("result");
    if(isPlaindrome(inpt)){
        result.textContent = `"${inpt}" is a Palindrome`;
    }else{
        result.textContent = `"${inpt}" is not a Palindrome`;
    }

    result.classList.add('fadeIn');
    inpt = "";
}
