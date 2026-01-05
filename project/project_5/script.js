// let starting;

// const btn = document.querySelector("#start").addEventListener('click', function(){
//     console.log('Start button is clicked');
//     function random(number){
//         return Math.floor(Math.random() * (number + 1));
//     }
//     function changeBackground() {
//   const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
//   document.body.style.backgroundColor = rndCol;
// }
   

//     starting = setInterval(function(){
//          console.log(changeBackground());
//     },2000)
// })

// document.querySelector('#stop')
//         .addEventListener('click', function(){
//             console.log('stop button is clicked')
//             clearInterval(starting);
//         });





//another approch more optimise .......
const randomcolor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
};

let intervalID;
const startChangingColor = function(){
    if(!intervalID){
        intervalID = setInterval(changeBgColor, 1000);
    }

    function changeBgColor(){
        document.body.style.backgroundColor = randomcolor();
    }
};

const stopChangingColor = function (){
    clearInterval(intervalID);
    intervalID = null;
}

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);
