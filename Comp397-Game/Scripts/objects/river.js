/// <reference path="../managers/assets.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // River Class .......................
    var River = (function (_super) {
        __extends(River, _super);
        // CONSTRUCTOR.........................
        function River(imageString, riverType) {
            _super.call(this, imageString);
            this.name = "river";
            this.sound = "power";
            if (riverType == "up") {
                this.x = 130;
                this.y = 50;
            }
            if (riverType == "down") {
                this.x = 330;
                this.y = 430;
            }
        }
        return River;
    })(objects.GameObject);
    objects.River = River;
})(objects || (objects = {}));
//# sourceMappingURL=river.js.map