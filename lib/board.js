(function() {
    window.Snake = window.Snake || {};

    let Board = window.Snake.Board = function(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
    }

    Board.prototype.draw = function(ctx, themeObject, currentTheme) {
        let theme = themeObject.initialize(currentTheme)

        ctx.fillStyle = theme.background;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

    }
})();