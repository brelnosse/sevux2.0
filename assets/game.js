import { Character } from "./classes/Character.js";
import { Weapon } from "./classes/Weapon.js";

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
