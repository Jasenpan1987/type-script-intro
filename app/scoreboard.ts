import { Result } from "./result";
import * as _ from "lodash";

export class Scoreboard {
    private _result: Result[] = [];

    addResult (result: Result): void {
        this._result.push(result);
        let allCapName: string = _.toUpper(result.playerName);
        console.log(allCapName);
    }

    updateScoreBoard (): void {
        let output: string = "<h2>Scoreboard</h2>";
        this._result.forEach((result: Result) => {
            output += "<h4>";
            output += `${result.playerName}: ${result.score} / ${result.problemCount} for factor ${result.factor}`;
            output += "</h4>";
        });

        let scoreElement: HTMLElement = document.getElementById("scores")!;
        scoreElement.innerHTML = output;
    }
}