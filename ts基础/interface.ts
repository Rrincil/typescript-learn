interface a{
  label:string;
}
function setlabel(label:a){
  console.log(label);
}
//类型检查器不会去检查属性的顺序，只要相应的属性存在并且类型也是对的就可以
let myobj = {size:20,label:'tom'};
setlabel(myobj);