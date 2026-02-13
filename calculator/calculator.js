const buttonElements=document.getElementsByClassName("btn");
// console.log(buttonElements)
const btn=buttonElements[0];
const btnValue=btn.value
console.log(btn.value)
const displayValue=document.getElementById("display");

console.log(displayValue)
const events=['click','keydown']


function updatingValue(bttn){
    displayValue.value+=bttn.value;
    console.log(displayValue.value) 

}

for(const bttn of buttonElements){
    console.log(bttn.value)
    if(bttn.value=="clear"){
        bttn.addEventListener("click",function(){
        displayValue.value='';
    });   
    }
    // else if(bttn.value=="backspace"){
    //     bttn.addEventListener("click",function(){
    //     displayValue.value
    // }); 
    // }
    else{
        bttn.addEventListener("click",updatingValue());
        displayValue.value.addEventListener("keydown",updatingValue());

    }
}
//.test method returns boolean 
function validateCalcInput(displayValue){
    const invalidRegex=/^[+-]?(\d+(\.\d*)?|\.\d+)([+\-*\/][+-]?(\d+(\.\d*)?|\.\d+))*$/;
    if(invalidRegex.test(displayValue.value)){
        console.log("valid input")
        function calc(displayValue){
            

    }

    }
    else{
        console.log("invalid input")
    }
}

















