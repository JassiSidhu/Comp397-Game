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
    var Island2 = (function (_super) {
        __extends(Island2, _super);
        // CONSTRUCTOR ...........................
        function Island2(imageString) {
            _super.call(this, imageString);
            this.name = "island2";
            this.reset();
        }
        // PRIVATE METHODS .........................
        Island2.prototype.checkBounds = function () {
            // check if island has left screen
            if (this.x < 10) {
                this.reset();
            }
        };
        Island2.prototype.reset = function () {
            this.y = 50 + Math.floor(Math.random() * 100); // start island at random location
            this.x = 580; // start island off stage
        };
        // PUBLIC METHODS .....................
        Island2.prototype.update = function () {
            this.x -= 3; // move island across the stage
            this.checkBounds();
        };
        return Island2;
    })(objects.GameObject);
    objects.Island2 = Island2;
})(objects || (objects = {}));
//# sourceMappingURL=island2.js.map