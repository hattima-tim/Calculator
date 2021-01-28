function add(firstNumber,lastNumber){
    return firstNumber+lastNumber;
}
function multiply(firstNumber,lastNumber){
    return firstNumber*lastNumber;
}
function subtract(firstNumber,lastNumber){
    return firstNumber-lastNumber;
}
function divide(firstNumber,lastNumber){
    return firstNumber/lastNumber;
}
function operate(operator,firstNumber,lastNumber){
    if (operator=="addition"){
        return add(firstNumber,lastNumber);
    }
    else if (operator=="multiplication"){
        return multiply(firstNumber,lastNumber);
    }
    else if (operator=="subtraction"){
        return subtract(firstNumber,lastNumber);
    }
    else if(operator=="division"){
        return divide(firstNumber,lastNumber);
    }
}
let lastNumber=[];
let firstNumber=[];
let indexOf_last_number=0;
let calculationResult='';
let selected_operator=null;
let assignment_operator_press_count=0;
function getNewNumber(calculationResult){
    if(calculationResult>0 || calculationResult<0){
        firstNumber=calculationResult;
        lastNumber=[];
        indexOf_last_number=0;
        }
        else {
        firstNumber=lastNumber;
        lastNumber=[];
        indexOf_last_number=0;
        }
}
function doCalculation(display_text_element,_operator,_operatorSign){
        if(firstNumber!=calculationResult){
            firstNumber=Number(firstNumber.join(""));
        }
        lastNumber=Number(lastNumber.join(""));
        if(lastNumber!=0){
            calculationResult=Math.round((operate(_operator,firstNumber,lastNumber))*100)/100;
            display_text_element.textContent=`${calculationResult}${_operatorSign}`;
            display.appendChild(display_text_element);    
        }
        else if(lastNumber==0){
            display_text_element.textContent=`No!don't do this!`;
            display.appendChild(display_text_element);    
        }
}
function remove_display_text(){
    while(display.firstChild){
        display.removeChild(display.lastChild);
    }
}
function clearAllData(){
    remove_display_text();
    lastNumber=[];
    firstNumber=[];
    calculationResult=0;
    selected_operator=null;
    assignment_operator_press_count=0;
    indexOf_last_number=0;
}
let btn=document.querySelectorAll("button");
let display=document.querySelector("#display");
for (let i=0;i<btn.length;i++){                
    btn[i].addEventListener('click',()=>{
        let display_text_element=document.createElement('p');
        if (i==10){
            display_text_element.textContent="+";
            display.appendChild(display_text_element);
            if(selected_operator==null){
                selected_operator="addition";
            }
            if(firstNumber.length==0){
                getNewNumber(calculationResult);
            }
            else if(firstNumber.length>0 || firstNumber>0 ||firstNumber<0 && lastNumber.length>0){
                remove_display_text();
                doCalculation(display_text_element,selected_operator,"+");
                getNewNumber(calculationResult);
                selected_operator="addition";
            }
        }
        else if (i==11){
            display_text_element.textContent=`-`;
            display.appendChild(display_text_element);
            if(selected_operator==null){
                selected_operator="subtraction";
            }
            if(firstNumber.length==0){
                getNewNumber(calculationResult);
            }
            else if(firstNumber.length>0 || firstNumber>0 ||firstNumber<0 && lastNumber.length>0){
                remove_display_text();
                doCalculation(display_text_element,selected_operator,"-");
                getNewNumber(calculationResult);
                selected_operator="subtraction";
            }
}        
        else if(i==12){
            display_text_element.textContent=`*`;
            display.appendChild(display_text_element);
            if(selected_operator==null){
                selected_operator="multiplication";
            }
            if(firstNumber.length==0){
                getNewNumber(calculationResult);
            }
            else if(firstNumber.length>0 || firstNumber>0 ||firstNumber<0 && lastNumber.length>0){
                remove_display_text();
                doCalculation(display_text_element,selected_operator,"*");
                getNewNumber(calculationResult);
                selected_operator="multiplication";
            }
    }
        else if(i==13){
            display_text_element.textContent=`/`;
            display.appendChild(display_text_element);
            if(selected_operator==null){
                selected_operator="division";
            }
            if(firstNumber.length==0){
                getNewNumber(calculationResult);
            }
            else if(firstNumber.length>0 || firstNumber>0 ||firstNumber<0 && lastNumber.length>0){
                remove_display_text();
                doCalculation(display_text_element,selected_operator,"/");
                getNewNumber(calculationResult);
                selected_operator="division";
            }
        }
        else if(i==14){
            clearAllData();
        }
        else if(i==15){
            if(selected_operator!=null){
                remove_display_text();
                doCalculation(display_text_element,selected_operator,"");
                selected_operator=null;
                firstNumber=[];
                assignment_operator_press_count=1;
            }
        }
        else {
            if (assignment_operator_press_count==1 && selected_operator==null){
                clearAllData();
            }
            display_text_element.textContent=`${i}`;
            display.appendChild(display_text_element);
            lastNumber[indexOf_last_number]=i;
            indexOf_last_number++;    
        }
    })
}