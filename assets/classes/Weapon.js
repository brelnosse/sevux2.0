import { Ball } from "./Ball.js";

export class Weapon{
    constructor(type, power, ammunitionLeft, totalAmmunition, characterX, characterY){
        this.characterX = characterX;
        this.characterY = characterY;
        this.type = type;
        this.power = power;
        this.ammunitionLeft = ammunitionLeft;
        this.totalAmmunition = totalAmmunition;
    }
    getType = () => {
        return this.type;
    }
    getPower = () => {
        return this.power;
    }
    getAmmunitionLeft = () => {
        return this.ammunitionLeft;
    }
    getTotalAmmunition = () => {
        return this.totalAmmunition;
    }
    setAmmunitionLeft = (ammunitionLeft) => {
        this.ammunitionLeft =  ammunitionLeft;
    }
    fire = (angle, isKeyMaintained) => {
        switch(this.type){
            case 'SINGLESHOT':
                if(!isKeyMaintained){
                    const balls = document.querySelectorAll('.ball');
                    if(balls.length < 1){
                        const ball = new Ball(this.characterX+angle/2, this.characterY, 5);
                        const ballElem = document.createElement('span');
                        ballElem.classList.add('ball');
                        this.ammunitionLeft -= 1;
                        ball.move(angle, ballElem);
                        document.getElementById('gamezone').appendChild(ballElem);
                    }
                }
            break;
        }
    }
    reload = () => {
        let loadTime;
        console.log('reloading...')

        switch(this.type){
            case 'SINGLESHOT':
            loadTime = 1000;
            break;
        }

        setTimeout(()=>{
            this.ammunitionLeft = this.totalAmmunition;  
            console.clear();
        }, loadTime);
    }
}