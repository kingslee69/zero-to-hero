import React, { Component } from 'react';
import { Header2Dark, Header3, BodyCenter, BodyStrike, BodyLight } from './css/style'
import Button from "./button"

class PaymentTile extends Component {
    render() {
        return (
            <div style={{ backgroundColor: "#1B2A4D"}} className="container-fluid p-5">
                <div style={{position: "relative", top: "30px"}}>
                    <Header3>Social media marketing is a highly-demanded skill in the job market!</Header3>
                    <BodyLight>With our amazing reviews and money back guarantee, what are you waiting for?</BodyLight>
                </div>
                    <div id="enroll" className=" bg-light tile-well mx-auto tile p-0 ">
                <a href="https://paystack.com/pay/zerotohero">
                        <div className="p-4">
                            <Header2Dark>Join the Webinar</Header2Dark>
                            <BodyCenter>Maximize the potential of social media</BodyCenter>
                            <Header2Dark><span style={{textDecoration: "line-through"}}>N</span>999</Header2Dark>
                            <BodyStrike>N10,000</BodyStrike>
                        </div>
                        <a href="https://paystack.com/pay/zerotohero" style={{position: "relative", bottom: "40px"}}>
                                <button id="cta" className="btn btn-sm d-flex mx-auto">
                                    Buy Now
                                </button>
                        </a>
                </a>
                    </div>
            </div>
        );
    }
}

export default PaymentTile;