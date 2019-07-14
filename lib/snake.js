(function() {
    window.Snake = window.Snake || {};

    let SnakePlayer = window.Snake.SnakePlayer = function(theme, ctx) {
        this.length = 0;
        this.test = 0;
        this.theme = theme;
        this.ctx = ctx;
        
        this.themeSnake = '';
        this.themeSnakeStroke = '';
    }
    SnakePlayer.prototype.draw = function(ctx) {
        let theme = this.theme.initialize()

        ctx.fillStyle = theme.snake;
        ctx.strokeStyle = theme.snakeStroke;
        ctx.fillRect(20, 20, 20, 20);
        ctx.strokeRect(20, 20, 20, 20);
        ctx.stroke();
    }
})();