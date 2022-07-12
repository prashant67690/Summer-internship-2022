const firstNumberEnterd = document.getElementById("firstNumber"); //getting the number entered in the number 1 input place
const secondNumberEnterd = document.getElementById('secondNumber'); //getting the number entered in the number 2 input place
const multiplyButton = document.getElementById("btn-1");
const divideButton = document.getElementById("btn-2");
const divForResult = document.getElementById("resultDiv")
const resultUpdated = document.getElementById("finalResult");

let valueCalculated;
 
multiplyButton.addEventListener("click",(e)=>{
    e.preventDefault();
    valueCalculated = firstNumberEnterd.value*secondNumberEnterd.value;
    resultUpdated.innerHTML=valueCalculated;
    divForResult.classList.remove('result');
    console.log(valueCalculated);
});

divideButton.addEventListener("click",(e)=>{
    e.preventDefault();
    valueCalculated = firstNumberEnterd.value/secondNumberEnterd.value;
    resultUpdated.innerHTML=valueCalculated;
    divForResult.classList.remove('result');
    console.log(valueCalculated);
});