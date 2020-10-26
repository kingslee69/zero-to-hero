import React, { Component } from 'react';
import Tweet1 from './tweet1';
import Tweet2 from './tweet2';
import Tweet3 from './tweet3';
import Tweet4 from './tweet4';

class TweetSection extends Component {
    render() {        
      
        return (
            <div className="container-sm row mx-auto justify-content-around">
                <Tweet1 />
                <Tweet2 />
                <Tweet3 />
                <Tweet4 />
            </div>
        );
    }
}

export default TweetSection;