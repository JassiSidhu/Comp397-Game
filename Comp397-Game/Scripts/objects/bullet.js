var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Bullet Class
    var Bullet = (function (_super) {
        __extends(Bullet, _super);
        function Bullet() {
            _super.call(this, assets.loader.getResult("bullet"));
            this.init();
            this.name = "bullet";
            this.sound = "bullets";
            stage.addChild(this);
        }
        // PUBLIC METHODS
        Bullet.prototype.init = function () {
            this.x = boat.x;
            this.y = boat.y;
        };
        Bullet.prototype.update = function () {
            this.x += 10;
        };
        return Bullet;
    })(objects.GameObject);
    objects.Bullet = Bullet;
})(objects || (objects = {}));
//# sourceMappingURL=bullet.js.map