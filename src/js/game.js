var game = new Game();
game.timer = null;
game.score = 0;
game.init = function () {
    ground.init();
    snake.init(ground);
    food.init(ground)
    game.score = 0;
    score.innerText = 0
}

game.start = function () {
    game.timer = setInterval(function () {
        snake.move(ground);
    }, INTERVAL);
    var newDirection = function (e) {
        if (e.which == 37 && snake.direction != DIRECTIONENUM.RIGHT) {
            snake.direction = DIRECTIONENUM.LEFT;
        }else if (e.which == 38 && snake.direction != DIRECTIONENUM.DOWN) {
            snake.direction = DIRECTIONENUM.UP;
        }else if (e.which == 39 && snake.direction != DIRECTIONENUM.LEFT) {
            snake.direction = DIRECTIONENUM.RIGHT;
        }else if (e.which == 40 && snake.direction != DIRECTIONENUM.UP) {
            snake.direction = DIRECTIONENUM.DOWN;
        }
    }
    document.onkeydown = jsUtil.throttle (newDirection, 300);
}
game.over = function () {
    alert('最终得分为' + game.score)
    game.init();
    clearInterval(game.timer)
}
game.init();