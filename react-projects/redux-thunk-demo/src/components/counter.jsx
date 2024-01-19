// Class Component
import React, { Component } from "react";

class Counter extends Component {
    state = {
        count: 0,
        stepValue: 1,
    };

    increment = () => {
        //this.state.count=+1;
        // modify state value
        //this.setState({ count: this.state.count + 1 });

        this.setState({ count: this.state.count + parseInt(this.state.stepValue) });
    };

    decrement = () => {
        // decrement counter value by 1
        //this.setState({ count: this.state.count - 1 });
        if ((this.state.count - parseInt(this.state.stepValue)) >= 0)
            this.setState({ count: this.state.count - parseInt(this.state.stepValue) });
    };
    handleChange = (event) => {
        this.setState({ stepValue: event.target.value });
    };

    render() {
        return (
            <div className="w-75 mx-auto">
                <p className="fs-4 mt-3" data-testid="title">
                    Counter Component
                </p>
                <div>
                    <p>1. intial count value should be 0</p>
                    <p> 2. count value to be incremented as per the step value</p>
                    <p> 3. count value to be decreased as per the step value</p>
                    <p>4. count value shouldn't decrement beyond 0.</p>
                </div>
                <hr />
                <hr />
                <div className="d-flex">
                    <button className="btn btn-primary me-3" onClick={this.decrement}>
                        Decrement
                    </button>
                    <p className="fs-3" data-testid="counter">
                        {this.state.count}
                    </p>
                    <button
                        className="btn btn-secondary ms-3"
                        onClick={this.increment}
                        data-testid="increment"
                    >
                        Increment
                    </button>
                </div>
                <form >
                    <div className="mt-3">
                        <label className="form-label">
                            Enter step value
                            <input
                                id="standard-basic"
                                type="number"
                                value={this.state.stepValue}
                                onChange={this.handleChange}
                                className="form-control"
                                name="stepValue"
                            />
                        </label>
                    </div>
                </form>
            </div >
        );
    }
}

export default Counter;