var states;
(function (states) {
    //Transition  CLASS : from second level to third
    var MoveToLevel3 = (function () {
        //CONSTRUCTOR.........
        function MoveToLevel3() {
            //add ocean object to stage
            ocean = new objects.Ocean(assets.loader.getResult("ocean"));
            stage.addChild(ocean);
            //add islands to the stage
            for (var island = 0; island < 2; island++) {
                islands[island] = new objects.Island(assets.loader.getResult("island"));
                stage.addChild(islands[island]);
            }
            //Add start objects....
            start = new createjs.Bitmap(assets.loader.getResult("moveTo3"));
            stage.addChild(start);
            playButton = new objects.Button(assets.loader.getResult("play"), 300, 360, false);
            stage.addChild(playButton);
            playButton.on("click", playLevel3ButtonClicked);
        }
        //PUBLIC METHODS........
        MoveToLevel3.prototype.update = function () {
            ocean.update();
            for (var island = 0; island < 2; island++) {
                islands[island].update();
            }
        };
        return MoveToLevel3;
    })();
    states.MoveToLevel3 = MoveToLevel3;
})(states || (states = {}));
//# sourceMappingURL=movetolevel3.js.map