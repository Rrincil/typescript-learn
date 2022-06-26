(function(){
  /**
   * 1.ʹ��type����һ�����������
   * 2.���������������ö��������cosnt myObj:���� = {}
   *    ��ʱ���������ҽ��и������еĲ���--����name,age
   */
  type myType = {
    name:string;
    age:number;
  }
   const obj:myType = {
    name:'ss',
    age:20
  }

  /**
   * 1.interface ��������һ����ṹ����������һ������Ӧ�ð�����Щ���Ժͷ���
   * 2.�ӿڿ����ڶ������ʱ��������ṹ
   *      ��1���ӿ������е����Զ�������ʵ�ʵ�ֵ���ӿ�ֻ������Ľṹ��������ʵ��ֵ
   *      ��2���ӿ������з������ǳ��󷽷�
   * 3.�ӿ�Ҳ�ɵ�����������ȥʹ�ã�����type��
   *    ��1�����ͼ��������ȥ������Ե�˳��ֻҪ��Ӧ�����Դ��ڲ�������Ҳ�ǶԵľͿ���
   */
  interface myInterface{
    name:string;
    color:string;
  }
  const obj2:myInterface = {
    color:'ddd',
    name:'ss'
  }

  //����һ���ӿ�,���������Ժͳ��󷽷�
  interface myClassInterface{
    name:string;
    say():void
  }
  //����һ������ʵ�ֽӿ�
  class Dog implements myClassInterface {
    name:'С��';
    say(){
      console.log("������");
    }
  }





})()