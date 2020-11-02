import React, { Component} from 'react';
import {Header2, Body} from './css/style'
import BenefitsCard from './benefitsCard';

class AboutSection extends Component {
    render() { 
        return ( 
            <div style={{ overflowX: 'hidden'}} className="container-fluid">
                <div className="row ">
                    <div className="container-sm col-12 col-xl-8 m-2 mb-5 px-md-5">
                        <Header2>About</Header2>
                        <Body>
                        {'There are only very few things in this world that are better than a FREE online webinar. This is why you must not miss the ZerotoHero FREE 6-Days of Social Media Marketing online webinar on the 9th of November.'}
                        </Body>
                        <Body>
                            {'Our aim is to teach small business owners and marketers how to write persuasive/clever copies, and also make designs that will convert leads to sales on social media.'}
                        </Body>
                        <Body>
                            {'The first two days are totally free! You get the full package with no commitments whatsoever. Enroll now to start converting more people with your social media ads.'}
                        </Body>
                        <Body>
                            {"Begin the process of expanding your business today!"}
                        </Body>
                        <a href="#enroll"><button id="cta" className="btn btn-sm my-4">
                        Join us now
                        </button></a>
                    </div>
                        
                    <div style={{position:"ralative", top: "-40px"}} className="col-12 col-md align-self-center mx-sm-5 py-4">
                        <div className='container-md dey-well'>
                            <BenefitsCard benefits={this.props.benefits}/>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default AboutSection;