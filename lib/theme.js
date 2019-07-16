(function() {
    window.Snake = window.Snake || {};

    let Theme = window.Snake.Theme = function() {
        this.currentTheme = 0;

        // THEME #1 - SCI-FI
        this.theme01 = { 
            background: 'rgb(43, 46, 50)',
            poison: 'rgb(87, 95, 104)',
            poisonStroke: 'rgba(255, 255, 255, 0)',
            snake: 'rgb(71, 255, 232)',
            snakeStroke: 'rgba(255, 255, 255, 0)',
            food: 'rgb(247, 127, 127)',
            foodStroke: 'rgba(255, 255, 255, 0)',
            poisonText: 'rgb(87, 95, 104)'
        };

        // THEME #2 - SIMPLE
        this.theme02 = {
            background: 'rgb(242, 242, 242)',
            poison: 'rgb(87, 95, 104)',
            poisonStroke: 'rgba(255, 255, 255, 0)',
            snake: 'rgb(242, 242, 242)',
            snakeStroke: 'rgba(0, 0, 0, 1)',
            food: 'rgb(247, 127, 127)',
            foodStroke: 'rgba(255, 255, 255, 0)',
            poisonText: 'rgb(87, 95, 104)'
        }

        // THEME #3 - B/W
        this.theme03 = {
            background: 'rgb(242, 242, 242)',
            poison: 'rgb(26, 26, 26)',
            poisonStroke: 'rgba(87, 95, 104, 255)',
            snake: 'rgb(77, 77, 77)',
            snakeStroke: 'rgba(255, 255, 255, 0)',    
            food: 'rgb(255, 255, 255)',  
            foodStroke: 'rgba(0, 0, 0, 255)',
            poisonText: 'rgb(87, 95, 104)'
        }

        // THEME #3 - B/W
        this.theme04 = {
            background: 'rgb(216, 233, 245)',
            poison: 'rgb(36, 58, 134)',
            poisonStroke: 'rgba(255, 255, 255, 0)',
            snake: 'rgb(255, 255, 255)',
            snakeStroke: 'rgba(40, 45, 132, 255)',
            food: 'rgb(190, 23, 78)',
            foodStroke: 'rgba(255, 255, 255, 0)',
            poisonText: 'rgb(36, 58, 134)'
        }

        // THEME #5 - GREEN ROBOT
        this.theme05 = {
            background: 'rgb(159, 220, 210)',
            poison: 'rgb(247, 127, 127)',
            poisonStroke: 'rgba(255, 255, 255, 0)',
            snake: 'rgb(255, 237, 164)',
            snakeStroke: 'rgba(255, 255, 255, 0)',
            food: 'rgb(56, 182, 192)',
            foodStroke: 'rgba(255, 255, 255, 0)',
            poisonText: 'rgb(247, 127, 127)'
        }
    }

    Theme.prototype.initialize = function() {
        switch (this.currentTheme) {
            case 0:
                return this.theme01;
            case 1:
                return this.theme02;
            case 2:
                return this.theme03;
            case 3:
                return this.theme04;
            case 4:
                return this.theme05;
            default:
                return this.theme01;
        }
    }
})();