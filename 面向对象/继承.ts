/**
 * (function(){------------立即执行函数，防止重名
 * })();
 */

(function(){
  class Animal{
    name:string;
    age:number;
    constructor(name:string,age:number){
      this.name = name;
      this.age = age;
    }
    bark(vioce:string){
      console.log(vioce);
    }
  }
  /**
   * 1.extends 使用继承之后，子类会有父类的全部属性和方法
   * 2.可以对方法重写，和新增方法与属性。
   */
  class Dog extends Animal{
    name:string;
    age:number;
    color:string;
    constructor(name:string,age:number,color:string){
      //super() 调用父类构造函数, 派生类的构造函数必须有super()的调用
      super(name,age);
      this.color =color;
    }
    // 重写方法
    bark(){
      console.log('汪汪');
    }
    // 新增方法
    run(bushu:number){
      console.log(`跑了${bushu}步`);
      
    }
  }
  let blackDog = new Dog('旺财',18,'red')
  console.log(blackDog);
  console.log(blackDog.name);
  blackDog.run(200);
  


})();