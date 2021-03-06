import React from 'react'

class Clock extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            date: new Date()
        }
        this.tick = this.tick.bind(this)
    }

    componentDidMount(){
        this.timerId = setInterval (() => {
            this.tick()
        },1000)
    }

    componentWillUnmount() {
        clearInterval()
    }
    

    tick(){
        this.setState(() => {
            return {
                date: new Date()
            }
        })
    }
    
    render(){
        return <h1>{this.state.date.toLocaleTimeString()}</h1>
    }
}

export default Clock