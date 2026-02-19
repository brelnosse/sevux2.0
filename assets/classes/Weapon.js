import { Ball } from "./Ball.js";

export class Weapon{
    constructor(type, power, characterX, characterY, characterAngle){
        let ammunitionNumber = type === 'SINGLESHOT' ? 5 : 5;
        this.characterX = characterX;
        this.characterY = characterY;
        this.characterAngle = characterAngle;
        this.type = type;
        this.power = power;
        this.ammunitions = {
            ammunitionLeft: ammunitionNumber, 
            totalAmmunition: ammunitionNumber,
            balls: Ball.createBalls(type === 'SINGLESHOT' ? 5 : 5, {
                x: this.characterX+characterAngle/2,
                y: this.characterY
            })
        }
    }
    getType = () => {
        return this.type;
    }
    getPower = () => {
        return this.power;
    }
    getAmmunitions = () => {
        return this.ammunitions;
    }
    setAmmunitions = (prop, value) => {
        this.ammunitions = {
            ...this.ammunitions,
            [prop] : value
        };
    }
    fire = (isKeyMaintained) => {
        console.log(this.characterAngle)
        switch(this.type){
            case 'SINGLESHOT':
                if(!isKeyMaintained){
                    const balls = document.querySelectorAll('.ball');
                    if(balls.length < 1){
                        /*On simule le son d'un fusil*/
                        const gunShotSound = new Audio('assets/sounds/singleshot.mp3');
                        gunShotSound.volume = 0.4;
                        gunShotSound.play();
                        const ball = this.ammunitions.balls[this.ammunitions.balls.length-1];
                        ball.setX(this.characterX+this.characterAngle/2)
                        const ballElem = document.createElement('span');
                        ballElem.classList.add('ball');
                        this.ammunitions.ammunitionLeft -= 1;
                        this.ammunitions.balls.pop();
                        ball.move(this.characterAngle, ballElem);
                        document.getElementById('gamezone').appendChild(ballElem);
                    }
                }
            break;
        }
    }
    reload = () => {
        let loadTime;
        const gunReloadEffect = new Audio('assets/sounds/gunreload.mp3');
        gunReloadEffect.play();

        switch(this.type){
            case 'SINGLESHOT':
            loadTime = 1000;
            break;
        }

        setTimeout(()=>{
            // this.ammunitionLeft = this.totalAmmunition;  
            console.clear();
        }, loadTime);
    }
}