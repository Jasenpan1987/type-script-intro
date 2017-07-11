import { Player } from "./player";
import { Game } from "./game";
import * as Utils from "./utils";

// function startGameFunc () {
//     // start a new game
//     let playerName: string = <string>Utils.getInputValue("playername");
//     logPlayerName(playerName);

//     postScore(100, playerName);
//     postScore(-50, playerName);
//     // let messageElement: HTMLElement | null = document.getElementById("messages");
//     // messageElement!.innerText = "Welcome, are you ready?";
// }




// function postScore (score: number, playerName: string = "math app player"): void {
//     let logger: (value: string) => void; // function type

//     if (score < 0) {
//         logger = logError;
//     } else {
//         logger = logMessage;
//     }

//     let postedScoreElement = <HTMLElement | null>document.getElementById("postedScore");
//     postedScoreElement!.innerText = `${playerName} - ${score}`; // postScoreElement won't be null by adding !

//     logger(`Score: ${score}`);
// }

// function logPlayerName (name: string = "math app player") : void {
//     console.log(`New game start for player ${name}`)
// }

// document.getElementById("startGame")!.addEventListener("click", startGameFunc);

// const logMessage = (message: string) => console.log(message);

// function logError (error: string): void {
//     console.error (error);
// }

// let firstPlayer = new Player();
// firstPlayer.name = "Jim";
// console.log(firstPlayer.formatName());

let game: Game;

Utils.addListener("startGame", () => {
    let player: Player = new Player();
    player.name = Utils.getValue("playername");

    let problemCount: number = Number(Utils.getValue("problemCount"));
    let factor: number = Number(Utils.getValue("factor"));

    game = new Game(player, problemCount, factor);
    game.displayGame();
});

Utils.addListener("calculate", () => {
    game.calculateScore();
});