import React, { Component } from 'react';

class Button extends Component {
    render() { 
        return ( 
            <button id="cta" className="btn btn-sm d-flex mt-3">
                {this.props.title}
              </button>
         );
    }
}
 
export default Button;