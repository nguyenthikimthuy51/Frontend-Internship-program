import React, { Component } from 'react';

class Lifecycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Tuan"
        };
        console.log("Initialization");
    }

    componentWillMount() {
        console.log("componentWillMount");
    }

    componentDidMount() {
        console.log("componentDidMount");
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate: " + nextState.name);
        return true;
    }
    
    componentWillUpdate(nextProps, nextState) {
        console.log("componentWillUpdate: " + nextState.name);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate: " + prevState.name);
    }
    componentWillUnmount() {
        console.log("componentWillUnmount")
        }
    
    render() {
        console.log("render");
        return (
            <div>
                <div>{this.state.name}</div>
                <button className='px-5 py-2 rounded-full bg-blue-500' onClick={() => {this.setState({name:"Nam"});}}>Click me</button>
            </div>
        );
    }
}

export default Lifecycle;

