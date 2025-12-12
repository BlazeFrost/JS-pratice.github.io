let calcExpression='';
let calcResult= '0';
let hasOperator= false;
let lastwasOperator= false;

function updateDisplay(){
    const display = document.getElementById('display');
    display.textContent= calcResult;
}

function calcNumber(num){
    if(calcResult === '0' && num !== '.'){
        calcResult = num;
    }
    else if(num === '.' && calcResult.includes('.')){
        return
    }
    else{
        calcResult += num;
    }
    lastwasOperator= false;
    updateDisplay();
}

function calcOperator(op){
    if(lastwasOperator){
        calcResult = calcResult.slice(0,-1) + op;
    }
    else{
        calcResult += op;
    }
    lastwasOperator= true;
    updateDisplay();
}

function calcEquals(){
    try{
        let expression = calcResult
        .replace(/×/g,'*')
        .replace(/÷/g,'/');

        const result = Function('"use strict"; return (' +expression + ')')();
        if(isNaN(result) || !isFinite(result)){
            calcResult = 'Error';
        }
        else{
            calcResult = parseFloat(result.toFixed(10)).toString();
        }
    }
    catch(error){
        calcResult = 'Error';
    }
    lastwasOperator=false;
    updateDisplay();
}

function calcClear(){
    calcResult= '0';
    lastwasOperator= false;
    updateDisplay();
}

function calcBackspace(){
    if(calcResult.length > 1){
        calcResult = calcResult.slice(0,-1);
    }
    else{
        calcResult = '0';
    }
    lastwasOperator= false;
    updateDisplay();
}

document.addEventListener('keydown', function(e) {
            if (e.target.tagName === 'INPUT') return;
            
            if (e.key >= '0' && e.key <= '9') calcNumber(e.key);
            else if (e.key === '.') calcNumber('.');
            else if (e.key === '+') calcOperator('+');
            else if (e.key === '-') calcOperator('-');
            else if (e.key === '*') calcOperator('×');
            else if (e.key === '/') calcOperator('÷');
            else if (e.key === 'Enter' || e.key === '=') calcEquals();
            else if (e.key === 'Escape') calcClear();
            else if (e.key === 'Backspace') calcBackspace();
        });