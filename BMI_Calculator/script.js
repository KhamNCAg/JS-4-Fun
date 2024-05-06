document.getElementById("BMI_Form").addEventListener('submit', function(e){

    e.preventDefault();

    const gndr = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    const heightFts = parseInt(document.getElementById('height-feet').value);
    const heightInches = parseInt(document.getElementById('height-inches').value);
    const weight = parseFloat(document.getElementById('weight').value);

    if(gndr && age && heightFts && heightInches && weight){
        const heightMtrs = ((heightFts * 12) + heightInches) * 0.0254 ;
        console.log(heightMtrs)

        const bmi = weight / (heightMtrs * heightMtrs);
        console.log(bmi)
        
        let ctogry = '';

        if(bmi < 18.5){
            ctogry = 'Under Weight'
        }else if(bmi > 18.4 && bmi < 24.9){
            ctogry = 'Normal Weight'
        }else if(bmi > 24.9 && bmi < 29.9){
            ctogry = 'Over Weight'
        }else{
            ctogry = 'Obese'
        }

        let resMsg = 'Your BMI : ' + bmi.toFixed(2) + '<br>' + "Category : " + ctogry ;

        document.getElementById('result').innerHTML = resMsg;
    }

})