import React, { Component } from 'react';
import { Header2Dark, Header3, BodyCenter, BodyStrike, BodyLight } from './css/style'

class PaymentTile extends Component {
    render() {
        return (
            <div   style={{ backgroundColor: "#1B2A4D"}} className="container-fluid p-5">
                <div style={{position: "relative", top: "20px"}}>
                    <Header3 id="enroll">Social media marketing is a highly-demanded skill in the job market!</Header3>
                    <BodyLight >With our amazing reviews and money back guarantee, what are you waiting for?</BodyLight>
                </div>
                <div  style={{marginBottom: "50px"}} className=" bg-light tile-well mx-auto tile p-0">
                    <a href="https://paystack.com/pay/zerotohero">
                        <div className="p-4">
                                <Header2Dark>Join the Webinar</Header2Dark>
                                <BodyCenter>Maximize the potential of social media</BodyCenter>
                                <Header2Dark><span style={{textDecoration: "line-through"}}>N</span>999</Header2Dark>
                                <BodyStrike>N10,000</BodyStrike>
                            </div>
                            <div style={{position: "relative", bottom: "50px"}}>
                            <p style={{ color: "#1B2A4D", fontSize: '12px', lineHeight: '15px', fontWeight: 400, marginBottom: 2,}} className='text-align-center'>Limited time at this price.</p>
                                    <button id="cta" className="btn btn-sm d-flex mx-auto mb-3">
                                        Buy Now
                                    </button>
                            <p style={{ fontSize: '12px', lineHeight: '15px', fontWeight: 700, color: "#e82a91"}} className='text-align-center mt-4 '>#endSARS</p>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}

export default PaymentTile;