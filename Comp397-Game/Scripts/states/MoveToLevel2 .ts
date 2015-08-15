
module states {
    //Transition  CLASS : from first level to second
    export class MoveToLevel2 {
        //CONSTRUCTOR.........
        constructor() {
           
            //Add start objects....
            start = new createjs.Bitmap(assets.loader.getResult("moveTo2"));
            stage.addChild(start);


            playButton = new objects.Button(assets.loader.getResult("play"), 270, 410, false);
            stage.addChild(playButton);
            playButton.on("click", playLevel2ButtonClicked);
        }

        //PUBLIC METHODS........
        public update() {
          
        }

    }
}  