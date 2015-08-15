/// <reference path="../managers/assets.ts" />
var states;
(function (states) {
    //INSTRUCTIONS CLASS..............
    var Instructions = (function () {
        //CONSTRUCTOR..............
        function Instructions() {
            //add ocean object to stage
            ocean = new objects.Ocean(assets.loader.getResult("ocean"));
            stage.addChild(ocean);
            //Add objects of instruction page
            instructionsPage = new createjs.Bitmap(assets.loader.getResult("instructionsPage"));
            stage.addChild(instructionsPage);
            backButton = new objects.Button(assets.loader.getResult("back"), 60, 65, false);
            stage.addChild(backButton);
            backButton.on("click", backClicked);
        }
        //PUBLIC METHODS.......
        Instructions.prototype.update = function () {
            ocean.update();
        };
        return Instructions;
    })();
    states.Instructions = Instructions;
})(states || (states = {}));
//# sourceMappingURL=instructions.js.map