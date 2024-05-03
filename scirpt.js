function calculateLove(){

    const name1 = document.getElementById("yur_nm").value.trim()
    const name2 = document.getElementById("ptnr_nm").value.trim()

    if(name1.trim()=="" || name2.trim()==""){

        alert("Please enter both names.")

    }else{

        const prcnt = Math.floor(Math.random() * 101)
        const result = document.getElementById("result")

        result.innerHTML = `${name1} and ${name2}'s Love Percentage : ${prcnt} .`

        if(prcnt < 31){
            result.innerHTML += `<br>Not A Great Match. Keeping Looking!`
        }else if(prcnt < 71){
            result.innerHTML += `<br>There Is Potential. Give It A Try!`
        }else{
            result.innerHTML += `<br>Great Match! Love Is In The Air!`
        }
        
    }
}