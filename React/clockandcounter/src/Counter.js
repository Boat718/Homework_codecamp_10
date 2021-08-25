import React from "react"

class Counter extends React.Component{
    //constructor (props) {
        // super(props)
        // this.state = {
        //     counter: 0
        // }

    //     this.addCounter = this.addCounter.bind(this)
    //     this.subCounter = this.subCounter.bind(this)
    //     this.resetCounter = this.resetCounter.bind(this)
    // }
    state = {
        counter: 0
    }
    
    // addCounter (){
    //     this.setState(function(state){
    //         return {
    //             counter : state.counter + 1
    //         }
    //     })
    // }
    addCounter = ()=>{
        this.setState((state) => ({
                counter : state.counter + 1
        }))
    }
    // subCounter (){
    //     this.setState(function(state){
    //         return {
    //             counter : state.counter - 1
    //         }
    //     })
    // }
    subCounter = ()=>{
        this.setState((state) => ({
                counter : state.counter - 1
        }))
    }
    // resetCounter(){
    //     this.setState(function(state){
    //         return {
    //             counter : 0
    //         }
    //     })
    // }
    resetCounter = ()=>{
        this.setState((state) => ({
                counter : 0
        }))
    }

    render() {
        return <div>
            <h1>{this.state.counter}</h1>
            <button onClick = {this.addCounter}> + </button>
            <button onClick = {this.subCounter}> - </button>
            <button onClick = {this.resetCounter}> reset </button>
        </div>
    }
}

export default Counter