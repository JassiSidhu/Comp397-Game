/// <reference path="../managers/assets.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // enemyBoat3 Class ......................
    var EnemyBoat3 = (function (_super) {
        __extends(EnemyBoat3, _super);
        // CONSTRUCTOR ...........................
        function EnemyBoat3(imageString) {
            _super.call(this, imageString);
            this.name = "enemyBoat3";
            this.reset();
        }
        // PRIVATE METHODS .........................
        EnemyBoat3.prototype.checkBounds = function () {
            // check if enemyBoat3 has left screen
            if (this.x < 0) {
                this.reset();
            }
        };
        // PUBLIC METHODS .....................
        EnemyBoat3.prototype.reset = function () {
            this.y = 350 + Math.floor(Math.random() * 50); // start enemyBoat3 at random location
            this.x = 580; // start enemyBoat3 off stage
            this.dx = Math.floor(Math.random() * 5) + 6.5;
            this.dy = Math.floor(Math.random() * 4);
        };
        EnemyBoat3.prototype.update = function () {
            this.x -= this.dx; // move enemyBoat3 across the stage
            this.checkBounds();
        };
        return EnemyBoat3;
    })(objects.GameObject);
    objects.EnemyBoat3 = EnemyBoat3;
})(objects || (objects = {}));
//# sourceMappingURL=enemyboat3.js.map