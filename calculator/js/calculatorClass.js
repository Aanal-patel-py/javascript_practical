import { clickEventHandler,keyboardEventHandler } from "./eventListeners.js";


export class caculator {
    constructor(displayElement) {
        this.displayElement = displayElement;
        this.expression= '';
    
    }
    append(value) {
        const operators = ["+", "-", "*", "/", "%", "**"];
        const lastChar = this.expression.slice(-1);

        // START VALIDATION
        if (!this.expression && ["+", "*", "/", "%", "**"].includes(value)) {
            return;
        }

        // tWO OPERATOR VALIDATION
        if (operators.includes(lastChar) && operators.includes(value)) {
            // allow cases like: ( -5 ) or * -3
            if (value === "-") {
            this.expression += value;
            this.updateDisplay();
            }
            return;
        }

        // IF ( AND ANY OPERATOR OTHER THAN - THEN PREVENT
        if (lastChar === "(" && operators.includes(value) && value !== "-") {
            return;
        }
        // if leading 0 anywhere replace
        if (value >= "0" && value <= "9") {
            const parts = this.expression.split(/([+\-*/%()])/);
            const lastPart = parts[parts.length - 1];

            // if current number is exactly "0", replace it
            if (lastPart === "0") {
                parts[parts.length - 1] = value;
                this.expression = parts.join("");
                this.updateDisplay();
                return;
            }
        }


        //MULTIPLE DECIMAL POINT VALIDATION
        if (value === ".") {
            //PARTIIONED THE EXPERESSEION BASED ON OPERATORS AND PREVENT SECOND DECIMAL POINT IF ONE ALREADY EXISTS, IT CHECKS THE LAST PART
            const parts = this.expression.split(/[\+\-\*\/%]/);
            const currentNumber = parts[parts.length - 1];
            if (currentNumber.includes(".")) return;
        }

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

        let count = 0;

        for (let char of this.expression) {
        if (char === "(") count++;
        if (char === ")") count--;

        // closing bracket came before opening
        if (count < 0) {
            this.displayElement.value = "Error";
            return;
        }
        }

        // bracket issue causing error
        if (count !== 0) {
        this.displayElement.value = "Error";
        return;
        }
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
        else if (functionName === "log"){
            this.expression = Math.log10(this.expression);
        }
        else if (functionName === "10-exponent-x"){
            this.expression = Math.pow(10, this.expression);
        }
        else if (functionName === "square-root"){
            this.expression = Math.sqrt(this.expression);
        }
        else if (functionName === "square"){
            this.expression = Math.pow(this.expression, 2);
        }
        else if (functionName === "reciprocal"){
            this.expression = 1 / this.expression;
        }
        else if (functionName === "pi"){
            this.expression = Math.PI;
        }
        else if (functionName === "e"){
            this.expression = Math.E;
        }
        else if (functionName === "abs"){
            this.expression = Math.abs(this.expression);
        }
        else if (functionName === "n!"){
            let result = 1;
            for (let i = 1; i <= this.expression; i++) {
                result *= i;
            }
            this.expression = result;
        }
        else if (functionName === "exp"){
            this.expression = Math.exp(this.expression);
        }    
        else if (functionName === "sin"){
            this.expression = Math.sin(this.expression);
        }
        else if (functionName === "cos"){
            this.expression = Math.cos(this.expression);
        }
        else if (functionName === "tan"){
            this.expression = Math.tan(this.expression);
        }
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
clickEventHandler(calculatorInstance);
keyboardEventHandler(calculatorInstance);