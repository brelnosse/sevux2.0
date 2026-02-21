import { Enemy } from "./Enemy.js";
import { Target } from "./Target.js";

export class Cell{
    constructor(x, y, pos){
        this.x = x;
        this.y = y;
        this.pos = {
            left: 0,
            top: 0
        }
    }
    getX = () => {
        return this.x;
    }
    getY = () => {
        return this.y;
    }
    hasTarget = () => {
        let hastarget = false;
        for(let target of Target.targets){
            if(target.x === this.x && target.y === this.y){
                hastarget = true;
                break;
            }
        }
        return hastarget;
    }

    getTarget = () => {
        let target = null;
        for(let targ of Target.targets){
            if(targ.x === this.x && targ.y === this.y){
                target = targ;
                break;
            }
        }
        return target;  
    }

    setTarget = (target) => {
        target.x = this.x;
        target.y = this.y;
    }
}