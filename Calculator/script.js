const buttons = document.querySelector(".buttons");
const display = document.querySelector(".display");

const operators = ["%", "÷", "+", "-", "x"];

let expression = "";
let decimalCounter = 0;

const tokenizeExpression = (expr) => {
    let tokens = expr.replace(/x/g, '*').replace(/÷/g, '/')
    .match(/(\d+(\.\d+)?|[+\-*/%])/g); // numbers OR operators

    if (!tokens){
        alert("Enter a valid expression!!");
        return;
    };
    return tokens;
};
const evaluateExpression = (expr) => {
    if (!expression) {
    alert("Enter something!");
    return;
    }

    let tokens = tokenizeExpression(expr);
    let result = parseFloat(tokens[0]);

    for (let i = 1; i < tokens.length; i += 2) {
        let operator = tokens[i];
        let number = parseFloat(tokens[i + 1]);

        if (operator === "+") result += number;
        if (operator === "-") result -= number;
        if (operator === "*") result *= number;
        if (operator === "/") result /= number;
        if (operator === "%") result *= number*0.01;
    }
    return result;
};

buttons.addEventListener('click',(event) =>{ 
    // if '=' then eval expr
    if(event.target.innerText === "="){
        calculateTotal();
        return;
    }
    if(event.target.innerText === "Exp"){
        display.innerText = expression;
        return;
    }
    //if 'Del is pressed
    if(event.target.innerText === "Del"){
        deleteLastOperator();
        return;
    }
    // clicked on anywhere in parent class return;
    if (event.target.classList.contains("buttons")) {
        return;
    }
    // if clear set display to 0 and expression string to ""
    if (event.target.innerText === "C") {
        display.innerText = "0";
        expression = "";
        return;
    }
    // if first character is being entered then set it to the key pressed
    if (display.innerText === "0" && (expression === "")) {
        display.innerText = event.target.innerText;
        expression += event.target.innerText;
        return;
    }
    // if decimal is used inc deci count else throw error
    if(event.target.innerText === '.'){
        if(decimalCounter === 0){
            display.innerText += event.target.innerText; 
            expression += event.target.innerText;
            decimalCounter++;  
            return; 
        }else{
            alert("Invalid Number!");
            return;
        }
    }
    //if its a number of sign just add it to the text
    display.innerText += event.target.innerText; 
    expression += event.target.innerText;

    // if a operator is used set decicounter to 0;
    if (operators.includes(event.target.innerText)) {
        decimalCounter = 0;
        return;
    } 
});

const calculateTotal = () =>{
    let tokens = tokenizeExpression(expression);
    if(operators.includes(tokens[tokens.length-1])){
        alert("Invalid Expression!");
        return;
    }
    let answer = evaluateExpression(expression);
    display.innerText = answer; 
    decimalCounter = ((answer.toString()).includes(".")) ? 1 : 0;
};

const deleteLastOperator = () => {
    let expressionArray = tokenizeExpression(expression);
    expressionArray.pop();
    if(expressionArray.length === 0)
    {
        expression = '';
        display.innerText = "0";
    }
    expression = expressionArray.join('');
    display.innerText = expression;
};