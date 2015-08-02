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
            //add shell object to stage
            shell = new objects.Shell(assets.loader.getResult("shell"));
            stage.addChild(shell);
            //add islands to the stage
            for (var island = 0; island < 3; island++) {
                islands[island] = new objects.Island(assets.loader.getResult("island"));
                stage.addChild(islands[island]);
            }
            //Add objects of instruction page
            instructionsPage = new createjs.Bitmap(assets.loader.getResult("instructionsPage"));
            stage.addChild(instructionsPage);
            backButton = new objects.Button(assets.loader.getResult("back"), 440, 340, false);
            stage.addChild(backButton);
            backButton.on("click", backClicked);
        }
        //PUBLIC METHODS.......
        Instructions.prototype.update = function () {
            ocean.update();
            shell.update();
            for (var island = 0; island < 3; island++) {
                islands[island].update();
            }
        };
        return Instructions;
    })();
    states.Instructions = Instructions;
})(states || (states = {}));
//# sourceMappingURL=instructions.js.map