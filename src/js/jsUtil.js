var jsUtil = {
    //参数基类构造函数  返回子类构造函数
    extends:function (parentFunc) {
        var result = function () {
            parentFunc.apply(this, arguments);
        }
        this.inherit(result, parentFunc);
        return result;
    },

    //继承函数
    inherit:function (target, origin) {
        var temp = function () {};
        temp.prototype = origin.prototype;
        target.prototype = new temp();
        target.constructor = target;
    },

    //参数基类构造函数  返回子类单例构造函数
    single:function (parentFunc) {
        var singleResult = (function () {
            var instance;
            return function () {
                if(typeof instance == 'object') {
                    return instance;
                }
                parentFunc && parentFunc.apply(this, arguments);
                instance = this;
            }
        })();
        parentFunc && this.inherit(singleResult, parentFunc);
        return singleResult;
    },

    //节流
    throttle: function (func, wait) {
        var lastTime = 0;
        return function () {
            var nowTime = new Date().getTime();
            if(nowTime - lastTime > wait) {
                func.apply(this, arguments);
                lastTime = nowTime;
            }
        }
    }
}

// function Square (x, y, width, height) {
//     this.x = x;
//     this.y = y;
//     this.width = width;
//     this.height = height;
//     this.viewContent = '<div></div>'
// }

// var food = jsUtil.single(Square);
// console.log(new food(10,20,100,200))