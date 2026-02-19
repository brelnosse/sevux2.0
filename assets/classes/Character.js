import { CONFIG } from "../utils/config.js";

export class Character{
    constructor(angle, x, y, score, life, weapon){
        this.angle = angle;
        this.x = x;
        this.y = y;
        this.score = score;
        this.life = life;
        this.weapon = weapon;
    }
    getX = () => {
        return this.x;
    }
    getY = () => {
        return this.y;
    }
    getAngle = () => {
        return this.angle;
    }
    rotate = (direction) => {
        let updatedAngle;
        if(direction === 'left'){
            updatedAngle = this.angle-CONFIG.rotationAngle;
            if(updatedAngle >= -CONFIG.maxAngle){
                this.angle = updatedAngle;
            }
        }
        if(direction === 'right'){
            updatedAngle = this.angle+CONFIG.rotationAngle;
            if(updatedAngle <= CONFIG.maxAngle){
                this.angle = updatedAngle;
            }
        }
    }
    getScore = () => {
        return this.score;
    }
    setScore = (score) => {
        this.score = score;
    }
    setAngle = (angle) => {
        this.angle = angle;
    }
    shoot = (isKeyMaintained)  => {
        if(this.weapon.getAmmunitions().ammunitionLeft > 0){
            this.weapon.fire(isKeyMaintained);
        }else{
            this.weapon.reload();
        }
    }
}