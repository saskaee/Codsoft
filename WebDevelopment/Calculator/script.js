const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value="";
}

function calculate(){
    try{
        display.value= eval(display.value);
    }
    catch(error){
        display.value="Error";
    }
}

function DELETE(){
    let str =display.value;
    let newstr = str.slice(0, -1);
    display.value= newstr;
}
