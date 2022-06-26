(function(){
  /**
   * 基于旧类型，创建新类型（对象型），减少重复提升开发率
   * 1.映射类型只能在类型别名type中使用，不能在接口中使用
   * 2.keyof映射联合类型，获取其他类型的key；[key in keyof newType]:类型
   */
  type typeKeys = 'a'|'b'|'c';
  type props = {a:number,b:number,c:number} //重复率高
  // 做映射
  type props2 = {[key in typeKeys]:number}
  const myobj:props2 = {
    a:22,
    b:33,
    c:44
  }

  //2.keyof映射联合类型，获取其他类型的key；[key in keyof newType]:类型
  type newType = {
    a:number,
    b:string,
    c:[]
  }
  type newType2 = {[key in keyof newType]:number}//  type newType2 = {a:number,b:number,c:number}

})()