/// <reference path="../managers/assets.ts" />
var states;
(function (states) {
    //STARTSTATE CLASS
    var StartState = (function () {
        //CONSTRUCTOR.........
        function StartState() {
            //add ocean object to stage
            ocean = new objects.Ocean(assets.loader.getResult("ocean"));
            stage.addChild(ocean);
            //Add start objects....
            start = new createjs.Bitmap(assets.loader.getResult("start"));
            stage.addChild(start);
            instructionsButton = new objects.Button(assets.loader.getResult("instructions"), 240, 380, false);
            stage.addChild(instructionsButton);
            instructionsButton.on("click", instructionsClicked);
            playButton = new objects.Button(assets.loader.getResult("play"), 230, 200, false);
            stage.addChild(playButton);
            playButton.on("click", playButtonClicked);
        }
        //PUBLIC METHODS........
        StartState.prototype.update = function () {
            ocean.update();
        };
        return StartState;
    })();
    states.StartState = StartState;
})(states || (states = {}));
//# sourceMappingURL=start.js.map