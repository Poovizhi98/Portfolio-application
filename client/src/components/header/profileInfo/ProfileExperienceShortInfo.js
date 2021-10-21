import React, { Component } from 'react';

class ProfileExperienceShortInfo extends Component {
constructor(){
        super();
}
componentDidMount(){
        
}
render(){
  return (
        <div className="row">
            <div className="col profile-intro-container">
                    <p className="profile-intro">Sarah is fueled by her passion for understanding the nuances of cross-cultural advertising. She considers herself a ‘forever student,’ eager to both build on her academic foundations in psychology and sociology.</p>                                      
                    <div className="profile-update-status-mobile">                                                        
                                    <p className="likes-share"><a href="#" className="likes">25</a><a href="#" className="share">100</a></p>
                                    <span></span>
                                    <p className="profile-updated-status">Profile updated: 25/01/2019</p>
                    </div>                                       
                    <div className="core-expertise-skills-container">                                   
                            <section>                                                        
                                    <h6 className="page-content-title">Core Expertise Skill:</h6>                                                        
                                    <span className="skill-title">UXD</span>  
                                    <span className="skill-title">Information Architecture</span> 
                                    <span className="skill-title">GUI</span>
                                    <span className="skill-title">Native App</span>
                                    <span className="skill-title">User Rearch</span>
                                    <span className="skill-title">Accessibility</span>
                                    <span className="skill-title">Web</span>
                            </section>                             
                            <section>
                                    <h6 className="page-content-title">Secondary Skills:</h6>
                                    <span className="skill-title">AVR/VR Apps</span>  
                                    <span className="skill-title">ios Apps</span> 
                            </section>
                    </div>
                    <div className="contact-details-container">
                            <h6 className="page-content-title">Contact</h6>
                            <ul className="list-group list-group-flush">
                                    <li className="list-group-item icon-email">
                                            <h6>Email</h6>
                                            <a href="#">Sarah6@dxc.com</a>
                                    </li>
                                    <li className="list-group-item icon-mobile">
                                            <h6>Phone</h6>
                                            <a href="#">+91-3989489981</a>  
                                    </li>
                                    <li className="list-group-item icon-manager">
                                            <h6>Manager</h6>
                                            <a href="#">Alam Mohammad</a>
                                    </li>                                                     
                            </ul>
                    </div>
            </div>   
    </div>
    );
 }
}

export default ProfileExperienceShortInfo;