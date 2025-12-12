let counter = 0;
const MAX_Value=100;
const MIN_Value=-100;

function updateCounter(){
    const display=document.getElementById("counterValue");
    display.textContent=counter;

    if(counter==0){
        display.style.color="black";
    }
    else if(counter>0){
        display.style.color="green";
    }
    else{
        display.style.color="red";
    }
}

function changeCounter(amount){
    const newValue=counter+amount;
    if(newValue<MIN_Value || newValue>MAX_Value){
        alert("Giá trị vượt quá giới hạn!");
        return;
    }
    else{
        counter = newValue;
    }
    updateCounter();
}

function resetCounter(){
    counter=0;
    updateCounter();
}