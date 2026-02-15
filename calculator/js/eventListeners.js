// const calc=document.getElementById("display");
// console.log(calc.value);
// clickEventHandlers(calc)
export function clickEventHandler(calc){
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
        else if (action === "toggle-sign") {
            calc.toggleSign();
        }
    });
});
}


export function keyboardEventHandler(calc) {
  document.addEventListener("keydown", (e) => {
    if (e.repeat) return; //tap a key : yes , but hold a key : ignored

    const allowed = /^[0-9+\-*/().%]$/;
    console.log("KEY:", e.key);

    if (allowed.test(e.key)) {
      calc.append(e.key);
    }
    if (e.key === "Enter") {
      e.preventDefault();
      calc.evaluate();
      return;
    }

    if (e.key === "Backspace") {
      e.preventDefault();
      calc.delete();
      return;
    }

    if (e.key === "Escape") {
      calc.clear();
    }
  });
}
