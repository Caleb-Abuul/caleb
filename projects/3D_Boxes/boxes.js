let boxContainer = document.getElementById('boxes');
let btn = document.getElementById('magic');

btn.addEventListener('click', ()=> boxContainer.classList.toggle('big'));

function createBoxes(){
    for (let i = 0; i < 4; i++){
        for (let j = 0; j < 4; j++){
            let box = document.createElement('div');
            box.classList.add('box');
            box.style.backgroundPosition = `${-j * 7.8125}rem ${-i * 7.8125}rem`;
            boxContainer.appendChild(box);
        }
    }
}

createBoxes();