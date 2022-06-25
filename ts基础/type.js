/**
 * 1.����
 */
var a;
/**
 * 2.��������
 */
var b;
/**
 * 3.�ַ���
 */
var tom;
/**
 * 4.����Array<����>
 */
var list; //������������
var list2; //Array<>
/**
 * 5.Ԫ�� Tuple--�̶����ȵ�����[����]
 */
var d;
var d2;
d = [222, 'tom'];
d2 = ['tom', 222];
console.log(d2[0].substr(1)); // OK
// console.log(d[5].toString()); // OK, 'string' �� 'number' ���� toString
/**
 * 6.enum ö��
 */
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {})); //ö��������ɫ
var c = Color.Green;
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 3] = "Blue";
})(Color2 || (Color2 = {}));
var colorName = Color2[2];
console.log(colorName); // ��ʾ'Green'��Ϊ�������������ֵ��2
/**
 * 7.Any����/unknow����--�൱�ڶ�TS�ر������ͼ��
 */
var x = 4; //��ʾanyд��
var anyx; //��ʽanyд��
x = "tom";
x = false; // ���ղ�������
//unknow���Ͳ���ֱ�Ӹ�ֵ����������
var unknowx = 4; //unknowд��
unknowx = "tom";
unknowx = false; // unknow
/**
 * 8.Void------void����������any�����෴��
 * ����ʾû���κ����͡� ��һ������û�з���ֵʱ����ͨ��������䷵��ֵ������ void��
 */
//����һ��void���͵ı���ֻ�ܸ���undefined��null��
var xx = undefined;
function shang() {
    console.log("tom");
}
/**
 * 9.Null �� Undefined
 */
var u = undefined;
var n = null;
/**
 * Never--------never���ͱ�ʾ������Щ�������ڵ�ֵ������;
 * 10.never�������κ����͵������ͣ�Ҳ���Ը�ֵ���κ�����û��������never�������ͻ���Ը�ֵ��never���ͣ�����never����֮�⣩�� ��ʹ anyҲ�����Ը�ֵ��never�� ����never�ĺ�����������޷��ﵽ���յ�
 */
function error(message) {
    throw new Error(message);
}
// �ƶϵķ���ֵ����Ϊnever
function fail() {
    return error("Something failed");
}
// ����never�ĺ�����������޷��ﵽ���յ�
function infiniteLoop() {
    while (true) {
    }
}
create({ prop: 0 }); // OK
create(null); // OK
//����ָ�������п��԰�����Щ����
//�����Ժ����һ���ʺţ���ʾ�����ǿ�ѡ��**************
var abc;
var abc2;
abc = { laber: 'tom' }; //ֻ�ܼ�laber���ܼ�������
abc2 = { laber: 'tom' }; //laber2Ϊ��ѡ����
// [propname:string]:���� ��ʾ�ɶ���Ӹ����Ͳ���������Ϊany�����������͵Ĳ���*******
var abc3;
abc3 = { laber: 'xxx', laber2: 'jery', label3: 22 };
var abc4; //ֻ�ܼ�string���Ͳ���
abc4 = { laber: 'xxx', laber2: 'jery', label3: "22" };
// ���ú����ṹ������������object��
var abc5;
abc5 = function (x1, x2) {
    return x1 + x2;
};
/**
 * 12.�����������Ƴ������ɱ�
 */
var tom22;
var filename; //ֻ���ǣ�"tom"����"jery"
