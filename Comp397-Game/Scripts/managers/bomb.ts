module managers {
    // Bomb MANAGER CLASS +++++++++++++++++++++++++++++++++++++++++++++++++++++
    export class BombManager {
        // PRIVATE PROPERTIES +++++++++++++++++++++++++++++++++++++++++++++++++++
        private _bombs = [];
        private _bombCount: number = 0;
        
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor() {

        }

        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++

        // bomb FIRE METHOD
        public _fire() {
            // create two bombs on either side of  plane
            var bomb: objects.Bomb = new objects.Bomb();

            stage.addChild(bomb);
            bomb.init();
            this._bombs.push(bomb);
            

            // Play bomb Sound
            // createjs.Sound.play("bomb");
        } // end fire

        // bomb DESTROY METHOD
        private _destroyBomb(bomb: objects.Bomb) {
            var len: number = this._bombs.length;

            // remove bomb from game and from bomb array
            for (var count = 0; count < len; count++) {
                if (this._bombs[count] == bomb) {
                    this._bombs.splice(count, 1);
                    stage.removeChild(bomb);
                }
            }
        } // end destroybomb

        private _checkBounds(bomb: objects.Bomb) {
            // check to see if the bomb has left the top of the stage
            if (bomb.y < 0) {
                this._destroyBomb(bomb);
            }

            // check to see if the bomb has left the bottom of the stage
            if (bomb.y > 480) {
                this._destroyBomb(bomb);
            }

            // check to see if the bomb has left the left side of the stage
            if (bomb.x < 0) {
                this._destroyBomb(bomb);
            }

            // check to see if the bomb has left the right side of the stage
            if (bomb.x > 640) {
                this._destroyBomb(bomb);
            }
        }

        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


        // UPDATE METHOD
        public update() {
            var len: number = this._bombs.length;
            var bomb: objects.Bomb;

            for (var count = len - 1; count >= 0; count--) {
                bomb = this._bombs[count];
                // move current bomb up stage
                bomb.update()

                //console.log(currentState);
                if (currentState == level3State)
                    bulletCollision.check(bomb, boat);
                  

                this._checkBounds(bomb);
            } 

            // fire bomb if mouse button is clicked or game container is tapped
            if ((config.EFIRING) && (this._bombCount % 10 == 0)) {
                this._fire();
            }
            //increment bomb count to limit number of bombs being fired
            this._bombCount++;
        } // end update

        
    }
}   