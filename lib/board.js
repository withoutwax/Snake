(function() {
    window.Snake = window.Snake || {};

    let Board = window.Snake.Board = function(canvas, ctx, theme) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.theme = theme;
        this.test = 0;  
    }

    Board.prototype.draw = function(ctx) {
        let theme = this.theme.initialize()
        ctx.fillStyle = theme.background;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    Board.prototype.text = function(ctx) {
        ctx.clearRect(0, 0, 800, 600);
        ctx.font = "20px Georgia";
        ctx.fillText(this.test, 10, 50);
    }
})();