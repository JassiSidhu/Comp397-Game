module managers {
    //ASSET CLASS
    export class Asset {

        public loader: createjs.LoadQueue;
        private manifest = [
            { id: "ocean", src: "assets/images/sea.jpg" },
            { id: "boat", src: "assets/images/boat.png" },
            { id: "shell", src: "assets/images/shell1.png" },
            { id: "island", src: "assets/images/island.png" },
            { id: "shark", src: "assets/images/en.png" },
            { id: "play", src: "assets/images/play.png" },
            { id: "tryAgain", src: "assets/images/tryAgain.png" },
            { id: "back", src: "assets/images/back.png" },
            { id: "instructions", src: "assets/images/instruction.png" },
            { id: "instructionsPage", src: "assets/images/instructionPage.png" },
            { id: "gameOver", src: "assets/images/gameOver.png" },
            { id: "start", src: "assets/images/start.png" },
            { id: "power", src: "assets/audio/Powerup.wav" },
            { id: "eat", src: "assets/audio/thunder.ogg" },
            { id: "breath", src: "assets/audio/breathing.mp3" }
        ];
        
        //CONSTRUCTOR
        constructor(){
            this.preload();
        }

        preload()
        {
            //load manifest
            this.loader= new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            // event listener triggers when assets are completely loaded
            this.loader.on("complete", init, this);
            this.loader.loadManifest(this.manifest);
            
        }
         }
}