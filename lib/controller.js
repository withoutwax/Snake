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
                case 51:
                    that.currentTheme = 2;
                    that.changeTheme(that.currentTheme);
                    break;
                case 52:
                    that.currentTheme = 3;
                    that.changeTheme(that.currentTheme);
                    break;
                case 53:
                    that.currentTheme = 4;
                    that.changeTheme(that.currentTheme);
                    break;
            }
        }
    }

    Controller.prototype.changeTheme = function (currentTheme) {
        console.log('Board', this.board);
        console.log('Theme', this.theme);
        console.log('currentTheme', this.currentTheme, currentTheme);

        this.theme.currentTheme = currentTheme;

    }
})();