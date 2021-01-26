function add(a,c){
    return a+c;
}
function multiply(a,c){
    return a*c;
}
function subtract(a,c){
    return a-c;
}
function divide(a,c){
    return a/c;
}
function operate(operator,a,c){
    if (operator=="add"){
        return add(a,c);
    }
    else if (operator=="multiply"){
        return multiply(a,c);
    }
    else if (operator=="subtract"){
        return subtract(a,c);
    }
    else if(operator=="divide"){
        return divide(a,c);
    }
}
let an=[];
let bn=[];
let i=0;
let result='';
let count=null;
let finished=0;
function receive(result,_element){
    if(result>0){
        bn=result;
        an=[]
        i=0;
        }
        else {
        bn=an;
        an=[]
        i=0;
        }
}
function giveReceive(element,_operator,_sign){
        if(bn!=result){
            bn=Number(bn.join(""))
        }
        an=Number(an.join(""))
        if(an!=0){
            result=Math.round((operate(_operator,bn,an))*10)/10
            element.textContent=`${result}${_sign}`
            display.appendChild(element)    
        }
        else if(an==0){
            element.textContent=`no`
            display.appendChild(element)    
        }
}
function remove(){
    while(display.firstChild){
        display.removeChild(display.lastChild)
    }
}
let btn=document.querySelectorAll("button");
let display=document.querySelector("#display")
for (let c=0;c<btn.length;c++){                
    btn[c].addEventListener('click',()=>{
        let element=document.createElement('p');
        if (c==10){
            element.textContent="+"
            display.appendChild(element)
            if(count==null){
                count="add";
            }
            if(bn.length==0){
                receive(result,element);
            }
            else if(bn.length>0 || bn>0 && an.length>0){
                remove();
                giveReceive(element,count,"+")
                receive(result,element)
                count="add"
            }
        }
        else if (c==11){
            element.textContent=`-`
            display.appendChild(element)
            if(count==null){
                count="subtract"
            }
            if(bn.length==0){
                receive(result,element);
            }
            else if(bn.length>0 || bn>0 && an.length>0){
                remove();
                giveReceive(element,count,"-")
                receive(result,element)
                count="subtract"
            }
}        
        else if(c==12){
            element.textContent=`*`
            display.appendChild(element)
            if(count==null){
                count="multiply"
            }
            if(bn.length==0){
                receive(result,element);
            }
            else if(bn.length>0 || bn>0 && an.length>0){
                remove();
                giveReceive(element,count,"*")
                receive(result,element)
                count="multiply"
            }
    }
        else if(c==13){
            element.textContent=`/`
            display.appendChild(element)
            if(count==null){
                count="divide"
            }
            if(bn.length==0){
                receive(result,element);
            }
            else if(bn.length>0 || bn>0 && an.length>0){
                remove();
                giveReceive(element,count,"/")
                receive(result,element)
                count="divide"
            }
        }
        else if(c==14){
            while(display.firstChild){
                display.removeChild(display.lastChild)
            }
            an=[];
            bn=[];
            result=0;
            count=null;
            i=0;
        }
        else if(c==15){
            if(count!=null){
            remove();
            giveReceive(element,count,"")
            count=null;
            bn=[];
            finished=1;
            }
        }
        else {
        if (finished==1 && count==null){
            while(display.firstChild){
                display.removeChild(display.lastChild)
            }
            an=[];
            bn=[];
            finished=0;
            result=0;
        }
        element.textContent=`${c}`
        display.appendChild(element)
        an[i]=c;
        i++;    
    }
    })
}