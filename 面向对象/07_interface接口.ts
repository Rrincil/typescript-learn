(function(){
  /**
   * 1.使用type描述一个对象的类型
   * 2.创建对象并且申明该对象的类型cosnt myObj:类型 = {}
   *    此时对象中有且仅有该类型中的参数--仅有name,age
   */
  type myType = {
    name:string;
    age:number;
  }
   const obj:myType = {
    name:'ss',
    age:20
  }

  /**
   * 1.interface 用来定义一个类结构，用来定义一个类中应该包含那些属性和方法
   * 2.接口可以在定义类的时候限制类结构
   *      （1）接口中所有的属性都不能有实际的值，接口只定义类的结构，不考虑实际值
   *      （2）接口中所有方法都是抽象方法
   * 3.接口也可当做类型申明去使用（类似type）
   *    （1）类型检查器不会去检查属性的顺序，只要相应的属性存在并且类型也是对的就可以
   */
  interface myInterface{
    name:string;
    color:string;
  }
  const obj2:myInterface = {
    color:'ddd',
    name:'ss'
  }

  //定义一个接口,定义类属性和抽象方法
  interface myClassInterface{
    name:string;
    say():void
  }
  //定义一个类来实现接口
  class Dog implements myClassInterface {
    name:'小黑';
    say(){
      console.log("汪汪汪");
    }
  }





})()