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
    clear(value){
        this.expression = '';
        this.updateDisplay();
    }
    delete(value){
        this.expression = this.expression.slice(0, -1);
        this.updateDisplay();
    }
    evaluate(value){
        // Funtion is built in  constructor, helps in creating funtion dynamically from the string.
        // the () is used to call funtion immediately after its creation.
        const result = Function(
            '"use strict"; return (' + this.expression + ')')();
        this.expression = result.toString();    
        this.updateDisplay();
        }
        
    

    applyFunction(functionName){
        if (functionName === "ln"){
            this.expression = Math.log(this.expression);
        }
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