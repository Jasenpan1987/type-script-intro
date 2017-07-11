"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var scoreboard_1 = require("./scoreboard");
var Game = (function () {
    function Game(player, problemCount, factor) {
        this.player = player;
        this.problemCount = problemCount;
        this.factor = factor;
        this._scoreboard = new scoreboard_1.Scoreboard();
    }
    Game.prototype.displayGame = function () {
        var gameForm = "";
        for (var i = 1; i <= this.problemCount; i++) {
            gameForm += "<div class='form-group'>";
            gameForm += "<label for='answer" + i + "' class='col-sm-2 control-label'>" + String(this.factor) + " X " + i + " = </label>";
            gameForm += "<div class='col-sm-1'><input type='text' class='form-control' id='answer" + i + "' name='answer" + i + "'></div>";
            gameForm += "</div>";
        }
        var gameElement = document.getElementById("game");
        gameElement.innerHTML = gameForm;
        document.getElementById("calculate").removeAttribute("disabled");
    };
    Game.prototype.calculateScore = function () {
        var score = 0;
        for (var i = 1; i <= this.problemCount; i++) {
            var answer = Number(utils_1.getValue("answer" + i));
            if (answer === this.factor * i) {
                score++;
            }
        }
        var result = {
            playerName: this.player.name,
            score: score,
            problemCount: this.problemCount,
            factor: this.factor
        };
        this._scoreboard.addResult(result);
        this._scoreboard.updateScoreBoard();
        document.getElementById("calculate").setAttribute("disabled", "true");
    };
    return Game;
}());
exports.Game = Game;
//# sourceMappingURL=game.js.map