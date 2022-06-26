(function(){
  /**
   * Ts内置工具类，简化TS中一些常见的操作
   * 1.Partial<Type> 用来构建（创造）一个类型，将Type的所有属性设置为可选
   * 
   */
  interface Props{
    id:string;
    name:string;
    children:number[];
  }
  // 构造出来的新类型newType结构和Props相同，但是所有属性都变为可选的
  type newType = Partial<Props>
  const myobj:newType = {
    id:'ddd'
  }

  /**
   * 2.Readonly<Type> 只读类型，该类型创建的对象只可读取，不可写
   */
  type newType2 = Readonly<Props>
  const myobj2:newType2 = {
    id:'ddf',
    name:'fff',
    children:[2]
  }
  // myobj2.id = 'fff' 报错不可写，只可读取

  /**
   * 3.Pick<Type,keys> 选择属性，选择一组属性，来构造新类型;
   *  选择keys时用|分隔
   */
  type newType3 = Pick<Props,'id'|'name'>//只选择了id,则该类型只含有id
  const myobj3:newType3 ={
    id:'jjj',
    name:'ddd'
  }

  /**
   * 4.Record<keys,Type> keys是一组属性，Type为这一组的类型;
   *  定义keys时用|分隔
   */
  type newType4 = Record<'a'|'b'|'c',string[]>
  const myobj4:newType4 = {
    a: ['aa'],
    b: ['bb'],
    c: ['cc']
  }
})()