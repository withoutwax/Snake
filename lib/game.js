(function() {
    window.Snake = window.Snake || {};

    let Game = window.Snake.Game = function (canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.gameOver = false;
        
        this.theme = new Snake.Theme();
        this.board = new Snake.Board(this.canvas, this.ctx, this.theme);
        this.snake = new Snake.SnakePlayer(this.theme, this.ctx);
        this.food = new Snake.Food(this.theme, this.ctx);
        this.poison = new Snake.Poison(this.theme, this.ctx);
        this.controller = new Snake.Controller(this.ctx, this.theme, this.board, this.snake);

        // TODO:
        // this.sound = new Snake.Sound();
    }

    Game.DIM_X = 800;
    Game.DIM_Y = 600;

    Game.prototype.start = function() {
        console.log("Let's begin the Snake 🐍 Game!");

        this.animate();
    }

    Game.prototype.animate = function() {
        window.requestAnimationFrame(Game.prototype.animate.bind(this));
        this.draw();
    }

    Game.prototype.draw = function() {
        this.ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
        this.board.draw(this.ctx);
        this.snake.draw(this.ctx); 
        this.food.draw(this.ctx);
        this.poison.draw(this.ctx);
         
        // this.snake.initialize(this.currentTheme);
        // this.board.text(this.ctx);
    }
})();