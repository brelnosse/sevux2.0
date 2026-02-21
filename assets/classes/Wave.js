export class Wave{
    static waveSize = 0;

    constructor(enemies, level){
        this.id = Wave.waveSize + 1;
        this.enemies = enemies;
        this.level = level;
        Wave.waveSize++;
    }
    addEnemy = (enemy) => {
        this.enemies.push(enemy);
    }
    addEnemies = (enemies) => {
        this.enemies.concat([enemies]);
    }
    getEnemies = () => {
        return this.enemies;
    }
    moveY = () => {

    }
}