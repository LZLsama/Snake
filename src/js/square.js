function SquareFactory () {

}

SquareFactory.create = function (type ,x, y, color) {
    if (typeof SquareFactory.prototype[type] == undefined) {
        throw 'no this type';
    }
    if (SquareFactory.prototype[type].prototype.__proto__ !== SquareFactory.prototype) {
        SquareFactory.prototype[type].prototype = new SquareFactory();
    }
    var newSquare = SquareFactory.prototype[type](x, y, color);
    return newSquare;
}

SquareFactory.prototype.init = function (square, color, touchStrategy) {
    square.ViewContent.style.position = 'absolute';
    square.ViewContent.style.width = SQUAREWIDTH + 'px';
    square.ViewContent.style.height = SQUAREWIDTH + 'px';
    square.ViewContent.style.backgroundColor = color;
    square.ViewContent.style.left = square.x * SQUAREWIDTH + 'px';
    square.ViewContent.style.top = square.y * SQUAREWIDTH + 'px';
    square.touch = function () {
        return touchStrategy;   
    }
}

SquareFactory.prototype.Floor = function (x, y, color) {
    var floor = new Floor(x, y, SQUAREWIDTH, SQUAREWIDTH, document.createElement('div'));
    this.init(floor, color, TOUCHENUM.MOVE);
    return floor;
}

SquareFactory.prototype.Stone = function (x, y, color) {
    var stone = new Stone(x, y, SQUAREWIDTH, SQUAREWIDTH, document.createElement('div'));
    this.init(stone, color, TOUCHENUM.DIE);
    return stone;
}

SquareFactory.prototype.Food = function (x, y, color) {
    var food = new Food(x, y, SQUAREWIDTH, SQUAREWIDTH, document.createElement('div'));
    this.init(food, color, TOUCHENUM.EAT);
    return food;
}

SquareFactory.prototype.SnakeHead = function (x, y, color) {
    var snakehead = new SnakeHead(x, y, SQUAREWIDTH, SQUAREWIDTH, document.createElement('div'));
    this.init(snakehead, color, TOUCHENUM.DIE);
    return snakehead;
}

SquareFactory.prototype.SnakeBody = function (x, y, color) {
    var snakebody = new SnakeBody(x, y, SQUAREWIDTH, SQUAREWIDTH, document.createElement('div'));
    this.init(snakebody, color,TOUCHENUM.DIE);
    return snakebody;
}

// console.log(SquareFactory.create('Floor', 0 , 0,'black'))