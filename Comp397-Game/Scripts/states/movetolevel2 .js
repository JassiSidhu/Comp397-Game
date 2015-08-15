var states;
(function (states) {
    //Transition  CLASS : from first level to second
    var MoveToLevel2 = (function () {
        //CONSTRUCTOR.........
        function MoveToLevel2() {
            //Add start objects....
            start = new createjs.Bitmap(assets.loader.getResult("moveTo2"));
            stage.addChild(start);
            playButton = new objects.Button(assets.loader.getResult("play"), 270, 410, false);
            stage.addChild(playButton);
            playButton.on("click", playLevel2ButtonClicked);
        }
        //PUBLIC METHODS........
        MoveToLevel2.prototype.update = function () {
        };
        return MoveToLevel2;
    })();
    states.MoveToLevel2 = MoveToLevel2;
})(states || (states = {}));
//# sourceMappingURL=movetolevel2 .js.map