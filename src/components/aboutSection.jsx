import React, { Component} from 'react';
import {Header2, Body} from './css/style'
import Button from './button'
import BenefitsCard from './benefitsCard';

class AboutSection extends Component {
    render() { 
        return ( 
            <div style={{ overflowX: 'hidden'}} className="container-fluid">
                <div className="row align-items-center">
                    <div className="container-sm col-12 col-xl-8 m-2 mb-5 row px-md-5">
                        <Header2>About</Header2>
                        <Body>
                        {'In this evolving age of technology, people are getting used to quick methods. You have a little over 5 seconds to hold the attention of any potential customer. This is why your write up and graphics must be great in order to convert customers more effectively on social media.'}
                        </Body>
                        <Body>
                            {'This webinar will be taught by two professionals, a top rated copywriter and a freelance graphics designer. This course was put together to educate small business managers on clever ways to craft and design productive ads. You should also know that this skill saves you tons of money in the long run.'}
                        </Body>
                        <Body>
                            {'However the 90% discount will last for just 3 days, after which the enrollment fee returns to its original price, N10,000.'}
                        </Body>
                        <Body>
                            {"The Zero To Hero course was created as a way to give back to small businesses that hired us when we first started out in our respective niches. This was made for you, you don't want to miss out on this opportunity."}
                        </Body>
                        <Button title="Join us now"/>
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