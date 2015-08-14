/// <reference path="../managers/assets.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // enemyBoat2 Class ......................
    var EnemyBoat2 = (function (_super) {
        __extends(EnemyBoat2, _super);
        // CONSTRUCTOR ...........................
        function EnemyBoat2(imageString) {
            _super.call(this, imageString);
            this.name = "enemyBoat2";
            this.reset();
        }
        // PRIVATE METHODS .........................
        EnemyBoat2.prototype.checkBounds = function () {
            // check if enemyBoat2 has left screen
            if (this.x < 0) {
                this.reset();
            }
        };
        // PUBLIC METHODS .....................
        EnemyBoat2.prototype.reset = function () {
            this.y = 200 + Math.floor(Math.random() * 50); // start enemyBoat2 at random location
            this.x = 580; // start enemyBoat2 off stage
            this.dx = Math.floor(Math.random() * 5) + 6.5;
            this.dy = Math.floor(Math.random() * 4);
        };
        EnemyBoat2.prototype.update = function () {
            this.x -= this.dx; // move enemyBoat2 across the stage
            this.checkBounds();
        };
        return EnemyBoat2;
    })(objects.GameObject);
    objects.EnemyBoat2 = EnemyBoat2;
})(objects || (objects = {}));
//# sourceMappingURL=enemyboat2.js.map