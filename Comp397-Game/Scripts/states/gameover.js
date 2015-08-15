/// <reference path="../managers/assets.ts" />
var states;
(function (states) {
    // GAMEOVER CLASS...
    var GameOver = (function () {
        //CONSTRUCTOR...
        function GameOver() {
            // Add objects of game over stage
            gameOver = new createjs.Bitmap(assets.loader.getResult("gameOver"));
            stage.addChild(gameOver);
            tryButton = new objects.Button(assets.loader.getResult("tryAgain"), 300, 350, false);
            stage.addChild(tryButton);
            tryButton.on("click", tryButtonClicked);
        }
        //PUBLIC METHODS......
        GameOver.prototype.update = function () {
        };
        return GameOver;
    })();
    states.GameOver = GameOver;
})(states || (states = {}));
//# sourceMappingURL=gameover.js.map