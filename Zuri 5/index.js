const num1 = parseFloat(prompt('Enter nr1:'));
const num2 = parseFloat(prompt('Enter nrr2:;));

const operator = prompt('Enter Operator(+,-,/,*');
let result =0;
if(isNaN(num1)) || isNaN=(num2){
    alert('Wrong Input! Refresh the page and provide detail')
}else{
    if(operator=='+'){
        result =num1+num2;
    }else if(operator == '-'){
        result = num1-num2;
        }else if(operator == '/'){
            result = num1 / num2;
        }else if(operator == '*'){
            result = num1 * num2;
        }
        alert(num1+operator+num2+'=' + result);
}