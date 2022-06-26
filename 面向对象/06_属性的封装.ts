(function(){
  class person{
    /**
     * public 修饰的属性可以在任意位置访问(修改)----不写修饰符即默认public
     * protected 受保护的属性，只能在当前类和当前类的子类访问(修改)
     * private  私有属性 只能在类内部进行访问---****只能在类中访问
     *          - 通过类中添加方法，使得私有属性可以被外部访问(修改)
     */
    public _name:string;
    private _age:number;
    protected _color:string;
    // constructor(name:string,age:number,color:string){
    //   this._age = age
    // }
    setname(value:number){
      if(value>0){
        this._age = value;
      }
      console.log(this._age);
    }

    /**
     *  get 方法获取私有属性
     *      - 调用get方法 -------对象.方法名
     *  set 方法设置私有属性的值
     *      - 调用set方法 -------对象.方法名
     */
    set ages(value:number){
      if(value>0){
        this._age = value;
      }
      console.log(this._age);     
    }
  }

  const newperson = new person();
  newperson.ages = 20;
  console.log(newperson._name);
  class man extends person{
    name:string = 'tonm';
    say(){
      console.log(this._color);  
      
    }
  }
  console.log(man.name);
  const newman = new man()
  newman.say();
  
})()