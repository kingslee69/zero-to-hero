import React, { Component } from 'react';
import Benefit from "./benefit"
class BenefitsCard extends Component {
    
    render() { 
    console.log(this.props.benefits)

    return ( 
    <div>
        {this.props.benefits.map(benefit => <Benefit title={benefit} key={benefit}/>)}
    </div> 
    );}
}
 
export default BenefitsCard;