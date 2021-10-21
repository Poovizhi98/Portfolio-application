import React, {Component} from 'react';
import userAvator from '../../images/user-avatar-main-picture.svg';
class ProjectSummaryDetails extends Component {
        constructor(){
                super();
        }
        componentDidMount(){

        }
        render(){
        return (
                        <div className="col-sm-9 col-md-9">                      
                                        <div className="project-summary-detail">                                   
                                                        <a href="#" className="button-left"></a>                                      
                                                        <div className="summary-details-container">
                                                                <div className="summary-details-header">
                                                                        <div className="project-client-name">
                                                                                <h5>A Virtuous Management System</h5>
                                                                                <h6 className="client-name">SCG Chemicals Ltd,.</h6>
                                                                        </div>
                                                                        <div className="project-role-date">
                                                                                <p className="role">Role: <strong>UX Architect</strong></p>
                                                                                <p className="date">Jan 2019 - May 2019</p>
                                                                        </div>
                                                                </div>
                                                                <p className="project-description">Project descriptions provide the following details to the applicants: the problem the project will address, a set of goals for the project, the overall objectives for the project, as well as a project plan that describes the activities.</p>                                                                
                                                                <p className="technology-stack">Tools & Technology: <strong>Adobe XD , Morea</strong></p>
                                                                <p className="skills">Skills : <strong>GUI & User Testing</strong></p>
                                                                <p className="skills">Appreciation & Feedback : <strong>3</strong></p>

                                                        
                                                                        <ul className="appreciation-container">
                                                                                <li className="appreciation-list">
                                                                                        <p className="profile-name"><img src={userAvator} alt="profile image" /> Babu Arumugam</p>
                                                                                        <article className="profile-desc">Nice Effort and Fast Deliverables</article>
                                                                                </li>
                                                                                <li className="appreciation-list">
                                                                                        <p className="profile-name"><img src={userAvator} alt="profile image" /> Babu Arumugam</p>
                                                                                        <article className="profile-desc" title="Sarah's work is consistently clear, clean, & thoughtful. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias vel adipisci nisi porro officiis commodi quo sint exercitationem aliquid impedit quia eveniet sit saepe soluta quos veritatis doloribus hic nesciunt, laboriosam ipsam fuga. Aliquam corrupti veniam aspernatur delectus ad id?">Sarah's work is consistently clear, clean, & thoughtful. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias vel adipisci nisi porro officiis commodi quo sint exercitationem aliquid impedit quia eveniet sit saepe soluta quos veritatis doloribus hic nesciunt, laboriosam ipsam fuga. Aliquam corrupti veniam aspernatur delectus ad id?</article>
                                                                                </li>
                                                                        </ul>
                                                                
                                                        </div>                                      
                                                        <a href="#" className="button-right"></a>
                                        </div>                       
                        </div>
                );
        }
}

export default ProjectSummaryDetails;