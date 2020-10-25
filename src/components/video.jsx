import React, { Component } from 'react';

class Video extends Component {
    state = {  }
    render() { 
        return ( <div style={{width:'50%',height:0,position:'relative',paddingBottom:'56.250%'}}>
            <iframe src="https://streamable.com/e/mp38er" frameborder="0" width="100%" height="100%" allowfullscreen style={{width:'100%',height:'100%',position:'absolute',left:0,top:0,overflow:'hidden'}}></iframe>
            </div> );
    }
}
 
export default Video;