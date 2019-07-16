(function() {
    window.Snake = window.Snake || {};

    let Poison = window.Snake.Poison = function(theme, ctx) {
        this.theme = theme;
        this.ctx = ctx;
    }
    Poison.prototype.draw = function(ctx) {
        let theme = this.theme.initialize();

        ctx.fillStyle = theme.poison;
        ctx.strokeStyle = theme.poisonStroke;
        ctx.fillRect(80, 80, 20, 20);
        ctx.strokeRect(80, 80, 20, 20);
        ctx.stroke();
    }
})();