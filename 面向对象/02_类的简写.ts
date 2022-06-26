(function(){
  class A{
    name:string;
    age:number;
    constructor(name:string,age:number){
      this.name = name;
      this.age = age;
    }
  }
  // 类的简写:在构造器中定义参数的时候加属性（public private protect）
  class A2{
    constructor(public name:string,public age:number){

    }
  }
  const newA = new A('tom',17);
  const newA2 = new A2('tom',19);
})()