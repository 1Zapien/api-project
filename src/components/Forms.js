import React, {Component} from'react';


class Forms extends Component{
    render(){

        return (
            <form onSubmit={this.props.getData}>
                <h1 className="header">Get the perfect run!</h1>
                <input type="text" name="city" placeholder="City"/>
                <input type="text" name="country" placeholder="Country"/>
                <button> GO!</button>
            </form>
        );
    }
};

export default Forms;