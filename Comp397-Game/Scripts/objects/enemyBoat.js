/// <reference path="../managers/assets.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // enemyBoat Class ......................
    var EnemyBoat = (function (_super) {
        __extends(EnemyBoat, _super);
        // CONSTRUCTOR ...........................
        function EnemyBoat(imageString) {
            _super.call(this, imageString);
            this.name = "enemyBoat";
            this.reset();
        }
        // PRIVATE METHODS .........................
        EnemyBoat.prototype.checkBounds = function () {
            // check if enemyBoat has left screen
            if (this.x < 0) {
                this.reset();
            }
        };
        EnemyBoat.prototype.reset = function () {
            this.y = 100 + Math.floor(Math.random() * 400); // start enemyBoat at random location
            this.x = 580; // start enemyBoat off stage
            this.dx = Math.floor(Math.random() * 5) + 5;
            this.dy = Math.floor(Math.random() * 4);
        };
        // PUBLIC METHODS .....................
        EnemyBoat.prototype.update = function () {
            this.x -= this.dx; // move enemyBoat across the stage
            this.checkBounds();
        };
        return EnemyBoat;
    })(objects.GameObject);
    objects.EnemyBoat = EnemyBoat;
})(objects || (objects = {}));
//# sourceMappingURL=enemyboat.js.map