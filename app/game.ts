import { getValue } from './utils';
import { Result } from './result';
import { Player } from './player';
import { Scoreboard as ResultPanel } from './scoreboard';

export class Game {
    private _scoreboard: ResultPanel = new ResultPanel();

    // player: Player;
    // problemCount: number;
    // factor: number;

    // constructor (player: Player, problemCount: number, factor: number) {
    //     this.player = player;
    //     this.problemCount = problemCount;
    //     this.factor = factor;
    // }

    // the above code can be replaced by the fowllowing code
    constructor (public player: Player, public problemCount: number, public factor: number) {
    }

    displayGame (): void {
        let gameForm: string = "";
        for (let i=1; i<=this.problemCount; i++) {
            gameForm += `<div class='form-group'>`;
            gameForm += `<label for='answer${i}' class='col-sm-2 control-label'>${String(this.factor)} X ${i} = </label>`;
            gameForm += `<div class='col-sm-1'><input type='text' class='form-control' id='answer${i}' name='answer${i}'></div>`;
            gameForm += `</div>`;
        }

        let gameElement: HTMLElement = document.getElementById("game")!;
        gameElement.innerHTML = gameForm;

        document.getElementById("calculate")!.removeAttribute("disabled");
    }

    calculateScore () : void {
        let score: number = 0;

        for (let i=1; i<=this.problemCount; i++) {
            let answer: number = Number(getValue(`answer${i}`));
            if (answer === this.factor * i) {
                score++;
            }
        }

        let result: Result = {
            playerName: this.player.name,
            score: score,
            problemCount: this.problemCount,
            factor: this.factor
        };

        this._scoreboard.addResult(result);
        this._scoreboard.updateScoreBoard();

        document.getElementById("calculate")!.setAttribute("disabled", "true");
    }
}