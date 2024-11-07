const keys = document.querySelectorAll('.key');
const displayInput=document.querySelector('.display .input');
const displayOutput=document.querySelector('.display .output');

let input ="";

for(let key of keys){
    const value = key.dataset.key;
    //buttons
    key.addEventListener('click', ()=>{
        if(value=="clear"){
            input="";
            displayInput.innerHTML="";
            displayOutput.innerHTML="";
        }else if(value =="backsp"){
            input = input.slice(0,-1);
            displayInput.innerHTML=input;
        }else if(value == "="){
            let result = eval(input);
            displayOutput.innerHTML=result; 
        }else if(value=="%"){
            input = (eval(input))/100;
            displayOutput.innerHTML=input;
        }else{
            input +=value;
            displayInput.innerHTML=input;
        }

    })
}




