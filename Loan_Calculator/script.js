document.getElementById('calculateBtn').addEventListener('click',calculateLoan);

function calculateLoan(){

    const loanAmount = parseFloat(document.getElementById('loanInput').value)
    const interestRate = parseFloat(document.getElementById('interestInput').value)
    const loanTerm = parseFloat(document.getElementById('termInput').value)

    if(isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm)){
        alert("Enter The Inputs Correctly!!!")
    }

    const monthlyInterest = interestRate/100/12;
    const monthlyPayment = (loanAmount * monthlyInterest)/( 1-Math.pow(1+monthlyInterest,-loanTerm));
    const totalInterest = (monthlyPayment * loanTerm) - loanAmount;

    document.getElementById('result').innerHTML = `
    <strong>
    <p>Monthly Payment : ${monthlyPayment.toFixed(2)}</p>
    <p>Total Interest : ${totalInterest.toFixed(2)}</p>
    </strong>
    `
}