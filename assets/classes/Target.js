export class Target{
    constructor(id, life, x, y){
        this.id = id;
        this.life = life;
        this.x = x;
        this.y = y;
    }
    moveY = () => {
       console.log('Moved to Y') 
    }
    moveX = () => {
       console.log('Moved to X') 
    }
    shooted = () => {
        this.life--;
    }
}