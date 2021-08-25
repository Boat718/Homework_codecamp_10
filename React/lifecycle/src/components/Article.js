import React, { Component } from 'react'

export class Article extends Component {
    static getDerivedStateFromProps(pros,state){
        console.log("[Artical.js] getDerivedStateFromProps")
        return state;
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("[Artical.js] shouldComponentUpdate")
        return true;
    }

    getSnapshotBeforeUpdate (prevProps, prevState){
        console.log("[Artical.js] getSnapshotBeforeUpdate")
        return { x:0, y: 0}
    }

    componentDidUpdate (prevProps, prevState, snapshot){
        console.log("[Artical.js] componentDidUpdate",snapshot)
    }

    render() {
        console.log("[Artical.js] Render")
        return (
            <p>
                {this.props.article}
            </p>
        )
    }
}

export default Article
