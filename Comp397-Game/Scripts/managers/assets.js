var managers;
(function (managers) {
    //ASSET CLASS
    var Asset = (function () {
        //CONSTRUCTOR
        function Asset() {
            this.manifest = [
                { id: "ocean", src: "assets/images/ocean.jpg" },
                { id: "bullet", src: "assets/images/bullet.png" },
                { id: "bomb", src: "assets/images/bomb.png" },
                { id: "boat", src: "assets/images/boat.png" },
                { id: "diamond", src: "assets/images/diamond.png" },
                { id: "island1", src: "assets/images/i1.png" },
                { id: "island2", src: "assets/images/i2.png" },
                { id: "enemyBoat", src: "assets/images/enemyBoat.png" },
                { id: "enemyLevel3", src: "assets/images/ship.png" },
                { id: "moveTo2", src: "assets/images/move-to-secondlevel.png" },
                { id: "moveTo3", src: "assets/images/move-to-thirdlevel.png" },
                { id: "play", src: "assets/images/play.png" },
                { id: "tryAgain", src: "assets/images/playAgainButton.png" },
                { id: "back", src: "assets/images/back.png" },
                { id: "instructions", src: "assets/images/Instruction-Button.png" },
                { id: "instructionsPage", src: "assets/images/instruction-screen.png" },
                { id: "gameOver", src: "assets/images/game-over.png" },
                { id: "start", src: "assets/images/start-screen.png" },
                { id: "winLose", src: "assets/images/win-lose-screen.png" },
                { id: "power", src: "assets/audio/Powerup.wav" },
                { id: "collide", src: "assets/audio/collide.mp3" },
                { id: "bullets", src: "assets/audio/bullet.mp3" },
                { id: "breath", src: "assets/audio/breathing.mp3" }
            ];
            this.preload();
        }
        Asset.prototype.preload = function () {
            //load manifest
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            // event listener triggers when assets are completely loaded
            this.loader.on("complete", init, this);
            this.loader.loadManifest(this.manifest);
        };
        return Asset;
    })();
    managers.Asset = Asset;
})(managers || (managers = {}));
//# sourceMappingURL=assets.js.map