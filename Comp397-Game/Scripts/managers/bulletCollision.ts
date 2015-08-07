/// <reference path="assets.ts" />

module managers {
    export class BulletCollision {
        //CONSTRUCTOR ................
        constructor() {
        }

        //PUBLIC METHODS ....................
        // check the distance between bullet and any other game object
        public check(gameObject1: objects.GameObject, gameObject2: objects.GameObject) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();

            p1.x = gameObject1.x;
            p1.y = gameObject1.y;

            p2.x = gameObject2.x;
            p2.y = gameObject2.y;

            if (utility.distance(p1, p2) < ((gameObject1.height * 0.5) + (gameObject2.height * 0.5))) {
                if (gameObject1.isColliding == false) {
                   // createjs.Sound.play(gameObject.sound);

                    if ((gameObject1.name == "bullet") && (gameObject2.name == "enemyBoat")) {

                        scoreboard.score+= 50;
                        if (scoreboard.lives == 0) {
                            changeState(2);
                        }
                        // console.log(scoreboard.lives);
                    }
                   

                }
                gameObject1.isColliding = true;

            }
            else {
                gameObject1.isColliding = false;
            }
        }


    }
}  