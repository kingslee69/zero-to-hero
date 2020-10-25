import React, { Component } from 'react';
import {Header3Dark, Body} from "./css/style"

class BrandSection extends Component {
    render() {
        return (
            <div 
            className=" container-sm my-0">
                <div style={{maxWidth: '900px', overFlow: "hidden"}} className ="container p-2 framer mx-auto" >
                    <Header3Dark>{this.props.title}</Header3Dark>
                        <Body >
                            {this.props.message}
                        </Body>
                </div>
            </div>
        );
    }
}

export default BrandSection;