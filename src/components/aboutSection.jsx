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
                        {'90% discount alert, now you can learn copywriting & marketing design for N999. You read that right, Christmas came early!'}
                        </Body>
                        <Body>
                            {'The zerotohero webinar is an online course where interested entrepreneurs and managers can learn how to design ads with Canva (A free graphics design tool), and write killer copies that will make your target customer whip out their credit cards and pay before scrolling past your ad.'}
                        </Body>
                        <Body>
                            {'This webinar is going to be taught by two professionals, one of them who happens to be a top rated copywriter, and the other who is also a top rated freelance graphics designer. We put this course together to educate small business managers on how to design and craft amazing ads on social media by themselves. Not to mention that learning this course will save you a ton of money.'}
                        </Body>
                        <Body>
                            {"However, this course is not entirely unrestricted, there is a downside. We will be taking only 30 students for this course to make sure we interact with every student and share our knowledge effectively. This course was put together as a way to give back to small businesses that hired us when we first started out in our respective niches, you don’t want to miss out on this opportunity. "}
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