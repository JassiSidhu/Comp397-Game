/// <reference path="../managers/assets.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Fuel Class ......................
    var Fuel = (function (_super) {
        __extends(Fuel, _super);
        // CONSTRUCTOR ...........................
        function Fuel(imageString, level) {
            _super.call(this, imageString);
            this.name = "fuel";
            //different speed of fuel can in different levels
            if (level == 1)
                this.dx = Math.floor(Math.random() * 5) + 7;
            if (level == 2)
                this.dx = Math.floor(Math.random() * 5) + 5.5;
            if (level == 3)
                this.dx = Math.floor(Math.random() * 5) + 4;
            this.reset();
        }
        //private flag: number = 0;
        // PRIVATE METHODS .........................
        Fuel.prototype.checkBounds = function () {
            // console.log(this.flag);
            // check if fuel has left screen
            if (this.x < 0) {
                this.reset();
            }
        };
        Fuel.prototype.reset = function () {
            this.y = 100 + Math.floor(Math.random() * 400); // start fuel at random location
            this.x = 580; // start fuel off stage
            /*different speed of fuel can in different levels
            if(level == 1)
                this.dx = Math.floor(Math.random() * 5) + 7;
            if (level == 2)
                this.dx = Math.floor(Math.random() * 5) + 5.5;
            if(level  == 3)
                this.dx = Math.floor(Math.random() * 5) + 4;*/
            this.dy = Math.floor(Math.random() * 4);
        };
        //destroy method for fuel
        Fuel.prototype._destroyFuel = function (fuel) {
            stage.removeChild(fuel);
        };
        // PUBLIC METHODS .....................
        Fuel.prototype.update = function () {
            this.x -= this.dx; // move fuel across the stage
            this.checkBounds();
        };
        return Fuel;
    })(objects.GameObject);
    objects.Fuel = Fuel;
})(objects || (objects = {}));
//# sourceMappingURL=fuel.js.map