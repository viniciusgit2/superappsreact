import React from "react";
export default class Contador extends React.Component{
    state={
numero:this.props.numeroinicial==0

    }
constructor(props){
    super(props)
    this.init=this.init.bind(this)
}
    init(){
this.setState({
numero:this.state.numero+1
}
)
    }
render(){
    return(<div>Contador<p>numero:{0}</p><p>valorinicial{this.props.numero}</p><h2>{this.state.numero}</h2><button onClick={this.init}>+</button></div>)
}
}