export class Ball{
    constructor(x, y, speed){
        this.x = x;
        this.y = y;
        this.speed = speed;
    }
    getX = () => {
        return this.x;
    }
    getY = () => {
        return this.y;
    }
    setX = (x) => {
        this.x = x;
    }
    setY = (y) => {
        this.y = y;
    }

    move = (angle, elem) => {
        let ball = this;
        const animate = function(){
        var dx = Math.sin(angle * Math.PI/180) * ball.speed;
        var dy = Math.cos(angle * Math.PI/180) * ball.speed;

            if(ball.y <= 0 || ball.x <= 0){
                elem.remove();
            }
            // if(ball.y > 0){
                // ball.y -= 3;
                ball.x = ball.x + dx;
                ball.y = ball.y - dy;
                requestAnimationFrame(animate);
            // }

            elem.style.left = ball.x + "px";
            elem.style.top = ball.y + "px";
        }
        requestAnimationFrame(animate);
    }
}