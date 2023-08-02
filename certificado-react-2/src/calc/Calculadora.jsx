import { React,Component } from 'react'
import Button from './Button'
import Display from'./Display'
const initialState = {
    //displayValue: '098765443223567890',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

export default class Calculadora extends Component {

    state = { ...initialState }

    constructor(props) {
        super(props)

        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }

    clearMemory() {
       console.log("limpo")
    }

    setOperation(operation) {

       console.log(operation)
       

           
         
    }
    addDigit(n) {
        console.log(n)
   
}
      
       
//const clearDisplay=this.state.displayValue ===`0`||this.state.clearDisplay
//const currentvalue= clearDisplay?``:this.state.displayValue
//const displayvalue=currentvalue+n
//this.setState({displayvalue,clearDisplay:false})

    render(props) {
        const addDigit=n=>this.addDigit(n)
        const setOperation=op=>this.setOperation(op)
        return (
            <div className="Calculadora">
                 <Display value={1000}></Display>
                
        <Button   label='ac'click={this.clearMemory}>'ac'</Button>
        <Button label ='-'click={this.setOperation}>'-'</Button>
        <Button label='*'click={this. setOperation}>'*'</Button>
        <Button  label ='/'click={this.setOperation}>/</Button>
        <Button  label ='='click={this.setOperation}>=</Button>
        <Button  label =','click={this.setOperation}>,</Button>
        <Button  label ='1'click={this.addDigit}>1</Button>
        <Button label ='2'click={this.addDigit}>2</Button>
        <Button label ='3'click={this.addDigit}>3</Button>
        <Button label ='4'click={this.addDigit}>4</Button>
        <Button label ='5'click={this.addDigit}>5</Button>
        <Button label ='6'click={this.addDigit}>6</Button>
        <Button label ='7'click={this.addDigit}>7</Button>
        <Button label ='8'click={this.addDigit}>8</Button>
        <Button label ='9'click={this.addDigit}>9</Button>

        

       
        </div>
        
)
 }

 
 }
 


                
        
    
   
    