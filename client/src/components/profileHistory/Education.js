import React, {Component} from 'react';
import mortarboard from '../../images/mortarboard.svg';
import graduatecertificate from '../../images/graduate-certificate.svg';
import school from '../../images/26-school.svg';
class Education extends Component {
    render() {
        return (
                <div className="card">
                        <div className="card-header" id="headingThree">
                        <h6 className="mb-0">                
                        <span data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"><strong>Education</strong></span>
                        <a data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree" className="close-arrow collapsed"></a>
                        </h6>
                        </div>
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#project-accordian">
                        <div className="card-body">
                        
                                <div className="employee-education-details">                                                                        
                                        <div className="employee-education-details-item">
                                                <figure>
                                                        <img src={mortarboard} alt="mortarboard" className="mortarboard" />
                                                </figure>
                                                <aside>
                                                        <h5 className="heading">Bachelor of Engineering in Computer Science <span>June 2014 - June 2017</span></h5>
                                                        <h6 className="education-university">Join University</h6>
                                                        <p className="education-percentage">Aggregation Percentage :<strong>75%</strong></p>
                                                </aside>
                                        </div>
                                        <div className="employee-education-details-item">
                                                <figure>
                                                        <img src={graduatecertificate} alt="mortarboard" className="mortarboard" />
                                                </figure>
                                                <aside>
                                                        <h5 className="heading">SSLC <span>June 2014 - June 2017</span></h5>
                                                        <h6 className="education-university">St.Joseph Higher Secondary School</h6>
                                                        <p className="education-percentage">Aggregation Percentage :<strong>75%</strong></p>
                                                </aside>
                                        </div>
                                        <div className="employee-education-details-item">
                                                <figure>
                                                        <img src={school} alt="mortarboard" className="certificate" />
                                                </figure>
                                                <aside>
                                                        <h5 className="heading">Usability Testing<span>June 2014 - June 2017</span></h5>
                                                        <h6 className="education-university">Human Factors International</h6>
                                                        <h5 className="heading">Usability Testing <span>June 2014 - June 2017</span></h5>
                                                        <h6 className="education-university">Human Factors International</h6>
                                                </aside>                                                                        
                                        </div>
                                </div>
                        </div>
                        </div>
                </div>
        ); 
    }
}

export default Education;