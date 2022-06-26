(function(){
  function fn<T>(name:T):T{
    return name;
  }
  fn(22)//不指定泛型---ts会检测出
  fn<string>('tom')//指定泛型
  
  //可以定义多个泛型
  function fn2<T,K>(a:T,b:K):K{ 
    console.log(b);
    return b //返回K类型
  }

  //接口中使用泛型********
  interface myinter{
    age:number;
  }
  //泛型K必须是myinter的实现类
  function fn3<T extends myinter>(a:T):T{
    return a;
  }
  fn3({age:666});//必须含有age属性




  //在类中使用泛型----泛型类
  class A<k>{
    constructor(public name:k){
    }
  }  
  const newA = new A('tom')//不指定泛型
  const newA2 = new A<number>(22)//指定泛型


})()