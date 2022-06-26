var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function () {
    var person = /** @class */ (function () {
        function person() {
        }
        // constructor(name:string,age:number,color:string){
        //   this._age = age
        // }
        person.prototype.setname = function (value) {
            if (value > 0) {
                this._age = value;
            }
            console.log(this._age);
        };
        Object.defineProperty(person.prototype, "ages", {
            /**
             *  get 方法获取私有属性
             *      - 调用get方法 -------对象.方法名
             *  set 方法设置私有属性的值
             *      - 调用set方法 -------对象.方法名
             */
            set: function (value) {
                if (value > 0) {
                    this._age = value;
                }
                console.log(this._age);
            },
            enumerable: false,
            configurable: true
        });
        return person;
    }());
    var newperson = new person();
    newperson.ages = 20;
    console.log(newperson._name);
    var man = /** @class */ (function (_super) {
        __extends(man, _super);
        function man() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.name = 'tonm';
            return _this;
        }
        man.prototype.say = function () {
            console.log(this._color);
        };
        return man;
    }(person));
    console.log(man.name);
    var newman = new man();
    console.log(newman.say());
})();
