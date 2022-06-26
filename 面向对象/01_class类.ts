class A {
  /**
   * 直接定义的属性是实例属性，通过对象的实例去访问
   *   let newtom = new A();
   *   newtom.name
   */
  name: string = 'tom';

  /**
   * static 静态属性，不需要创建对象就可以使用的属性,通过类调用
   * A.namex
   */
  static namex: string = 'tom2';

  /**
   * readonly 只读属性 只能读取不能改变
   */
  readonly namey: string = 'tom3';
  constructr(mes: string) {
    this.name = mes
  }

  /**
   *  类方法
   */
  greet() {
    return 'heelo' + this.name;
  }
  /**
   *  static 静态方法方法
   */
  static greet2() {
    return 'heelo' + this.name;
  }
}
let newtom = new A();
console.log(newtom.name);
newtom.greet()
console.log(A.namex); //static属性通过类调用
