let buffer = '0';


function buttonClick(value) {
    if (isNaN(parseInt(value))) {
       handleSymbol(value); 
    } else {
        handleNumber(value);
    }

}


function handleNumber(number) {
    if (buffer === '0') {
        buffer = number
    } else {
        buffer += number;
    }

}


function handleSymbol(symbol) {
    console.log('symbol');

}


function init() {
    document
        .querySelector('.calc-buttons')
        .addEventListener("click", function(event) {
            buttonClick(event.target.innerText);
        })
}

init();