/// <reference path="assets.ts" />

module managers {
    export class BulletCollision {
        //CONSTRUCTOR ................
        constructor() {
        }

        //PUBLIC METHODS ....................
        // check the distance between two game objects
        public check(gameObject1: objects.GameObject, gameObject2: objects.GameObject) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();

            p1.x = gameObject1.x;
            p1.y = gameObject1.y;

            p2.x = gameObject2.x;
            p2.y = gameObject2.y;

            if (utility.distance(p1, p2) < ((gameObject1.height * 0.5) + (gameObject2.height * 0.5)))
            {
                if (gameObject1.isColliding == false)
                {
                    //collision between bullets and other objects at level2
                    if ((gameObject1.name == "bullet") && (gameObject2.name == "enemyBoat1" || gameObject2.name == "enemyBoat2" || gameObject2.name == "enemyBoat3"))
                    {

                        scoreboard.score+= 50;
                        if (scoreboard.lives == 0)
                        {
                            changeState(2);
                            scoreLabel = new createjs.Text("Your Scores: " + scoreboard.score, "40px Consolas", "#ffffff");
                            scoreLabel.x = 120;
                            scoreLabel.y = 250;
                            stage.addChild(scoreLabel);
                        }

                        if (gameObject2.name == "enemyBoat1")
                        {
                            gameObject2.destroyObject();
                            enemyBoat1 = new objects.EnemyBoat(assets.loader.getResult("enemyBoat"));
                            stage.addChild(enemyBoat1);
                            enemyBoat1.reset();
                            enemyBoat1.update();
                        }

                        if (gameObject2.name == "enemyBoat2")
                        {
                            gameObject2.destroyObject();
                            enemyBoat2 = new objects.EnemyBoat2(assets.loader.getResult("enemyBoat"));
                            stage.addChild(enemyBoat2);
                            enemyBoat2.reset();
                            enemyBoat2.update();
                        }


                       if (gameObject2.name == "enemyBoat3") {
                           gameObject2.destroyObject();
                           enemyBoat3 = new objects.EnemyBoat3(assets.loader.getResult("enemyBoat"));
                           stage.addChild(enemyBoat3);
                           enemyBoat3.reset();
                           enemyBoat3.update();
                       }

                    }
                    // collisions at level3
                    if (currentState == level3State)
                    {
                        if ((gameObject1.name == "bullet") && (gameObject2.name == "level3Enemy")) {
                            level3ScoreBoard.boatscore += 100;
                            level3ScoreBoard.enemylives--;
                            if (level3ScoreBoard.boatlives == 0) {

                                changeState(8);
                                winLoseLabel = new createjs.Text("You Lose.... ", "60px Consolas", "#ffffff");
                                winLoseLabel.x = 130;
                                winLoseLabel.y = 100;
                                stage.addChild(winLoseLabel);

                                scoreLabel = new createjs.Text("Your Scores: " + level3ScoreBoard.boatscore, "40px Consolas", "#ffffff");
                                scoreLabel.x = 130;
                                scoreLabel.y = 230;
                                stage.addChild(scoreLabel);
                            }
                            if (level3ScoreBoard.enemylives == 0) {
                                changeState(8);
                                winLoseLabel = new createjs.Text("You Win.... ", "60px Consolas", "#ffffff");
                                winLoseLabel.x = 130;
                                winLoseLabel.y = 100;
                                stage.addChild(winLoseLabel);

                                scoreLabel = new createjs.Text("Your Scores: " + level3ScoreBoard.boatscore, "40px Consolas", "#ffffff");
                                scoreLabel.x = 130;
                                scoreLabel.y = 230;
                                stage.addChild(scoreLabel);
                            }
                        }

                        if ((gameObject1.name == "bomb") && (gameObject2.name == "boat")) {
                            level3ScoreBoard.enemyscore += 100;
                            level3ScoreBoard.boatlives--;
                            if (level3ScoreBoard.boatlives == 0) {
                                changeState(8);
                                winLoseLabel = new createjs.Text("You Lose.... ", "60px Consolas", "#ffffff");
                                winLoseLabel.x = 130;
                                winLoseLabel.y = 100;
                                stage.addChild(winLoseLabel);

                                scoreLabel = new createjs.Text("Your Scores: " + level3ScoreBoard.boatscore, "40px Consolas", "#ffffff");
                                scoreLabel.x = 130;
                                scoreLabel.y = 230;
                                stage.addChild(scoreLabel);
                            }
                            if (level3ScoreBoard.enemylives == 0) {
                                changeState(8);
                                winLoseLabel = new createjs.Text("You Win.... ", "60px Consolas", "#ffffff");
                                winLoseLabel.x = 130;
                                winLoseLabel.y = 100;
                                stage.addChild(winLoseLabel);

                                scoreLabel = new createjs.Text("Your Scores: " + level3ScoreBoard.boatscore, "40px Consolas", "#ffffff");
                                scoreLabel.x = 130;
                                scoreLabel.y = 230;
                                stage.addChild(scoreLabel);
                            }
                        }
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