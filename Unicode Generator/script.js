function getChar(){

    const input = document.getElementById("inptChar").value;

    if(input){
        const uniVlu = input.charCodeAt(0);
        document.getElementById("result").textContent = `The Unicode Value of "${input}" is ${uniVlu}`
    }else{
        document.getElementById("result").textContent = 'Please Enter a Character.'
    }
}