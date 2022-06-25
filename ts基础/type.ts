/**
 * 1.数字
 */
let a:number;

/**
 * 2.布尔类型
 */
let b:boolean;

/**
 * 3.字符串
 */ 
let tom:string;

/**
 * 4.数组Array<类型>
 */
let list:number[];//数组数字类型
let list2:Array<number>;//Array<>

/**
 * 5.元组 Tuple--固定长度的数组[类型]
 */
let d:[number,string];
let d2:[string,number];
d = [222,'tom'];
d2 = ['tom',222];
console.log(d2[0].substr(1)); // OK
// console.log(d[5].toString()); // OK, 'string' 和 'number' 都有 toString

/**
 * 6.enum 枚举
 */
enum Color {Red, Green, Blue}//枚举三种颜色
let c: Color = Color.Green; 
enum Color2 {Red = 1, Green=2, Blue}
let colorName: string = Color2[2];
console.log(colorName);  // 显示'Green'因为上面代码里它的值是2

/**
 * 7.Any类型/unknow类型--相当于对TS关闭了类型检测
 */
let x: any = 4; //显示any写法
let anyx; //隐式any写法
x = "tom";
x = false; // 最终布尔类型
//unknow类型不能直接赋值给其他变量
let unknowx: unknown = 4; //unknow写法
unknowx = "tom";
unknowx = false; // unknow

/**
 * 8.Void------void类型像是与any类型相反，
 * 它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void：
 */

//声明一个void类型的变量只能赋予undefined和null：
let xx: void = undefined;
function shang(): void {
  console.log("tom");
}
/**
 * 9.Null 和 Undefined
 */
let u: undefined = undefined;
let n: null = null;

/**
 * Never--------never类型表示的是那些永不存在的值的类型;
 * 10.never类型是任何类型的子类型，也可以赋值给任何类型没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never。 返回never的函数必须存在无法达到的终点
 */

function error(message: string): never {
  throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
  return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
  while (true) {
  }
}

/**
 * 11.Object 表示非原始类型
 * 
 */

declare function create(o: object | null): void;
create({ prop: 0 }); // OK
create(null); // OK
//用来指定对象中可以包含哪些属性
//在属性后面加一个问号？表示属性是可选的**************
let abc:{laber:string};
let abc2:{laber:string,laber2?:number};
abc = {laber:'tom'} //只能加laber不能加其他的
abc2 = {laber:'tom'} //laber2为可选参数

// [propname:string]:类型 表示可额外加该类型参数，类型为any则是所有类型的参数*******
let abc3:{laber:string,[propname:string]:any};
abc3 = {laber:'xxx',laber2:'jery',label3:22};
let abc4:{laber:string,[propname:string]:string};//只能加string类型参数
abc4 = {laber:'xxx',laber2:'jery',label3:"22"};
// 设置函数结构的类型申明（object）
let abc5 : (x:string,y:string)=>string;
abc5 = function(x1,x2){
  return x1+x2;
}


/**
 * 12.字面量，类似常量不可变
 */
let tom22 :'tom22';
let filename :'tom'|'jery'; //只能是；"tom"或者"jery"


