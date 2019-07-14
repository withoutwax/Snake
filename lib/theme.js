(function() {
    window.Snake = window.Snake || {};

    let Theme = window.Snake.Theme = function() {
        this.currentTheme = 0;
        this.theme01 = {
            background: 'rgb(43, 46, 50)',
            poison: 'rgb(87, 95, 104)',
            poisonStroke: 'rgba(255, 255, 255, 0)',
            snake: 'rgb(71, 255, 232)',
            snakeStroke: 'rgba(255, 255, 255, 0)',
            food: 'rgb(247, 127, 127)',
            foodStroke: 'rgb(255, 255, 255, 0)',
            poisonText: 'rgb(87, 95, 104)'
        };
        this.theme02 = {
            background: 'rgb(242, 242, 242)',
            poison: 'rgb(87, 95, 104)',
            poisonStroke: 'rgba(255, 255, 255, 0)',
            snake: 'rgb(242, 242, 242)',
            snakeStroke: 'rgba(0, 0, 0, 1)',
            food: 'rgb(247, 127, 127)',
            foodStroke: 'rgb(255, 255, 255, 0)',
            poisonText: 'rgb(87, 95, 104)'
        }
    }

    Theme.prototype.initialize = function() {
        switch (this.currentTheme) {
            case 0:
                return this.theme01;
            case 1:
                return this.theme02;
            default:
                return this.theme01;
        }
    }
})();