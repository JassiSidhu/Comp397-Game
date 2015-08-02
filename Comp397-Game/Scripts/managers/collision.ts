﻿/// <reference path="assets.ts" />


module managers {
    export class Collision {
        //CONSTRUCTOR ................
        constructor() {
        }

        //PUBLIC METHODS ....................
        // check the distance between boat and any other game object
        public check(gameObject: objects.GameObject) {
        var p1: createjs.Point = new createjs.Point();
        var p2: createjs.Point = new createjs.Point();

        p1.x = boat.x;
        p1.y = boat.y;

        p2.x = gameObject.x;
        p2.y = gameObject.y;


        if (utility.distance(p1, p2) < ((boat.height * 0.5) + (gameObject.height * 0.5))) {
            if (gameObject.isColliding == false) {
                createjs.Sound.play(gameObject.sound);
                if (gameObject.name == "island") {
                    scoreboard.lives--;
                    if (scoreboard.lives == 0)
                        changeState(2);
                    //console.log(scoreboard.lives);
                }
                if (gameObject.name == "shell") {
                    scoreboard.score += 100;
                   //console.log(scoreboard.score);
                }
            }
            gameObject.isColliding = true;

        }
        else {
            gameObject.isColliding = false;
        }
    }


    }
} 