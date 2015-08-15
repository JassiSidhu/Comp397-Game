var states;
(function (states) {
    //Transition  CLASS : from second level to third
    var MoveToLevel3 = (function () {
        //CONSTRUCTOR.........
        function MoveToLevel3() {
            //Add start objects....
            start = new createjs.Bitmap(assets.loader.getResult("moveTo3"));
            stage.addChild(start);
            playButton = new objects.Button(assets.loader.getResult("play"), 270, 435, false);
            stage.addChild(playButton);
            playButton.on("click", playLevel3ButtonClicked);
        }
        //PUBLIC METHODS........
        MoveToLevel3.prototype.update = function () {
        };
        return MoveToLevel3;
    })();
    states.MoveToLevel3 = MoveToLevel3;
})(states || (states = {}));
//# sourceMappingURL=movetolevel3.js.map