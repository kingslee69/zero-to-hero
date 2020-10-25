import React, { Component } from 'react';

class Button extends Component {
    render() { 
        return ( 
            <a href="#enroll"><button id="cta" className="btn btn-sm d-flex mt-3">
               {this.props.title}
              </button> </a>
         );
    }
}
 
export default Button;