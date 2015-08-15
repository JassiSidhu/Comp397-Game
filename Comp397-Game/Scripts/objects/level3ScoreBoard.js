/// <reference path="../typings/easeljs/easeljs.d.ts" />
var objects;
(function (objects) {
    //SCOREBOARD CLASS
    var Level3ScoreBoard = (function () {
        //Constructor...
        function Level3ScoreBoard() {
            //Public properties..
            this.boatlives = 50;
            this.boatscore = 0;
            this.enemylives = 50;
            this.enemyscore = 0;
            this.boatliveLabel = new createjs.Text("Your Health: 100 ", "30px Consolas", "#ffffff");
            this.boatscoreLabel = new createjs.Text("Your Scores: ", "30px Consolas", "#ffffff");
            this.enemyliveLabel = new createjs.Text("Enemy Health: 100 ", "30px Consolas", "#ffffff");
            this.enemyscoreLabel = new createjs.Text("Enemy Scores: ", "30px Consolas", "#ffffff");
            this.boatliveLabel.x = 0;
            this.boatscoreLabel.x = 300;
            this.enemyliveLabel.x = 0;
            this.enemyscoreLabel.x = 300;
            this.enemyliveLabel.y = 30;
            this.enemyscoreLabel.y = 30;
            stage.addChild(this.boatliveLabel);
            stage.addChild(this.boatscoreLabel);
            stage.addChild(this.enemyliveLabel);
            stage.addChild(this.enemyscoreLabel);
        }
        //public methods........
        Level3ScoreBoard.prototype.update = function () {
            this.boatliveLabel.text = " Your Health: " + this.boatlives;
            this.boatscoreLabel.text = "Your Scores: " + this.boatscore;
            this.enemyliveLabel.text = " Enemy Health: " + this.enemylives;
            this.enemyscoreLabel.text = "Enemy Scores: " + this.enemyscore;
        };
        return Level3ScoreBoard;
    })();
    objects.Level3ScoreBoard = Level3ScoreBoard;
})(objects || (objects = {}));
//# sourceMappingURL=level3scoreboard.js.map