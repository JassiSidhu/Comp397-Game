var states;
(function (states) {
    //Transition  CLASS : from first level to second
    var MoveToLevel2 = (function () {
        //CONSTRUCTOR.........
        function MoveToLevel2() {
            //add ocean object to stage
            ocean = new objects.Ocean(assets.loader.getResult("ocean"));
            stage.addChild(ocean);
            //add islands to the stage
            for (var island = 0; island < 2; island++) {
                islands[island] = new objects.Island(assets.loader.getResult("island"));
                stage.addChild(islands[island]);
            }
            //Add start objects....
            start = new createjs.Bitmap(assets.loader.getResult("moveTo2"));
            stage.addChild(start);
            playButton = new objects.Button(assets.loader.getResult("play"), 440, 300, false);
            stage.addChild(playButton);
            playButton.on("click", playLevel2ButtonClicked);
        }
        //PUBLIC METHODS........
        MoveToLevel2.prototype.update = function () {
            ocean.update();
            for (var island = 0; island < 2; island++) {
                islands[island].update();
            }
        };
        return MoveToLevel2;
    })();
    states.MoveToLevel2 = MoveToLevel2;
})(states || (states = {}));
//# sourceMappingURL=movetolevel2 - copy.js.map