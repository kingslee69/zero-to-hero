import React, { Component } from 'react';
import mark from "../images/mark.png"
import {Card, BenefitText} from "./css/style"

class Benefit extends Component {
    render() { 
        return ( <Card className="row align-items-center">
            <div className="col-2 icon m-2">
                <img src={mark} className="" alt=""/>
            </div>
            <BenefitText className="col align-self-center pt-3">{this.props.title}</BenefitText>

        </Card> );
    }
}
 
export default Benefit;