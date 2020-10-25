import React, { Component } from 'react';
import {Header2, BodyList} from "./css/style"

class Section extends Component {
    render() {
        const btn =this.props.btn? <button id="cta" className="btn btn-sm d-flex mx-auto my-4">
                 {this.props.btn}
            </button> : " ";
        return (
            <div style={{backgroundColor: '#F1F4F8'
            }} className=" container-sm pt-5 my-0">
                <div style={{maxWidth: '900px', overFlow: "hidden"}} className ="container p-2 framer mx-auto" >
                    <Header2>{this.props.title}</Header2>
                    <BodyList >
                        <ul className=" conatiner-sm mx-5 align-self-end">
                            {this.props.audience.map(item => <li key={item}>{item}</li>)}
                        </ul>
                    </BodyList>
                    {btn}
                </div>
            </div>
        );
    }
}

export default Section;