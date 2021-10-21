import React, {Component} from 'react';

class Experience extends Component {
        constructor(){
                super();
        }
        componentDidMount(){
                
        }
        render() {
                return (
                <div className="card">
                        <div className="card-header" id="headingOne">
                        <h6 className="mb-0">
                                <span data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"><strong>Experience</strong></span>
                                <a data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" className="close-arrow collapsed"></a>
                        </h6>
                        </div>
                        <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#project-accordian">
                        <div className="card-body">                                                 
                                <ul className="project-experience-details">     
                                <li className="project-experience-details-item">
                                        <div className="project-experience-flow">
                                                <div className="circle current"></div>
                                                <div className="connector-line"></div>
                                        </div>
                                        <div className="project-experience-details-content">
                                                <div className="project-experience-details-hdr-group">
                                                        <div className="header"><h5 className="project-role">Senior User Experience/User Interface Designer</h5>
                                                        <h6 className="project-company">DXC Technology</h6>
                                                        </div>
                                                        <div className="duration">Jan 2019 - Present</div>
                                                </div>
                                                <p className="project-des">Make sure the title of the job position and description match. Do your research. If you're not familiar with the job, talk to someone who is and have them help with the description. Make sure it clearly defines the goals of the position and a timeline for reaching them.</p>
                                                <p className="project-skills">Skills: <strong>GUI & User Testing</strong></p>
                                                <p className="project-count">Projects Worked: <strong>03</strong></p>
                                        </div>
                                </li>
                                <li className="project-experience-details-item">
                                                <div className="project-experience-flow">
                                                        <div className="circle"></div>
                                                        <div className="connector-line"></div>
                                                </div>
                                                <div className="project-experience-details-content">
                                                        <div className="project-experience-details-hdr-group">
                                                        <div className="header">
                                                                <h5 className="project-role">User Experience Designer </h5>
                                                                <h6 className="project-company">Tata Consultancy Services</h6>
                                                        </div>
                                                        <span className="duration">May 2015 - Dec 2018</span>
                                                        </div>
                                                        <p className="project-des">Make sure the title of the job position and description match. Do your research. If you're not familiar with the job, talk to someone who is and have them help with the description. Make sure it clearly defines the goals of the position and a timeline for reaching them.</p>
                                                        <p className="project-skills">Skills: <strong>GUI & Inforamtion Architecture</strong></p>
                                                        <p className="project-count">Projects Worked: <strong>06</strong></p>
                                                </div>
                                </li>
                                <li className="project-experience-details-item">
                                                <div className="project-experience-flow">
                                                        <div className="circle"></div>
                                                        <div className="connector-line"></div>
                                                </div>
                                                <div className="project-experience-details-content">
                                                        <div className="project-experience-details-hdr-group">
                                                                <div className="header">
                                                                        <h5 className="project-role">User Experience Designer </h5>
                                                                        <h6 className="project-company">Tata Consultancy Services</h6>
                                                                </div>
                                                                <span className="duration">May 2015 - Dec 2018</span>
                                                        </div>
                                                        <p className="project-des">Make sure the title of the job position and description match. Do your research. If you're not familiar with the job, talk to someone who is and have them help with the description. Make sure it clearly defines the goals of the position and a timeline for reaching them.</p>
                                                        <p className="project-skills">Skills: <strong>GUI & Inforamtion Architecture</strong></p>
                                                        <p className="project-count">Projects Worked: <strong>06</strong></p>
                                                </div>
                                </li>
                                <li className="project-experience-details-item">
                                                <div className="project-experience-flow">
                                                        <div className="circle"></div>
                                                        <div className="connector-line"></div>
                                                </div>
                                                <div className="project-experience-details-content">
                                                                <div className="project-experience-details-hdr-group">
                                                                                <div className="header">
                                                        <h5 className="project-role">User Experience Designer </h5>
                                                        <h6 className="project-company">Tata Consultancy Services</h6>
                                                        </div><span className="duration">May 2015 - Dec 2018</span></div>
                                                        <p className="project-des">Make sure the title of the job position and description match. Do your research. If you're not familiar with the job, talk to someone who is and have them help with the description. Make sure it clearly defines the goals of the position and a timeline for reaching them.</p>
                                                        <p className="project-skills">Skills: <strong>GUI & Inforamtion Architecture</strong></p>
                                                        <p className="project-count">Projects Worked: <strong>06</strong></p>
                                                </div>
                                </li>
                                <li className="project-experience-details-item">
                                                <div className="project-experience-flow">
                                                        <div className="circle"></div>
                                                        <div className="connector-no-line"></div>
                                                </div>
                                                <div className="project-experience-details-content">
                                                                <div className="project-experience-details-hdr-group">
                                                                                <div className="header">
                                                        <h5 className="project-role">User Experience Designer </h5>
                                                        <h6 className="project-company">Tata Consultancy Services</h6>
                                                        </div><span className="duration">May 2015 - Dec 2018</span></div>
                                                        <p className="project-des">Make sure the title of the job position and description match. Do your research. If you're not familiar with the job, talk to someone who is and have them help with the description. Make sure it clearly defines the goals of the position and a timeline for reaching them.</p>
                                                        <p className="project-skills">Skills: <strong>GUI & Inforamtion Architecture</strong></p>
                                                        <p className="project-count">Projects Worked: <strong>06</strong></p>
                                                </div>
                                </li>
                                </ul>
                                <div className="expand-button-container">
                                <a href="" className="show-more">See all positions</a>
                                </div>
                        
                        </div>
                        </div>
                </div>                                        
                );
        }
}

export default Experience;