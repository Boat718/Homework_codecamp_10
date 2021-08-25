import React, { Component } from 'react'

export class Input extends Component {

    getClassName = ()=>{
        let cssClass = "Input InputElement";
        
        if(this.props.error.status && this.props.error.isTouched){
            cssClass += "  Invalid"
        }
        return cssClass
    }

    
    render() {
        return (
            <>
                <input
                    value={this.props.value} 
                    className={this.getClassName()}
                    name={this.props.name} 
                    placeholder={this.props.placeholder} 
                    onChange={this.props.onChangeInput} />
                
            </>
        )
    }
}

export default Input
