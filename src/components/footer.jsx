import React, { Component} from 'react';
import logo from "../images/Binaview Logo.png"

class Footer extends Component {
    render() { 
        return ( 
            <div style={{backgroundColor: "#161C2D"}} className="container-fluid p-3">
                <p style={{color: "#869AB8", fontSize: '16px', lineHeight: '48px', fontWeight: 700,}}>Contributors</p>

                <div  className="container row align-items-start mx-auto mt-4 ">
                    <div className="col-12 col-sm ">
                        
                        <p style={{color: "#869AB8", fontSize: '14px', lineHeight: '48px', fontWeight: 700,}}>UI Design</p>
                        
                        <p style={{color: "#869AB8", fontSize: '12px', lineHeight: '15px', fontWeight: 400,}} className='ml-3'>Justus Igwe</p>
                        <p style={{color: "#869AB8", fontSize: '12px', lineHeight: '15px', fontWeight: 400,}} className='ml-3'>Nworie Kingsley</p>
                        
                        
                    </div>
                    <div className=" col-12 col-sm ">
                        
                        <p style={{color: "#869AB8", fontSize: '14px', lineHeight: '48px', fontWeight: 700,}} >Web Design</p>
                        
                        <p style={{color: "#869AB8", fontSize: '12px', lineHeight: '15px', fontWeight: 400,}} className='ml-3'>Nworie Kingsley</p>
                        
                        
                    </div>
                    <div className=" col-12 col-sm">
                        
                        <p style={{color: "#869AB8", fontSize: '14px', lineHeight: '48px', fontWeight: 700,}} >Copy Writing</p>
                        
                        <p style={{color: "#869AB8", fontSize: '12px', lineHeight: '15px', fontWeight: 400,}} className='ml-3'>Emmanuel Chibuike</p>
                        
                    </div>

                    
                </div>

                <div style={{width: '50px',}} className="mx-auto pt-5">
                    <img style={{width: '50px',}} src={logo} alt="creators"/>
                </div>
            </div>
         );
    }
}
 
export default Footer;