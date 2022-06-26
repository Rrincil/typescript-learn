(function(){
  /**
 * 当无法确定对象中含有哪些属性（对象中出现多个属性）就要用到索引签名类型
 * 1.[key:类型]只要是该类型的属性名称，都可以出现在对象中
 * 2.[key:类型] key只是一个占位符，可以换成任意合法的变量名
 * 3.**注意：JS中对象的({})的键是string类型
 */
interface newType{
  // 只要是string类型的属性名称都可以出现在对象中
  [k:string] :number
}
interface newType2<T>{
  [k:number] :T
}
const a:newType = {
  a:333,
  b:333,
  c:555
}
const newa:newType2<number> = [1,2,3]

})()