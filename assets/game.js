import { Character } from "./classes/Character.js";
import { Weapon } from "./classes/Weapon.js";

const weapon = new Weapon('SINGLESHOT', 3, 5, 5, 0, 0);
const player = new Character(0, 10,10,20, 3, weapon);
const playerRect = document.getElementById('character').getBoundingClientRect();

weapon.characterX = playerRect.x + playerRect.width/2 - 5;
weapon.characterY = playerRect.y;

const movePlayer = (e) => {

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
