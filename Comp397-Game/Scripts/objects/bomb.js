var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Bullet Class
    var Bomb = (function (_super) {
        __extends(Bomb, _super);
        function Bomb() {
            _super.call(this, assets.loader.getResult("bomb"));
            this.init();
            this.name = "bomb";
            stage.addChild(this);
        }
        // PUBLIC METHODS
        Bomb.prototype.init = function () {
            this.x = level3Enemy.x;
            this.y = level3Enemy.y;
        };
        Bomb.prototype.update = function () {
            this.x -= 10;
        };
        return Bomb;
    })(objects.GameObject);
    objects.Bomb = Bomb;
})(objects || (objects = {}));
//# sourceMappingURL=bomb.js.map