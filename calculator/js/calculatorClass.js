import { clickEventHandlers } from "./eventListeners.js";

export class caculator {
    constructor(displayElement) {
        this.displayElement = displayElement;
        this.expression= '';
    
    }
    append(value){
        this.expression += value;
        this.updateDisplay();
    }

    updateDisplay(){
        this.displayElement.value = this.expression;
    }
}

const displayElement = document.getElementById("display");
const calculatorInstance = new caculator(displayElement);
//object giving to click event handlers to perform operations on the display element
console.log(calculatorInstance)
clickEventHandlers(calculatorInstance);