function add(a,b){
    return a+b;
}
function multiply(a,b){
    return a*b;
}
function subtract(a,b){
    return a-b;
}
function divide(a,b){
    return a/b;
}
function operate(operator,a,b){
    if (operator=="add"){
        return add(a,b);
    }
    else if (operator=="multiply"){
        return multiply(a,b);
    }
    else if (operator=="subtract"){
        return subtract(a,b);
    }
    else if(operator=="divide"){
        return divide(a,b);
    }
}
let btn=document.querySelectorAll("button");
let display=document.querySelector("#display")
/*let btn1=document.querySelector("#btn-1");
btn1.addEventListener('click',()=>{
    let element=document.createElement('p');
    element.textContent="1"
    display.appendChild(element)
})*/
btn.forEach((item,index)=>{
    item.addEventListener('click',()=>{
        let element=document.createElement('p');
        if (index==10){
        element.textContent=`+`
        display.appendChild(element)
        }
        else if (index==11){
        element.textContent=`-`
        display.appendChild(element)        
        }
        else if(index==12){
        element.textContent=`*`
        display.appendChild(element)
        }
        else if(index==13){
        element.textContent=`/`
        display.appendChild(element)    
        }
        else if(index==14){
            /*put something*/ 
        }
        else if(index==15){
            /*put something*/
        }
        else {
        element.textContent=`${index}`
        display.appendChild(element)
        }

    })    
})