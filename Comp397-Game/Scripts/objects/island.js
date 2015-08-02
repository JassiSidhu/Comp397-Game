/// <reference path="../managers/assets.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Island Class ......................
    var Island = (function (_super) {
        __extends(Island, _super);
        // CONSTRUCTOR ...........................
        function Island(imageString) {
            _super.call(this, imageString);
            this.name = "island";
            this.reset();
        }
        // PRIVATE METHODS .........................
        Island.prototype.checkBounds = function () {
            // check if island has left screen
            if (this.x < 0) {
                this.reset();
            }
        };
        Island.prototype.reset = function () {
            this.y = 100 + Math.floor(Math.random() * 400); // start island at random location
            this.x = 580; // start island off stage
            this.dx = Math.floor(Math.random() * 5) + 5;
            this.dy = Math.floor(Math.random() * 4);
        };
        // PUBLIC METHODS .....................
        Island.prototype.update = function () {
            this.x -= this.dx; // move island across the stage
            this.checkBounds();
        };
        return Island;
    })(objects.GameObject);
    objects.Island = Island;
})(objects || (objects = {}));
//# sourceMappingURL=island.js.map