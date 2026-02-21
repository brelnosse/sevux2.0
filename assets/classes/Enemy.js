import { CONFIG } from "../utils/config.js";
import { Target } from "./Target.js";

export class Enemy extends Target{
    static enemies = [];

    constructor(life, x, y, width, height, power){
        super(life, x, y, width, height);
        this.power = power;
        Enemy.enemies.push(this);
    }

    static createEnemies(num){
        let generatedEnemies = [];

        for(let i = 0; i < num; i++){
            let maxX = Math.random()*(CONFIG.gamezone.width);
            let maxY = Math.random()*(CONFIG.gamezone.height);

            for(let enemy of generatedEnemies){
                // if(maxX >= enemy.x)
            }
            generatedEnemies.push(new Enemy(2,0, 0, 5));
        }
        return generatedEnemies;
    }

    isDead = () => {
        return (this.life <= 0);
    }
    shooted = (gunPower) => {
        let damage = gunPower - this.life;

        if(damage <= 0){
            this.life = 0;
            return;
        }
        this.life -= damage;
    }
};