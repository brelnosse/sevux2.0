import { Cell } from "./classes/Cell.js";
import { Character } from "./classes/Character.js";
import { Grid } from "./classes/Grid.js";
import { Wave } from "./classes/Wave.js";
import { Weapon } from "./classes/Weapon.js";
import { Enemy } from "./classes/Enemy.js";

const playerRect = document.getElementById('character').getBoundingClientRect();
const weapon = new Weapon('SINGLESHOT', 3, (playerRect.x + playerRect.width/2 - 5), playerRect.y, 0);
const player = new Character(0, 10,10,20, 3, weapon);

const init = () => {
    weapon.characterAngle = player.angle;
}
const movePlayer = (e) => {
    init();
    if(e.keyCode === 37){
        player.rotate('left')
    }
    if(e.keyCode === 39){
        player.rotate('right')
    }
    if(e.keyCode === 38){
        player.shoot(e.repeat);
    }
    requestAnimationFrame(()=> {
        document.getElementById('character').style.transform = 'translateX(-50%) rotate('+player.getAngle()+'deg)';
    })
}
window.addEventListener('keydown', movePlayer)

/*Logique pour les enemies*/
const grid = new Grid(5, 6);
const wave = new Wave(Enemy.createEnemies(5), 0);
const spaceship = document.createElement('div');
spaceship.classList.add('spaceship');
for(let i = 0; i < wave.getEnemies().length; i++){
    const target = document.createElement('div');
    target.classList.add('enemy');
    for(let j = 0; j < wave.getEnemies().length; j++){
        // if(getComputedStyle(wave.getEnemies()[j]).left)
    }
    spaceship.appendChild(target)
}
document.getElementById('gamezone').appendChild(spaceship);
grid.addTargets(wave)
// console.log(grid)
