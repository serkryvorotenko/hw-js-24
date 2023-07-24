import React from "react";


export class Counter
    extends React.Component {
    constructor() {
        super()

        this.state = {
            counter1: 0,
        }

    }

    onButtonClick = () => {
        this.setState({
            counter: ++this.state.counter1,
        })
        this.props.getResult(this.props.value, this.state.counter1);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('update');
    }


    render() {
        return (
            <div>
                <p>{this.props.value} Value:{this.state.counter1}</p>


                <button onClick={this.onButtonClick}>Click</button>
            </div>
        )
    }
}