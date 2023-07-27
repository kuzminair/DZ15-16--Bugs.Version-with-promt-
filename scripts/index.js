var counterBugs=0;
var bugsList;
const timer = 600;

start();

function start () {
counterBugs = +prompt('Задайте количество жуков');

document.write(`<div id="container">
<div id="containerBug">`);
for (i=0; i<counterBugs; i++){
    document.write(`<img class="bug" id="${i+1}" src="images/icon.png" alt="bug">`);
};
document.write(`</div>
<div id="btnNewPlay">ЗАНОВО</div>
</div>`);
bugsList = document.getElementsByClassName('bug');
setInterval(activityBugs, timer); 
};

var containerBug = document.getElementById('containerBug');
function randomX(){
    let min = containerBug.getBoundingClientRect().left;
    let max = containerBug.getBoundingClientRect().width;
    return Math.random() * (max - min) + min;
}
function rundomY(){
    let min = containerBug.getBoundingClientRect().top;
    let max = containerBug.getBoundingClientRect().height-100;
    return Math.random() * (max - min) + min;
}

function victory (){
    if (counterBugs==0) {
        alert ('ВЫ ПОЙМАЛИ ВСЕХ ЖУКОВ! ПОЗДРАВЛЯЮ!');
    }
}

function activityBugs() {
    for (let el of bugsList){
        el.style.left = `${randomX()}`+'px'; el.style.top = `${rundomY()}`+'px';
    }
}


for (let el of bugsList){
    el.addEventListener ('click', (e)=> {
            e.target.style.display = 'none';
            counterBugs--;
            victory ();
        });
}

document.getElementById('btnNewPlay').addEventListener ('click', ()=> {
    for (let el of bugsList){
        el.style.display = 'inline';
    }
});