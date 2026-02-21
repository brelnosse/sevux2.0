export class Target{
    static targetId = 0;
    static targets = [];

    constructor(life, x, y, width, height){
        this.id = Target.targetId+1;
        this.life = life;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        Target.targetId++;
        Target.targets.push(this);
    }
    moveY = () => {
       console.log('Moved to Y') 
    }
    moveX = () => {
       console.log('Moved to X') 
    }
}