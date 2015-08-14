
module states {
    //Transition  CLASS : from first level to second
    export class MoveToLevel2 {
        //CONSTRUCTOR.........
        constructor() {
            //add ocean object to stage
            ocean = new objects.Ocean(assets.loader.getResult("ocean"));
            stage.addChild(ocean);

            
            //Add start objects....
            start = new createjs.Bitmap(assets.loader.getResult("moveTo2"));
            stage.addChild(start);


            playButton = new objects.Button(assets.loader.getResult("play"), 460, 100, false);
            stage.addChild(playButton);
            playButton.on("click", playLevel2ButtonClicked);
        }

        //PUBLIC METHODS........
        public update() {
            ocean.update();
          
        }

    }
}  