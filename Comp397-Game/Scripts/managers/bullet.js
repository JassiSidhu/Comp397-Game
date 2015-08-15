var managers;
(function (managers) {
    // BULLET MANAGER CLASS ........................................
    var BulletManager = (function () {
        // CONSTRUCTOR .............................................
        function BulletManager() {
            // PRIVATE PROPERTIES .......................................
            this._bullets = [];
            this._bulletCount = 0;
        }
        // PRIVATE METHODS .........................................
        // BULLET DESTROY METHOD
        BulletManager.prototype._destroyBullet = function (bullet) {
            var len = this._bullets.length;
            // remove bullet from game and from bullet array
            for (var count = 0; count < len; count++) {
                if (this._bullets[count] == bullet) {
                    this._bullets.splice(count, 1);
                    stage.removeChild(bullet);
                }
            }
        }; // end destroyBullet
        //check bounds method
        BulletManager.prototype._checkBounds = function (bullet) {
            // check to see if the bullet has left the top of the stage
            if (bullet.y < 0) {
                this._destroyBullet(bullet);
            }
            // check to see if the bullet has left the bottom of the stage
            if (bullet.y > 480) {
                this._destroyBullet(bullet);
            }
            // check to see if the bullet has left the left side of the stage
            if (bullet.x < 0) {
                this._destroyBullet(bullet);
            }
            // check to see if the bullet has left the right side of the stage
            if (bullet.x > 640) {
                this._destroyBullet(bullet);
            }
        };
        // PUBLIC METHODS ...................................................
        // BULLET FIRE METHOD
        BulletManager.prototype._fire = function () {
            // create two bullets on either side of  plane
            var bullet = new objects.Bullet();
            stage.addChild(bullet);
            createjs.Sound.play(bullet.sound);
            bullet.init();
            this._bullets.push(bullet);
        }; // end fire
        // UPDATE METHOD
        BulletManager.prototype.update = function () {
            var len = this._bullets.length;
            var bullet;
            for (var count = len - 1; count >= 0; count--) {
                bullet = this._bullets[count];
                // move current bullet up stage
                bullet.update();
                //console.log(currentState);
                if (currentState == level3State)
                    bulletCollision.check(bullet, level3Enemy);
                else {
                    bulletCollision.check(bullet, enemyBoat1);
                    bulletCollision.check(bullet, enemyBoat2);
                    bulletCollision.check(bullet, enemyBoat3);
                }
                this._checkBounds(bullet);
            }
            // fire bullet if mouse button is clicked or game container is tapped
            if ((config.FIRING) && (this._bulletCount % 10 == 0)) {
                this._fire();
            }
            //increment bullet count to limit number of bullets being fired
            this._bulletCount++;
        }; // end update
        return BulletManager;
    })();
    managers.BulletManager = BulletManager;
})(managers || (managers = {}));
//# sourceMappingURL=bullet.js.map