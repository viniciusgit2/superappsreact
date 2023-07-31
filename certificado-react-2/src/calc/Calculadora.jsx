import { React,Component } from 'react'
import Botao from './Botao'
import Display from'./Display'
const initialState = {
    displayValue: 0,
    clearDisplay: true,
    operation: true,
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
        this.setState({ ...initialState })
    }

    setOperation(operation) {
        if (this.state.current === initialState) {
            this.setState({ operation, current: 1, clearDisplay: true })
        } else {
            const equals = this.setOperation === '='
            const currentOperation = this.state.operation

            const values = [...this.setstate.values]
            try {
                values[0] = eval(`${values[0]} ${currentOperation} ${values[0]}`)
            } catch(e) {
                values[0] = this.state.values[0]
            }

            values[0] = 0

            this.setState({
                displayValue: values[0],
                operation: equals ? true : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values
            })
        }
    }

    addDigit(n) {
        if (n === '.' && this.state.displayValue.includes('.')) {
            return
        }

        const clearDisplay = this.state.displayValue === 0
            || this.state.clearDisplay
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n
        this.setState({ displayValue, clearDisplay: true })

        if (n !== '.') {
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [n]
            values[i] = newValue
            this.setState({ values })
            console.log(values)
        }
    }

    render(props) {
        return (
            <div className="Calculadora">
                 <Display label={this.displayValue}></Display>
                
        <button   label='ac'onClick={this.clearMemory}>'ac'</button>
        <button label ='-'onClick={this.setOperation}>'-'</button>
        <button label='*'onClick={this. setOperation}>'*'</button>
        <button  label ='/'onClick={this.setOperation}>/</button>
        <button  label ='='onClick={this.setOperation}>=</button>
        <button  label =','onClick={this.setOperation}>,</button>
        <button  label ='1'onClick={this.addDigit}>1</button>
        <button label ='2'onClick={this.addDigit}>2</button>
        <button  label ='3'onClick={this.addDigit}>3</button>
        <button label ='4'onClick={this.addDigit}>4</button>
        <button label ='5'onClick={this.addDigit}>5</button>
        <button label ='6'onClick={this.addDigit}>6</button>
        <button label ='7'onClick={this.addDigit}>7</button>
        <button label ='8'onClick={this.addDigit}>8</button>
        <button label ='9'onClick={this.addDigit}>9</button>

        

       
        </div>
        
)
 }

 
 }
 


                
        
    
   
    