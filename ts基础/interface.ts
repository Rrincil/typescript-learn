interface a{
  label:string;
}
function setlabel(label:a){
  console.log(label);
}
//���ͼ��������ȥ������Ե�˳��ֻҪ��Ӧ�����Դ��ڲ�������Ҳ�ǶԵľͿ���
let myobj = {size:20,label:'tom'};
setlabel(myobj);