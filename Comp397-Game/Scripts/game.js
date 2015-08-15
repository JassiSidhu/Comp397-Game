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
var stage;
var stats;
// Game Variables
var ocean;
var boat;
var diamond;
var island1;
var island2;
var enemyBoat1;
var enemyBoat2;
var enemyBoat3;
var level3Boat;
var level3Enemy;
//score variables
var scoreboard;
var level3ScoreBoard;
//state variables
var currentState;
//Game Managers
var assets;
var collision;
var bulletManager;
var bombManager;
var bulletCollision;
// game states
var playState;
var startState;
var gameOverState;
var instructionState;
var moveTo2State;
var level2State;
var moveTo3State;
var level3State;
var winLoseState;
//three images for three states
var start;
var gameOver;
var instructionsPage;
//labels for scores at the end
var winLoseLabel;
var scoreLabel;
//buttons for navigation
var tryButton;
var playButton;
var instructionsButton;
var backButton;
var level2Button;
var level3Button;
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
function playButtonClicked(event) {
    stage.removeAllChildren();
    changeState(1);
}
//play level 2 function
function playLevel2ButtonClicked(event) {
    stage.removeAllChildren();
    changeState(5);
}
//play level 3 function
function playLevel3ButtonClicked(event) {
    stage.removeAllChildren();
    changeState(7);
}
//try again button function
function tryButtonClicked(event) {
    stage.removeAllChildren();
    changeState(1);
}
//instruction button function
function instructionsClicked(event) {
    stage.removeAllChildren();
    changeState(3);
}
//back button function
function backClicked(event) {
    stage.removeAllChildren();
    changeState(0);
}
function changeState(state) {
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
//# sourceMappingURL=game.js.map