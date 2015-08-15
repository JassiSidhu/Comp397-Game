/// <reference path="../managers/assets.ts" />
var states;
(function (states) {
    // WinLose CLASS...
    var WinLose = (function () {
        //CONSTRUCTOR...
        function WinLose() {
            // Add objects of win-lose stage
            gameOver = new createjs.Bitmap(assets.loader.getResult("winLose"));
            stage.addChild(gameOver);
            tryButton = new objects.Button(assets.loader.getResult("tryAgain"), 300, 350, false);
            stage.addChild(tryButton);
            tryButton.on("click", tryButtonClicked);
        }
        //PUBLIC METHODS......
        WinLose.prototype.update = function () {
        };
        return WinLose;
    })();
    states.WinLose = WinLose;
})(states || (states = {}));
//# sourceMappingURL=win-lose.js.map