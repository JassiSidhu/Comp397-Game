﻿/// <reference path="../typings/easeljs/easeljs.d.ts" />
module objects {
    //SCOREBOARD CLASS
    export class Level3ScoreBoard {
        //Public properties..
        public boatlives: number = 50;
        public boatscore: number = 0;
        public enemylives: number = 50;
        public enemyscore: number = 0;

        //Private properties....
        private boatliveLabel: createjs.Text;
        private boatscoreLabel: createjs.Text;
        private enemyliveLabel: createjs.Text;
        private enemyscoreLabel: createjs.Text;


        //Constructor...
        constructor() {

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
        public update() {
            this.boatliveLabel.text = " Your Health: " + this.boatlives;
            this.boatscoreLabel.text = "Your Scores: " + this.boatscore;
            this.enemyliveLabel.text = " Enemy Health: " + this.enemylives;
            this.enemyscoreLabel.text = "Enemy Scores: " + this.enemyscore;
            

            
        }

    }
} 