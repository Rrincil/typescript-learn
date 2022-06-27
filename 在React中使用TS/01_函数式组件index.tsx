interface Props {
  name:string;
  age?:number;
}
// const Head: FunctionComponent<Props> = ({name,age}) => {
//   return (
//     <div>
//       {name}
//     </div>
//   )
// }

const Head = ({name,age=19}:Props) =>{
  const toshow = (e:React.MouseEvent<HTMLButtonElement>)=>{
    //访问该Dom对象
    console.log(e.cuuruntTarget.scroll);
  }
  const towrite = (e:React.ChangeEvent<HTMLInputElement>)=>{
    //访问该Dom对象
    console.log(e.target.value);
  }  
  return(
    <div>
      <p>{name}:{age}</p>
      <button onClick={toshow}></button>
      <input type="text" onchange={towrite}/>
      {/* //查看事件类型 */}
      <input type="text" onchange={e=>{}}/>
      
    </div>    
  )
}
Head.defaultProps = {
  age:19
}



export default Head;
//渲染Head组件 
<Head name='tom'/>