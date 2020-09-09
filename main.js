const score=document.querySelector('.score'),
start=document.querySelector('.start'),
gameArea=document.querySelector('.gameArea'),
car=document.createElement('div');

car.classList.add('car');

const keys={
    ArrowUp:false,
    ArrowDown:false,
    ArrowRight:false,
    ArrowLeft:false
};
const setting={
    start:false,
    score:0,
    speed:3,
    traffic:3
};
const playGame=()=>{
moveRoad();
    if (setting.start) {
        if (keys.ArrowLeft && setting.x>0){
            setting.x-=setting.speed;
        }
        if (keys.ArrowRight && setting.x<250){
            setting.x+=setting.speed;
        }
        if (keys.ArrowDown && setting.y<(gameArea.offsetHeight-car.offsetHeight)){
            setting.y+=setting.speed;
        }
        if (keys.ArrowUp && setting.y>0){
            setting.y-=setting.speed;
        }
        car.style.left=setting.x+'px';
        car.style.top=setting.y+'px';
        requestAnimationFrame(playGame);
    }    
}
const startGame=()=>{
    setting.start=true;
    for (let i = 0; i < 20;i++) {
      const line=document.createElement('div');
      line.classList.add('line');
      line.style.top=(i*75)+'px';
      line.y=i*75;
      gameArea.appendChild(line);
        }
    gameArea.appendChild(car);setting.x=car.offsetLeft;   
    setting.y=car.offsetTop;    
    requestAnimationFrame(playGame)
}

const  startRun=(e)=>{
    e.preventDefault();
    keys[e.key]=true;
};
const  stopRun=(e)=>{
    e.preventDefault();
    keys[e.key]=false;
};
document.addEventListener('click',startGame)
document.addEventListener('keydown',startRun);
document.addEventListener('keyup',stopRun);

function moveRoad(){
    let lines=document.querySelectorAll('.line');
    lines.forEach(function(item,i){
item.y+=setting.speed;
item.style.top=item.y+'px';
if (item.y>document.documentElement.clientHeight){
    item.y=-100;
}

    })
}