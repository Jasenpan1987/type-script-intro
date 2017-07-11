"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var player_1 = require("./player");
var game_1 = require("./game");
var Utils = require("./utils");
var game;
Utils.addListener("startGame", function () {
    var player = new player_1.Player();
    player.name = Utils.getValue("playername");
    var problemCount = Number(Utils.getValue("problemCount"));
    var factor = Number(Utils.getValue("factor"));
    game = new game_1.Game(player, problemCount, factor);
    game.displayGame();
});
Utils.addListener("calculate", function () {
    game.calculateScore();
});
//# sourceMappingURL=app.js.map