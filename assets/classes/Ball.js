import { CONFIG } from "../utils/config.js";

export class Ball{
    constructor(x, y, width, height, speed){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
    }
    getX = () => {
        return this.x;
    }
    getY = () => {
        return this.y;
    }
    getWidth = () => {
        return this.width;
    }
    getHeight = () => {
        return this.height;
    }
    setWidth = (width) => {
        this.width = width;
    }
    setHeight = (height) => {
        this.height = height;
    }
    setX = (x) => {
        this.x = x;
    }
    setY = (y) => {
        this.y = y;
    }
    static createBalls (number, coords) {
        let balls = [];
        for(let i = 0; i < number; i++){
            balls.push(new Ball(coords.x, coords.y, 10, 10, 5));
        }
        return balls;
    } 
    move = (angle, elem) => {
        let ball = this;
        
        const animate = function(){
        var dx = Math.sin(angle * Math.PI/180) * ball.speed;
        var dy = Math.cos(angle * Math.PI/180) * ball.speed;

            if(ball.y <= 0 || ball.x <= 0 || ball.x+5 > CONFIG.gamezone.width){
                elem.remove();
            }
            ball.x = ball.x + dx;
            ball.y = ball.y - dy;
            requestAnimationFrame(animate);

            elem.style.left = ball.x + "px";
            elem.style.top = ball.y + "px";
        }
        requestAnimationFrame(animate);
    }
}