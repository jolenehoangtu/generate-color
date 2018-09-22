const hexaGenerator = function () {
    return ('#' + Math.random().toString(16).slice(2, 8));
}


const addNumber = () => {
    let inputNumber = document.querySelector('#input-text').value;
    document.querySelector('#input-text').value = ' ';

    let divList = document.querySelector('.divList');
    
    divList.innerHTML = "";
    if (inputNumber <= 5) {
        for (let i = 0; i < 5; i++) {
            let bgColor = hexaGenerator();
            let div = document.createElement('div');
            let copy = document.createElement('button');
            copy.setAttribute('class', 'copy');
            copy.textContent = "Copy";
            div.textContent = bgColor.toString();
            div.style.backgroundColor = bgColor;
            div.appendChild(copy);
            divList.appendChild(div);
        }
    } else {
        for (let i = 0; i < inputNumber; i++) {
            let bgColor = hexaGenerator();
            let div = document.createElement('div');
            let copy = document.createElement('button');
            copy.setAttribute('class', 'copy');
            copy.textContent = "Copy";
            div.textContent = bgColor.toString();
            div.style.backgroundColor = bgColor;
            div.appendChild(copy);
            divList.appendChild(div);
        }
    
    }
   
}

const generateBtn = document.querySelector('#generate');
const stopBtn = document.querySelector('#stop');

//Generating and Stopping colors:
let colorInterval;
function intervalColors() {
   colorInterval = setInterval(addNumber, 300);
}
function clearIntervalColor() {
    clearInterval(colorInterval);
    document.querySelector('#input-text').value = ' ';
}
const generating = generateBtn.addEventListener('click', ()=> {
    clearInterval(colorInterval);
    intervalColors();
});

const stopping = stopBtn.addEventListener('click', clearIntervalColor);