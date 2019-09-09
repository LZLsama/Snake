var Ground = jsUtil.single(Square);
var ground = new Ground(BASE_X_POINT, BASE_Y_POINT, XLEN * SQUAREWIDTH, YLEN * SQUAREWIDTH, document.createElement('div'));

ground.init = function () {
    this.ViewContent.style.position = 'absolute';
    this.ViewContent.style.backgroundColor = '#0ff';
    this.ViewContent.style.left = this.x + 'px';
    this.ViewContent.style.top = this.y + 'px';
    this.ViewContent.style.width = this.width + 'px';
    this.ViewContent.style.height = this.height + 'px';
    document.body.appendChild(this.ViewContent);
    this.SquareTable = [];
    for (var i = 0; i < YLEN; i ++) {
        this.SquareTable[i] = new Array(XLEN);
        for (var j = 0; j < XLEN; j++) {
            var newSquare = null;
            if (j == 0 || i == 0 || j == XLEN - 1 || i == YLEN - 1) {
                newSquare = SquareFactory.create('Stone', j, i, 'black');
            }
            else {
                newSquare = SquareFactory.create('Floor', j, i, 'orange');
            }
            this.SquareTable[i][j] = newSquare;
            this.ViewContent.appendChild(newSquare.ViewContent)
        }
    }
}

ground.remove = function (x, y) {
    this.ViewContent.removeChild(this.SquareTable[y][x].ViewContent);
    this.SquareTable[y][x] = null;
}

ground.append = function (x, y, square) {
    this.SquareTable[y][x] = square;
    this.ViewContent.appendChild(square.ViewContent)
}

