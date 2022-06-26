(function(){
  /**
   * abstract 开头的类称为抽象类，
   *   1.抽象类不能，创建对象，只能被用来继承（生而为父，我很抱歉😂）
   *   2.抽象类可以添加抽象方法
   *        抽象方法使用abstract开头，没有方法体，子类拿来重写
   *        继承了该抽象类（含抽象方法）,必须重写方法
   */
  abstract class Animal{
    name:string;
    age:number;
    abstract say(voices:string):void
  }
  //抽象类只能拿来继承
  class Dog extends Animal {
    constructor(){
      super()
    }
    say(voice:string){
      console.log(voice);
    }
  }
})()