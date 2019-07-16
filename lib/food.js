(function() {
    window.Snake = window.Snake || {};

    let Food = window.Snake.Food = function(theme, ctx) {
        this.theme = theme;
        this.ctx = ctx;
    }
    Food.prototype.draw = function(ctx) {
        let theme = this.theme.initialize();

        ctx.fillStyle = theme.food;
        ctx.strokeStyle = theme.foodStroke;
        ctx.fillRect(60, 60, 20, 20);
        ctx.strokeRect(60, 60, 20, 20);
        ctx.stroke();
    }
})();