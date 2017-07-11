"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var Scoreboard = (function () {
    function Scoreboard() {
        this._result = [];
    }
    Scoreboard.prototype.addResult = function (result) {
        this._result.push(result);
        var allCapName = _.toUpper(result.playerName);
        console.log(allCapName);
    };
    Scoreboard.prototype.updateScoreBoard = function () {
        var output = "<h2>Scoreboard</h2>";
        this._result.forEach(function (result) {
            output += "<h4>";
            output += result.playerName + ": " + result.score + " / " + result.problemCount + " for factor " + result.factor;
            output += "</h4>";
        });
        var scoreElement = document.getElementById("scores");
        scoreElement.innerHTML = output;
    };
    return Scoreboard;
}());
exports.Scoreboard = Scoreboard;
//# sourceMappingURL=scoreboard.js.map