function calculateTip(){
    const billAmountDom = document.getElementById("billAmount");
    const serviceRatingDom = document.getElementById("serviceRating");
    const splitCountDom = document.getElementById("splitCount");
    const mealTypeDom = document.getElementById("mealType");
    
    const tipAmountDom = document.getElementById("tipAmount");
    const totalAmountDom = document.getElementById("totalAmount");
    const amountPerPersonDom = document.getElementById("amountPerPerson");

    const billAmount = parseFloat(billAmountDom.value);
    const serviceRating = parseFloat(serviceRatingDom.value);
    const splitCount = parseFloat(splitCountDom.value);
    const mealType = mealTypeDom.value;

    if(isNaN(billAmount) || isNaN(serviceRating) || isNaN(splitCount)){
        tipAmountDom.textContent = "Please Enter The Valid Inputs";
        totalAmountDom.textContent = "";
        amountPerPersonDom.textContent = "";
        return;
    }

    let tip;
    switch (serviceRating) {
        case 1:
            tip = billAmount * 0.05;
            break;
        case 2:
            tip = billAmount * 0.10;
            break;
        case 3:
            tip = billAmount * 0.15;
            break;
        case 4:
            tip = billAmount * 0.20;
            break;
    }

    if(mealType === 'dinner'){
        tip += 1 * amountPerPerson;
    }
    
    let totalAmount = billAmount + tip;
    let amountPerPerson = totalAmount / splitCount;

    tipAmountDom.textContent = `Tip : $${tip.toFixed(2)}`;
    totalAmountDom.textContent = `Total Amount : $${totalAmount.toFixed(2)}`;
    amountPerPersonDom.textContent = `Amount Per Person : $${amountPerPerson.toFixed(2)}`;

}

document.getElementById("calculateBtn").addEventListener('click',calculateTip);