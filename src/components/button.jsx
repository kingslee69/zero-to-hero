import React, { Component } from 'react';

class Button extends Component {
    render() { 
        return ( 
            <a href="#enroll"><button id="cta" className="btn btn-warning btn-sm d-flex mx-auto my-4">
                 {this.props.title}
            </button></a>
         );
    }
}
 
export default Button;