//基础变量

//整个游戏场景 -> 广场 宽度的系数 高度的系数
var XLEN = 30;
var YLEN = 30;

//每个方格的宽度
var SQUAREWIDTH = 20;


//广场位置
var BASE_X_POINT = 200;
var BASE_Y_POINT = 100;


//蛇每走一次的时间间隔
var INTERVAL = 350;

//更新分数
var upDate = function () {
    score.innerText = game.score;
}


//定义方块基类
function Square (x, y, width, height, dom) {
    this.x = x || 0;
    this.y = y || 0;
    this.width = width || 0;
    this.height = height || 0;
    this.ViewContent = dom || null;
}

Square.prototype.touch = function () {console.log('touch')};

//其他子类

var Floor = jsUtil.extends(Square);
var Stone = jsUtil.extends(Square);
var Food = jsUtil.extends(Square);
var SnakeHead = jsUtil.extends(Square);
var SnakeBody = jsUtil.extends(Square);
var Snake = jsUtil.extends(Square);

var Game = jsUtil.single()

//TOUCH STRATEGY
var TOUCHENUM = {
    DIE: 'DIE',
    EAT: 'EAT',
    MOVE: 'MOVE'
}

