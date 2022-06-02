const add = (a, b) => a+b;

const subtract = (a, b) => a-b;

const multiply = array => array.reduce((a, b) => a * b, 1);

const divide = (a, b) => a/b;

const modulo = (a,b) => a%b;




const resultPanel = document.querySelector('.result');
const operationPanel = document.querySelector('.ops');
operationPanel.textContent= ''
resultPanel.textContent='';
const buttons = document.querySelectorAll('.buttons')
let operationString = []
let operationArray = []

function parseEvaluation(arrayOperation) {
    let result = 0
    
    console.log(`before parsing ${arrayOperation}`)
    while (arrayOperation.length >= 3) {
        console.log({arrayOperation})
        console.log({result})
        result = operate(arrayOperation.slice(0, 3));
        arrayOperation.splice(0,3)
              
        arrayOperation.unshift(result);
        
        
       
        
    }
    console.log(`the result is ${result}`);
    
    arrayOperation=[];
    operationString=[];
    operationArray=[];
    return result;
       
}


function operate(arrayOperation) {
    resultPanel.textContent = '';
    a = parseFloat(arrayOperation[0]);
    b = parseFloat(arrayOperation[2]);
    switch (arrayOperation[1]) {
        case 'add':
            resultPanel.textContent = add(a, b);
            return add(a, b);
            
        case 'subtract':
            resultPanel.textContent = subtract(a, b);
            return subtract(a, b);
            
        case 'multiply':
            resultPanel.textContent = multiply([a, b]);
            return multiply([a, b]);
            
        case 'divide':
            if (b === 0) {
                resultPanel.textContent = 'Don\'t be a jackass.'
                break;
            }
            resultPanel.textContent = divide(a, b);
            return divide(a, b);
            
        case 'modulo':
            resultPanel.textContent = modulo(a, b);
            return modulo(a, b);
        default:
            break;
    }
    result = 0;
    arrayOperation=[];
    operationString=[];
    operationArray=[];
}

function getButtonPresses(e) {
    
    switch (this.id) {
        case 'one':
            operationString+='1'
            operationPanel.textContent += '1';
            break;
        
        case 'two':
            operationString+='2'
            operationPanel.textContent += '2';
            break;
        
        case 'three':
            operationString+='3';
            operationPanel.textContent += '3';
            break;
        
        case 'four':
            operationString+='4';
            operationPanel.textContent += '4';
            break;

        case 'five':
            operationString+='5';
            operationPanel.textContent += '5';
            break;
        
        case 'six':
            operationString+='6';
            operationPanel.textContent += '6';
            break;
        
        case 'seven':
            operationString+='7';
            operationPanel.textContent += '7';
            break;
        
        case 'eight':
            operationString+='8';
            operationPanel.textContent += '8';
            break;

        case 'nine':
            operationString+='9';
            operationPanel.textContent += '9';
            break;
        
        case 'zero':
            operationString+='0';
            operationPanel.textContent += '0';
            break;

        case 'decimal':
            operationString+='.';
            operationPanel.textContent+='.';
            break;
        
        case 'minus':
            operationPanel.textContent += '-';
            operationArray.push(operationString, 'subtract');
            operationString = [];
            break;
        
        case 'divide':
            operationPanel.textContent += '/';
            operationArray.push(operationString, 'divide');
            operationString = [];
            break;
            
        case 'multiply':
            operationPanel.textContent += '*';
            operationArray.push(operationString, 'multiply');
            operationString = [];
            break;

        case 'plus':
            operationPanel.textContent += '+';
            operationArray.push(operationString, 'add');
            operationString = [];
            break;

        case 'modulo':
            operationPanel.textContent += '%';
            operationArray.push(operationString, 'modulo');
            operationString = [];
            break;

        case 'equals':
            operationPanel.textContent = '';
            operationArray.push(operationString);
            operationString = [];
            parseEvaluation(operationArray)
            break;

        case 'clear':
            operationPanel.textContent = ''
            resultPanel.textContent = ''
            operationArray = [];
            operationString = [];

        default:
            break;
    }
    
}

buttons.forEach(button => {
    button.addEventListener('click', getButtonPresses)
});