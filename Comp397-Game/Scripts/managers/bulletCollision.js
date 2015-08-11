/// <reference path="assets.ts" />
var managers;
(function (managers) {
    var BulletCollision = (function () {
        //CONSTRUCTOR ................
        function BulletCollision() {
        }
        //PUBLIC METHODS ....................
        // check the distance between bullet and any other game object
        BulletCollision.prototype.check = function (gameObject1, gameObject2) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = gameObject1.x;
            p1.y = gameObject1.y;
            p2.x = gameObject2.x;
            p2.y = gameObject2.y;
            if (utility.distance(p1, p2) < ((gameObject1.height * 0.5) + (gameObject2.height * 0.5))) {
                if (gameObject1.isColliding == false) {
                    // createjs.Sound.play(gameObject.sound);
                    if ((gameObject1.name == "bullet") && (gameObject2.name == "enemyBoat")) {
                        scoreboard.score += 50;
                        if (scoreboard.lives == 0) {
                            changeState(2);
                        }
                    }
                    if (currentState == level3State) {
                        if ((gameObject1.name == "bullet") && (gameObject2.name == "level3Enemy")) {
                            level3ScoreBoard.boatscore += 100;
                            level3ScoreBoard.enemylives--;
                            if (level3ScoreBoard.boatlives == 0) {
                                changeState(2);
                            }
                            if (level3ScoreBoard.enemylives == 0)
                                changeState(2);
                        }
                        if ((gameObject1.name == "bomb") && (gameObject2.name == "boat")) {
                            level3ScoreBoard.enemyscore += 100;
                            level3ScoreBoard.boatlives--;
                            if (level3ScoreBoard.boatlives == 0) {
                                changeState(2);
                            }
                            if (level3ScoreBoard.enemylives == 0)
                                changeState(0);
                        }
                    }
                }
                gameObject1.isColliding = true;
            }
            else {
                gameObject1.isColliding = false;
            }
        };
        return BulletCollision;
    })();
    managers.BulletCollision = BulletCollision;
})(managers || (managers = {}));
//# sourceMappingURL=bulletCollision.js.map