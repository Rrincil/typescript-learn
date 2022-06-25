class A{
  name:string;
  //static 静态属性，不需要创建对象就可以使用的属性
  static namex:string; 
  constructr(mes:string){
    this.name = mes
  }
  //类方法
  greet(){
    return 'heelo'+this.name;
  }
}
let newtom = new A("tom");
a.greet()