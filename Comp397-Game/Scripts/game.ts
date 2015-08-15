
//Author: Jaswinder Sidhu /Kirandeep Kaur
//Source: COMP397 - Game
//Last modified by: Jaswinder Sidhu 
//Date Last Modified: August 14, 2015 
//Description: side scroller game of boat in the sea 
//Revision History: Revised 10 times 

/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />

/// <reference path="managers/assets.ts" />
/// <reference path="utility/utility.ts" />


/// <reference path="objects/gameobject.ts" />
/// <reference path="objects/ocean.ts" />
/// <reference path="objects/island.ts" />
/// <reference path="objects/island2.ts" />
/// <reference path="objects/diamond.ts" />
/// <reference path="objects/button.ts" />
/// <reference path="objects/level3enemy.ts" />
/// <reference path="objects/level3boat.ts" />
/// <reference path="objects/bomb.ts" />
/// <reference path="objects/enemyboat.ts" />
/// <reference path="objects/enemyboat2.ts" />
/// <reference path="objects/enemyboat3.ts" />

/// <reference path="objects/scoreboard.ts" />
/// <reference path="objects/level3scoreboard.ts" />

/// <reference path="managers/collision.ts" />
/// <reference path="managers/bomb.ts" />
/// <reference path="objects/bullet.ts" />
/// <reference path="config/config.ts" />
/// <reference path="managers/bullet.ts" />
/// <reference path="managers/bulletcollision.ts" />


/// <reference path="states/start.ts" />
/// <reference path="states/instructions.ts" />
/// <reference path="states/play.ts" />
/// <reference path="states/gameover.ts" />
/// <reference path="states/movetolevel2 .ts" />
/// <reference path="states/movetolevel3.ts" />
/// <reference path="states/level2.ts" />
/// <reference path="states/level3.ts" />
/// <reference path="states/win-lose.ts" />


// Game Framework Variables
var canvas = document.getElementById("canvas");
var stage: createjs.Stage;
var stats: Stats;

// Game Variables
var ocean: objects.Ocean;
var boat: objects.Boat;
var diamond: objects.Diamond;
var island1: objects.Island;
var island2: objects.Island2;
var enemyBoat1: objects.EnemyBoat;
var enemyBoat2: objects.EnemyBoat2;
var enemyBoat3: objects.EnemyBoat3;
var level3Boat: objects.Level3Boat;
var level3Enemy: objects.Level3Enemy;

//score variables
var scoreboard: objects.ScoreBoard;
var level3ScoreBoard: objects.Level3ScoreBoard;

//state variables
var currentState;

//Game Managers
var assets: managers.Asset;
var collision: managers.Collision;
var bulletManager: managers.BulletManager;
var bombManager: managers.BombManager;
var bulletCollision: managers.BulletCollision;

// game states
var playState: states.Play;
var startState: states.StartState;
var gameOverState: states.GameOver;
var instructionState: states.Instructions;
var moveTo2State: states.MoveToLevel2; 
var level2State: states.Level2;
var moveTo3State: states.MoveToLevel3;
var level3State: states.Level3;
var winLoseState: states.WinLose;

//three images for three states
var start: createjs.Bitmap;
var gameOver: createjs.Bitmap;
var instructionsPage: createjs.Bitmap;


//labels for scores at the end
var winLoseLabel: createjs.Text;
var scoreLabel: createjs.Text;

//buttons for navigation
var tryButton: objects.Button;
var playButton: objects.Button;
var instructionsButton: objects.Button;
var backButton: objects.Button;
var level2Button: objects.Button;
var level3Button: objects.Button;

// Preloader Function
function preload() {
    assets = new managers.Asset();
   
    //Setup statistics object
    setupStats();
}

// Callback function that initializes game objects
function init() {
    stage = new createjs.Stage(canvas); // reference to the stage
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(60); // framerate 60 fps for the game
    // event listener triggers 60 times every second
    createjs.Ticker.on("tick", gameLoop); 

    // calling main game function
    main();
}

// function to setup stat counting
function setupStats() {
    stats = new Stats();
    stats.setMode(0); // set to fps
    
    // align bottom-right
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '6500px';
    stats.domElement.style.top = '10px';

    document.body.appendChild(stats.domElement);
}


// Callback function that creates our Main Game Loop - refreshed 60 fps
function gameLoop() {
    stats.begin(); // Begin measuring

    currentState.update();

    stage.update();

    stats.end(); // end measuring
}

//play function
function playButtonClicked(event: createjs.MouseEvent) {
    stage.removeAllChildren();
    changeState(1);

}


//play level 2 function
function playLevel2ButtonClicked(event: createjs.MouseEvent) {
    stage.removeAllChildren();
    changeState(5);

}

//play level 3 function
function playLevel3ButtonClicked(event: createjs.MouseEvent) {
    stage.removeAllChildren();
    changeState(7);

}
//try again button function
function tryButtonClicked(event: createjs.MouseEvent) {
    stage.removeAllChildren();
    changeState(1);

}

//instruction button function
function instructionsClicked(event : createjs.MouseEvent)
{
    stage.removeAllChildren();
    changeState(3);
}

//back button function
function backClicked(event: createjs.MouseEvent) {
    stage.removeAllChildren();
    changeState(0);
}

function changeState(state: number) {
    switch (state) {
        case 0:
            startState = new states.StartState();
            currentState = startState;
            break;
        case 1:
            playState = new states.Play();
            currentState = playState;
            break;
        case 2:
            gameOverState = new states.GameOver();
            currentState = gameOverState;
            break;
        case 3:
            instructionState = new states.Instructions();
            currentState = instructionState;
            break;
        case 4:
            moveTo2State = new states.MoveToLevel2();
            currentState = moveTo2State;
            break;
        case 5:
            level2State = new states.Level2();
            currentState = level2State;
            break;
        case 6:
            moveTo3State = new states.MoveToLevel3();
            currentState = moveTo3State;
            break;
        case 7:
            level3State = new states.Level3();
            currentState = level3State;
            break;
        case 8:
            winLoseState = new states.WinLose();
            currentState = winLoseState;
            break;
    }
}



// Our Main Game Function
function main() {
  
    startState = new states.StartState();
    currentState = startState;


    console.log("Game running");
}