//1.����
let a:number;

//2.��������
let b:boolean;

//3.�ַ��� 
let tom:string;

//4.����Array<����>
let list:number[];//������������
let list2:Array<number>;//Array<>

//5.Ԫ�� Tuple
let d:[number,string];
let d2:[string,number];
d = [222,'tom'];
d2 = ['tom',222];
console.log(d2[0].substr(1)); // OK
// console.log(d[5].toString()); // OK, 'string' �� 'number' ���� toString

//6.enum ö��
enum Color {Red, Green, Blue}
let c: Color = Color.Green; 
enum Color2 {Red = 1, Green=2, Blue}
let colorName: string = Color2[2];
console.log(colorName);  // ��ʾ'Green'��Ϊ�������������ֵ��2

//7.Any����/unknow����--�൱�ڶ�TS�ر������ͼ��
let x: any = 4; //��ʾanyд��
let anyx; //��ʽanyд��
x = "tom";
x = false; // ���ղ�������
//unknow���Ͳ���ֱ�Ӹ�ֵ����������
let unknowx: unknown = 4; //unknowд��
unknowx = "tom";
unknowx = false; // unknow




//8.Void------void����������any�����෴������ʾû���κ����͡� ��һ������û�з���ֵʱ����ͨ��������䷵��ֵ������ void��
//����һ��void���͵ı���ֻ�ܸ���undefined��null��
let xx: void = undefined;
function shang(): void {
  console.log("tom");
}
//9.Null �� Undefined
let u: undefined = undefined;
let n: null = null;

//10.Never--------never���ͱ�ʾ������Щ�������ڵ�ֵ������;never�������κ����͵������ͣ�Ҳ���Ը�ֵ���κ�����
//û��������never�������ͻ���Ը�ֵ��never���ͣ�����never����֮�⣩�� ��ʹ anyҲ�����Ը�ֵ��never��
// ����never�ĺ�����������޷��ﵽ���յ�
function error(message: string): never {
  throw new Error(message);
}

// �ƶϵķ���ֵ����Ϊnever
function fail() {
  return error("Something failed");
}

// ����never�ĺ�����������޷��ﵽ���յ�
function infiniteLoop(): never {
  while (true) {
  }
}

//11.Object ��ʾ��ԭʼ����

declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error

//12.�����������Ƴ������ɱ�
let tom22 :'tom22';
let filename :'tom'|'jery'; //ֻ���ǣ�"tom"����"jery"


