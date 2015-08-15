/// <reference path="assets.ts" />


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

                if (gameObject.name == "island1" || gameObject.name == "island2" || gameObject.name == "enemyBoat1" || gameObject.name == "enemyBoat2" || gameObject.name == "enemyBoat3" ) {
                    
                    scoreboard.lives--;
                    if (scoreboard.lives == 0) {
                        changeState(2);
                        scoreLabel = new createjs.Text("Your Scores: " + scoreboard.score, "40px Consolas", "#ffffff");
                        scoreLabel.x = 130;
                        scoreLabel.y = 230;
                        stage.addChild(scoreLabel);
                    }
                   
                    if (gameObject.name == "island1") {

                        gameObject.destroyObject();
                        island1 = new objects.Island(assets.loader.getResult("island1"));
                        stage.addChild(island1);
                        island1.reset();
                        island1.update();
                    }
                    if (gameObject.name == "island2") {
                        gameObject.destroyObject();
                        island2 = new objects.Island2(assets.loader.getResult("island2"));
                        stage.addChild(island2);
                        island2.reset();
                        island2.update();
                    }
                    if (gameObject.name == "enemyBoat1")
                    {
                        gameObject.destroyObject();
                        enemyBoat1 = new objects.EnemyBoat(assets.loader.getResult("enemyBoat"));
                        stage.addChild(enemyBoat1);
                        enemyBoat1.reset();
                        enemyBoat1.update();
                    }
                    if (gameObject.name == "enemyBoat2")
                    {
                        gameObject.destroyObject();
                        enemyBoat2 = new objects.EnemyBoat2(assets.loader.getResult("enemyBoat"));
                        stage.addChild(enemyBoat2);
                        enemyBoat2.reset();
                        enemyBoat2.update();
                    }
                    if (gameObject.name == "enemyBoat3")
                    {
                        gameObject.destroyObject();
                        enemyBoat3 = new objects.EnemyBoat3(assets.loader.getResult("enemyBoat"));
                        stage.addChild(enemyBoat3);
                        enemyBoat3.reset();
                        enemyBoat3.update();
                    }
                    
                }
                if (gameObject.name == "diamond") {
                    scoreboard.score += 100;
                    gameObject.destroyObject();
                    diamond = new objects.Diamond(assets.loader.getResult("diamond"));
                    stage.addChild(diamond);
                    diamond.reset();
                    diamond.update();
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