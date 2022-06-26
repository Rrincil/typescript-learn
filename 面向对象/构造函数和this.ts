(function(){
  class Dog{
    name:string;
    color:string;
    /**
     * 构造函数会在创建对象时调用
     * 在实例方法中this，this表示当前实例
     */
    constructor(name:string,color:string){
      this.name = name;
      this.color = color;
    }
    bark(voice:string){
      console.log(voice);
    }
  }
  
  let newblackDog = new Dog('小黑','黑色');
  console.log(newblackDog);
  newblackDog.bark('汪汪');
})();

