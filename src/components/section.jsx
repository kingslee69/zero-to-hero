import React, { Component } from 'react';
import {Header2, BodyList} from "./css/style"
import Button from "./button"

class Section extends Component {
    render() {
        const btn =this.props.btn? <Button title = {this.props.btn}/> : " ";
        return (
            <div style={{backgroundColor: '#F1F4F8'
            }} className=" container-sm pt-5 my-0">
                <div style={{maxWidth: '900px', overFlow: "hidden"}} className ="container p-2 framer mx-auto" >
                    <Header2>{this.props.title}</Header2>
                    <BodyList className=" conatiner-sm mx-5 align-self-end" >
                        {/* <ul > */}
                            {this.props.audience.map(item => <li key={item}>{item}</li>)}
                        {/* </ul> */}
                    </BodyList>
                    {btn}
                </div>
            </div>
        );
    }
}

export default Section;