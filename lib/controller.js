(function() {
    let Controller = window.Snake.Controller = function(theme, currentTheme, board, snake) {
        this.currentTheme = currentTheme;
        this.theme = theme;
        this.board = board;
        this.snake = snake;
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
                    that.changeTheme();
                    break;
                case 50:
                    that.currentTheme = 1;
                    that.changeTheme();
                    break;
            }
        }
    }

    Controller.prototype.changeTheme = function () {
        console.log(this.theme);
        // this.theme.initialize(this.currentTheme);
        // let that = this;
        this.snake.updateTheme(this.currentTheme);
        // console.log(this.currentTheme);
        
    }
})();