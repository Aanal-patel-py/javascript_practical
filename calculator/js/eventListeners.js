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
        const operator = this.dataset.operator;
        console.log(value, action, operator);

        if (value){
            
            calc.append(value);
        }

       
    });
});
}



