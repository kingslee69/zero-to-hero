import React, { Component } from 'react';
import { Header2Dark, Header3, BodyCenter, BodyStrike, BodyLight } from './css/style'

class PaymentTile extends Component {
    render() {
        return (
            <div   style={{ backgroundColor: "#1B2A4D"}} className="container-fluid p-5">
                <div style={{position: "relative", top: "20px"}}>
                    <Header3 id="enroll">Take that step in the right direction to expand your business and get more sales.</Header3>
                    <BodyLight >With our amazing reviews and free registration, what are you waiting for?</BodyLight>
                </div>
                <div  style={{marginBottom: "50px"}} className=" bg-light tile-well mx-auto tile p-0">
                    <a href="https://t.me/joinchat/UN4MWhrVY_CUngm8YiPAbg">
                        <div className="p-4">
                                <Header2Dark>Join the Webinar</Header2Dark>
                                <BodyCenter>Create Productive Designs</BodyCenter>
                                <Header2Dark>FREE</Header2Dark>
                                <BodyStrike>N10,000</BodyStrike>
                            </div>
                            <div style={{position: "relative", bottom: "75px"}}>
                            <p style={{ color: "#1B2A4D", fontSize: '12px', lineHeight: '20px', fontWeight: 400, paddingTop: 4,}} className='text-align-center'>Limited time at this price.</p>
                                    <button id="cta" className="btn btn-sm d-flex mx-auto mb-3 pay ">
                                        Enroll Now
                                    </button>
                            <p style={{ fontSize: '10px', lineHeight: '15px', fontWeight: 700, color: "#008751"}} className='text-align-center m-2 p-1'>#end<span className="text-light">SARS</span></p>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}

export default PaymentTile;