let buffer = '0';
const screen = document.querySelector('.screen');


function buttonClick(value) {
    if (isNaN(parseInt(value))) {
       handleSymbol(value); 
    } else {
        handleNumber(value);
    }
    rerender()
}


function handleNumber(number) {
    if (buffer === '0') {
        buffer = number
    } else {
        buffer += number;
    }

}


function handleSymbol(symbol) {
    switch (symbol) {
        case 'C':
            buffer = '0';
            break;
        case '=':
            break;
        case '←':
            if (buffer.length === 1) {
                buffer = '0';
            } else {
                buffer = buffer.substring(0, buffer.length - 1);
            }
        case '+':
            break;
        case '-':
            break;
        case '÷':
            break;
        case '×':
            break;
    }

}


function init() {
    document
        .querySelector('.calc-buttons')
        .addEventListener("click", function(event) {
            buttonClick(event.target.innerText);
        })
}


function rerender() {
    screen.innerText = buffer
}


init();