// const IntervalID = setInterval(myCallback, 1000);

// function myCallback(){
    // console.log(Date.now());
// }

let intervalID;

function startchange(){
    if(!intervalID) {
        intervalID = setInterval(changecolor, 3000);
    }
}

function changecolor  (){
    if(document.body.style.backgroundColor !== 'black'){
        document.body.style.backgroundColor !== 'black';
        document.body.style.Color !== 'white';
    }
    else{
        document.body.style.backgroundColor !== 'white';
        document.body.style.Color !== 'black';
    }
}

function cahnageRandomColor() {
    const randomColor =  Math.floor(Math.random() * 16777215).toString(16);
    document.body.stule.backgroudColor =`#${randomcolor}`;
}
function stopChange(){
    clearInterval(IntervalID)
}

document.getElementById('start').addEventListener('click,startchange');
document.getElementById('stop').addEventListener('click,stopchange');

setTimeout(function () {
    console.log('Hello from callback');
},2000);

console.log('hello from global scope');

function toggle(e) {
    e.target.classlist.toggle('danger');
}
document