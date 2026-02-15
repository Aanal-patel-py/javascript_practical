// const calc=document.getElementById("display");
// console.log(calc.value);
// clickEventHandlers(calc)
export function clickEventHandlers(calc){
    const buttonElements = document.querySelectorAll("button");
    console.log(buttonElements);


buttonElements.forEach(btn => { 
    btn.addEventListener("click", function() {
        const value=this.dataset.value;
        const action=this.dataset.action;
        const functionName = this.dataset.func;
        console.log(value, action, functionName);

        if (value){  
            calc.append(value);
        }
        else if (action === "clear"){
            calc.clear()
        }
        else if (action === "delete"){
            calc.delete()
        }
        else if (action === "evaluate"){
            calc.evaluate()
        }
        else if (functionName){
            calc.applyFunction(functionName)
        }

       
    });
});
}



