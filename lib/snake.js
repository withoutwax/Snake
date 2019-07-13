(function() {
    window.Snake = window.Snake || {};

    let SnakePlayer = window.Snake.SnakePlayer = function(theme, ctx) {
        this.length = 0;
        this.test = 0;
        this.themeSetting = theme;
        this.ctx = ctx;
        
        this.themeSnake = '';
        this.themeSnakeStroke = '';
    }
    SnakePlayer.prototype.initialize = function(currentTheme) {
        let theme = this.themeSetting.initialize(currentTheme)
        let ctx = this.ctx;

        ctx.fillStyle = theme.snake;
        ctx.strokeStyle = theme.snakeStroke;
        ctx.fillRect(20, 20, 20, 20);
        ctx.strokeRect(20, 20, 20, 20);
        ctx.stroke();
    }

    SnakePlayer.prototype.updateTheme = function(currentTheme) {
        let theme = this.themeSetting.initialize(currentTheme)
        let ctx = this.ctx;

        ctx.fillStyle = theme.snake;
        ctx.strokeStyle = theme.snakeStroke;
        ctx.fillRect(20, 20, 20, 20);
        ctx.strokeRect(20, 20, 20, 20);
        ctx.stroke();
    }
})();