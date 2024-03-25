import React from "react";

class Layout extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="text-center">
                <div className="bg-indigo-200 py-6 text-3xl">{this.props.header}</div>
                <div>{this.props.content}</div>
                <div className="bg-indigo-200 py-20 bottom-0 text-2xl fixed w-full">{this.props.footer}</div>
            </div>
        )
    }
}

export default Layout;