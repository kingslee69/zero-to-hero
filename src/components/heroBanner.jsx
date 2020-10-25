import React, { Component } from 'react';
import {
    HeaderImage,
    Header1,
    Header3
  } from "./css/style";
  import scroll from "../images/down.png";

  import '../App.css'

class HeroBanner extends Component {
    render() { 
        return ( <HeaderImage className="">
            <div className="container framer" >

              <Header1 className="py">
                {this.props.title}
              </Header1>

              <Header3 className="py">
                {this.props.subTitle}
              </Header3>

              <button id="cta" className="btn btn-sm d-flex mx-auto mt-3">
                Enroll Now
              </button>

              <div className=" icon mx-auto mt-5">
                <img src={scroll} alt="scroll icon" />
              </div>
              
            </div>
          </HeaderImage> );
    }
}
 
export default HeroBanner;