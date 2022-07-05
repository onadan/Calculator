//js
const display = document.querySelector('.display')

const buttons = document.querySelectorAll('button')

buttons && buttons.forEach( (button) => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'DEL':
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case 'AC':
                display.innerText = '';
                break;
                case '=':
                    try {
                        display.innerText = eval(display.innerText);
                    } catch {
                        display.innerText = 'Error!';
                    }
                    break;
            default:
                display.innerText += e.target.innerText;
        }
    });
})