import React, { Component } from 'react';
import {
    HeaderImage,
    Header1,
    Header3
  } from "./css/style";
import Button from "./button"
import scroll from "../images/down.png";

  import '../App.css'

class HeroBanner extends Component {
    render() { 
        return ( <HeaderImage >
            <div className="container framer" >

              <Header1 className="py">
                {this.props.title}
              </Header1>

              <Header3 className="py">
                {this.props.subTitle}
              </Header3>

              <Button title="Enroll Now"/>

              <div className=" icon mx-auto mt-5">
                <img src={scroll} alt="scroll icon" />
              </div>
              
            </div>
          </HeaderImage> );
    }
}
 
export default HeroBanner;