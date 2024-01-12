// imr
//import React from 'react'

// sfc
// const Register = () => {
//     return (  );
// }

// export default Register;


// imrc
import React, { Component } from 'react'

// cc - create class
// ccc - create class with constructor
class Home extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        count: 0
    }

    // setState() - update state object
    // note - state obj is read only obj
    increment = () => {
        // this.state.count=1 - invalid
        this.setState({ count: this.state.count + 1 });
    }
    decrement = () => {
        // this.state.count=1 - invalid
        this.setState({ count: this.state.count - 1 });
    }
    render() {
        return (
            <React.Fragment>
                <h1>Home component</h1>
                <div className="d-flex flex-row mb-3">
                    {/* <button className="btn btn-primary" onClick={this.decrement}>Decrement</button> */}
                    <i onClick={this.decrement} className="bi bi-dash-square-fill"></i>
                    <p className='mx-2'>{this.state.count}</p>
                    <i className="bi bi-plus-square" onClick={this.increment}></i>
                    {/* <button className="btn btn-outline-secondary" onClick={this.increment}>Increment</button> */}
                </div>

                <h1>{10 + 20}</h1>
            </React.Fragment>
        );
    }
}

export default Home;