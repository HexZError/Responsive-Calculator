console.log("connected");
const numbers = document.querySelectorAll('.numbers');
const result = document.querySelector('.Result span');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const negative = document.querySelector('.negative');
const percent = document.querySelector('.percent');
const signs = document.querySelectorAll('.sign')

let firstValue = "";
let isfirstValue = false;
let secondValue = "";
let isSecondValue = false;
let sign = "";
let resultValue = 0;

for(let i=0;i<numbers.length;i++){
    console.log(numbers[i]);
    numbers[i].addEventListener('click',(e)=>{
        let atr = e.target.getAttribute('value');
        if(isfirstValue === false){
            getFirstValue(atr);
        }
        if(isSecondValue == false){
            getSecondValue(atr);
        }
    })
}

function getFirstValue(el){
    result.innerHTML = "";
    firstValue += el;
    result.innerHTML = firstValue;
    firstValue =+ firstValue;
}

function getSecondValue(el){
    if(firstValue != "" && sign != ""){
        result.innerHTML = "";
        secondValue += el;
        result.innerHTML = secondValue;
        secondValue =+ secondValue;
    }
}
function getSign(){
    for(let i=0;i<signs.length;i++){
        signs[i].addEventListener('click',(e)=>{
            sign = e.target.getAttribute('value');
            isfirstValue = true;
        })
    }
}
getSign();

equals.addEventListener('click',()=>{
    result.innerHTML = "";
    if(sign === "+"){
        resultValue = firstValue + secondValue;
    }
    else if(sign === "-"){
        resultValue = firstValue - secondValue;
    }
    else if(sign === "*"){
        resultValue = firstValue * secondValue;
    }
    else if(sign === "/"){
        resultValue = firstValue / secondValue;
    }
    result.innerHTML = resultValue;
    firstValue = resultValue;
    secondValue = "";
    checkResultLength();
})

function checkResultLength(){
    resultValue = JSON.stringify(resultValue);

    if(resultValue.length >= 8){
        resultValue = JSON.parse(resultValue);
        result.innerHTML = resultValue.toFixed(5);
    }
}

negative.addEventListener('click',()=>{
    result.innerHTML = "";
    if(firstValue != ""){
        resultValue = -firstValue;
        firstValue = resultValue;
    }
    if(firstValue != "" && secondValue != "" && sign != ""){
        resultValue = -resultValue;
    }
    result.innerHTML = resultValue;
})

percent.addEventListener('click',()=>{
    result.innerHTML = "";
    if(firstValue != ""){
        resultValue = firstValue / 100;
        firstValue = resultValue;
    }
    if(firstValue != "" && secondValue != "" && sign != ""){
        resultValue = resultValue / 100;
    }
    result.innerHTML = resultValue;
})

clear.addEventListener('click',()=>{
    result.innerHTML = 0;
    firstValue = "";
    isfirstValue = false;
    secondValue = "";
    isSecondValue = false;
    sign = "";
    resultValue = 0;
})