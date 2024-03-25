import React from 'react';
class ExampleLifecycle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date()
        }
    }
    componentDidMount() {
        this.setTimeRef = setInterval(() => this.setTime(), 1000);
        console.log("componentDidMount")
    }
    componentWillUnmount() {
        clearInterval(this.setTimeRef)
        console.log("componentWillUnmount")
    }
    setTime() {
        this.setState((state, props) => {
            console.log(state.date);

            return {
                date: new Date()
            }
        })
        console.log("setTime")
    }
    render() {
        return (
            <div><p>The current time is {this.state.date.toString()}</p></div>
        );
    }
}
export default ExampleLifecycle;