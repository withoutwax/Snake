(function() {
    window.Snake = window.Snake || {};

    let Game = window.Snake.Game = function (canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.gameOver = false;
        this.currentTheme = 0;
        this.theme = new Snake.Theme();
        this.board = new Snake.Board(this.canvas, this.ctx);
        this.snake = new Snake.SnakePlayer(this.theme, this.ctx);
        this.controller = new Snake.Controller(this.theme, this.currentTheme, this.board, this.snake);

        // TODO:
        // this.keyInput = new Snake.KeyInput();
        // this.sound = new Snake.Sound();
    }

    Game.prototype.start = function() {
        console.log("Let's begin the Snake 🐍 Game!");

        this.draw();
    }

    Game.prototype.draw = function() {
        let board = this.board;
        let snake = this.snake;

        board.draw(this.ctx, this.theme, this.currentTheme);
        snake.initialize(this.currentTheme);
        
    }
})();