score=0
cross=true


aud= new Audio('music.mp3')
goaud= new Audio('gameover.mp3')
setTimeout(() => {
    aud.play()
}, 1000);
document.onkeydown= function(e){
    console.log("key pressed: ",e.keyCode)
    if(e.keyCode==38){
        dino= document.querySelector('.player')
        dino.classList.add('animatedino')
        setTimeout(() => {
            dino.classList.remove('animatedino')
        }, 700);
    }
    if(e.keyCode==39){
        dino= document.querySelector('.player')
        dinox= parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'))
        dino.style.left= (dinox+212)+'px'
    }
    if(e.keyCode==37){
        dino= document.querySelector('.player')
        dinox= parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'))
        dino.style.left= (dinox-212)+'px'
    }
}


setInterval(() => {
    dino= document.querySelector('.player')
    gameover= document.querySelector('.gameover')
    obstacle= document.querySelector('.enemy')
    dy= parseInt(window.getComputedStyle(dino,null).getPropertyValue('top')) // current value of y position of dino at any perticular time
    dx= parseInt(window.getComputedStyle(dino,null).getPropertyValue('left')) // current value of x position of dino at any perticular time
    dx_obs= parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left') )// current value of x position of enemy at any perticular time
    dy_obs= parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top') )// current value of y position of enemy at any perticular time
    offsetX= Math.abs(dx-dx_obs)
    offsetY= Math.abs(dy-dy_obs)

    console.log(offsetX)
    console.log(offsetY)

    if(offsetX<193 && offsetY<100){
        gameover.style.visibility= 'visible'
        obstacle.classList.remove('obstacle')
        goaud.play()
        aud.pause()
        setTimeout(() => {
            goaud.pause()

        }, 1000);
    }

    else if (cross && offsetX<143) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);

        setTimeout(() => {
            
            aniDur= parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'))
            newdur= aniDur- 0.1
            obstacle.style.animationDuration= newdur + 's'
        }, 500);
    }

}, 10);

function updateScore(score) {
    scoreCont.innerHTML = "Your Score: " + score
}