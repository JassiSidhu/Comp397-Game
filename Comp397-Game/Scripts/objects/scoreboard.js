/// <reference path="../typings/easeljs/easeljs.d.ts" />
var objects;
(function (objects) {
    //SCOREBOARD CLASS
    var ScoreBoard = (function () {
        //Constructor...
        function ScoreBoard() {
            //Public properties..
            this.lives = 5;
            this.score = 0;
            this.liveLabel = new createjs.Text("Lives: 5 ", "40px Consolas", "#ffffff");
            this.scoreLabel = new createjs.Text("Scores:  ", "40px Consolas", "#ffffff");
            this.liveLabel.x = 350;
            stage.addChild(this.liveLabel);
            stage.addChild(this.scoreLabel);
        }
        //public methods........
        ScoreBoard.prototype.update = function () {
            this.liveLabel.text = "Live:  " + this.lives;
            this.scoreLabel.text = "Scores:  " + this.score;
            if (this.score == 500 && currentState == playState) {
                changeState(4);
            }
            if (this.score == 5000 && currentState == level2State) {
                changeState(6);
            }
        };
        return ScoreBoard;
    })();
    objects.ScoreBoard = ScoreBoard;
})(objects || (objects = {}));
//# sourceMappingURL=scoreboard.js.map