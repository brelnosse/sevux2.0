import { Cell } from "./Cell.js";
import { Wave } from "./Wave.js";
import { Enemy } from "./Enemy.js";

export class Grid{
    cells = [];
    constructor(row, column, pos){
        this.row = row;
        this.column = column;
        this.pos = {
            left: 0,
            top: 0
        }
        for(let i = 0; i < row; i++){
            this.cells[i] = [];
            for(let j = 0; j < column; j++){
                this.cells[i][j] = new Cell(i,j)
            }
        }
    }
    // addTarget = (x, y, target) => {
    //     if(this.cells[x][y].hasTarget()){
    //         console.log('Already filled')
    //         return;
    //     }
    //     this.cells[x][y].setTarget(target);
    // }
    addTargets = (wave) => {
        let targets = wave.getEnemies();
        if(targets.length <= (this.row*this.column)){
            for(let e = 0; e < targets.length; e++){
                for(let i = 0; i < this.row; i++){
                    for(let j = 0; j < this.column; j++){
                        if(!this.cells[i][j].hasTarget()){
                            this.cells[i][j].setTarget(targets[e]);
                        }
                    }
                }
            }
        }else{
            console.log('Too much enemies...')
        }
    }
    getCell = (x, y) => {
        return this.cells[x][y];
    }
}