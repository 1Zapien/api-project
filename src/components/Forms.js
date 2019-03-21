import React, {Component} from'react';


class Forms extends Component{
    render(){
        return (
            <form onSubmit={this.props.getData}>
                <input type="text" name="city" placeholder="city.."/>
                <input type="text" name="country" placeholder="country.."/>
                <button>Location Data </button>
            </form>
        );
    }
};

export default Forms;