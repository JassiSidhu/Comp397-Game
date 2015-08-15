
module states {
    //Transition  CLASS : from second level to third
    export class MoveToLevel3 {
        //CONSTRUCTOR.........
        constructor() {
                      
            //Add start objects....
            start = new createjs.Bitmap(assets.loader.getResult("moveTo3"));
            stage.addChild(start);


            playButton = new objects.Button(assets.loader.getResult("play"), 270, 435, false);
            stage.addChild(playButton);
            playButton.on("click", playLevel3ButtonClicked);
        }

        //PUBLIC METHODS........
        public update() {
           
        }

    }
}  