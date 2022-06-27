import React, { Component } from 'react'
type Props = {
  name:string;
  age?:number
}
type State = {
  count:number
}
export default class Hello extends Component<Props, State> {
  state:State = {
    count:0
  }
  add = ()=>{ 
    const newcount = count++
    this.setState({count:newcount})
  }
  // static defaultProps:Partial<Props> = {
  //   name:'tom'
  // }
  render() {
    const {name='tom'} = this.props
    return (
      <div>
      {name}
      <p>{this.state.count}</p>
      <button onClick={toadd}></button>
      </div>
      )
  }
}
