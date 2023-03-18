//DZ-1

const block = document.getElementById('block');
let angle = 0;

function moveBlock() {
    const radius = 200;
    const centerX = 150;
    const centerY = 150;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);

    block.style.top = y + 'px';
    block.style.left = x + 'px';

    angle += 0.1;

    if (angle < Math.PI * 2) {
        setTimeout(moveBlock, 20);
    } else {
        angle = 0;
        setTimeout(moveBlock, 20);
    }
    }

moveBlock();


//DZ-2


const secondsLeft = 60

function countDown() {
    if(secondsLeft === 0) {
        console.log("Таймер завершен!");
        clearInterval(timerId);
    }else {
        console.log(secondsLeft + "sec.");
        secondsLeft++;
    }
}

const timerId = setInterval(countDown, 1000);





