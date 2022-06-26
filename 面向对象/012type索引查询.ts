(function(){
  /**
   * 1.查询方式typenames[属性名]
   * 2.同时查询多个索引类型 typenames[属性名1|属性名2];或者使用keyof----myType[keyof myType] 
   */
  type  myType = {
    a:string,
    b:number,
    c:boolean
  }
  type types = myType['a'] //type types = string

  // 2.同时查询多个索引类型 
  type types2 = myType['a'|'b'] //type types = string|number
  type types3 = myType[keyof myType] //type types = string|number|boolean


})()