(function() {
    let Controller = window.Snake.Controller = function(ctx, theme, board, snake) {
        this.ctx = ctx;
        this.theme = theme;
        this.board = board;
        this.snake = snake;
        this.currentTheme = 0;
        this.listen();
    }

    Controller.prototype.listen = function() {
        let that = this;

        document.onkeydown = function(event) {
            console.log(event.keyCode);
            // console.log("customTheme", customTheme);
            switch(event.keyCode) {
                case 49:
                    that.currentTheme = 0;
                    that.changeTheme(that.currentTheme);
                    break;
                case 50:
                    that.currentTheme = 1;
                    that.changeTheme(that.currentTheme);
                    break;
            }
        }
    }

    Controller.prototype.changeTheme = function (currentTheme) {
        console.log('Board', this.board);
        console.log('Theme', this.theme);
        console.log('currentTheme', this.currentTheme, currentTheme);
        // this.theme.initialize(this.currentTheme);
        // let that = this;
        // this.snake.updateTheme(this.currentTheme);
        // this.board.test += 1;
        // console.log(this.currentTheme);
        // this.board.text(this.ctx);
        // this.board.draw(this.ctx, currentTheme);
        this.theme.currentTheme = currentTheme;

    }
})();