import React, { Component } from 'react';
import {Header3Dark, Body} from "./css/style"

class BrandSection extends Component {
    render() {
        const msg =this.props.message? <Body className=" conatiner-sm mx-5 align-self-end">{this.props.message}</Body> : " ";
        return (
            <div 
            className=" container-sm my-0">
                <div style={{maxWidth: '900px', overFlow: "hidden"}} className ="container p-2 framer mx-auto" >
                    <Header3Dark>{this.props.title}</Header3Dark>
                    {msg}
                </div>
            </div>
        );
    }
}

export default BrandSection;