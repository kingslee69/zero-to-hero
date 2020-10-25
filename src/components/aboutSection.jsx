import React, { Component} from 'react';
import {Header2, Body} from './css/style'
import Button from './button'
import BenefitsCard from './benefitsCard';

class AboutSection extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container">
                <div className="container-lg framer row align-items-center">
                    <div className="container-sm col-12 col-lg m-2 mb-5 row">
                        <Header2>About</Header2>
                        <Body>
                            "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify."
                        </Body>
                        <Button title="Join us now"/>
                    </div>
                        
                    <div id="break" className="col-12 col-lg p-2 align-self-center mx-auto">
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