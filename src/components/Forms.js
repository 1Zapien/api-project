import React, {Component} from'react';

/*form that takes input in location in order to get info from the apis*/
class Forms extends Component{
    render(){

        return (
            <form onSubmit={this.props.getData}>
                <h1 className="header">Find the perfect run!</h1>
                <input className="form-styling"  type="text" name="city" placeholder="City"/>
                <input className="form-styling" type="text" name="country" placeholder="Country"/>
                <button> GO!</button>
            </form>

        );
    }
};

export default Forms;