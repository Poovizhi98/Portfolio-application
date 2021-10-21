import React, {Component} from 'react';
import managerImage from '../../images/20_portrait_1.png';
class Testimonials extends Component {
        constructor(){
                super();
        }
        componentDidMount(){
                
        }
        render(){
                return (
                        <div className="card">
                                <div className="card-header" id="headingTwo">
                                <h6 className="mb-0">                                               
                                <span data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"><strong>Testimonials</strong></span>
                                <a data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo" className="close-arrow collapsed"></a>
                                </h6>
                                </div>
                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#project-accordian">
                                <div className="card-body">
                                        <div className="project-testimonials">
                                                <div className="project-item">
                                                        <figure className="profile-thumbnail-img">
                                                                <img src={managerImage} alt="portrait image" className="profile-image-rwd" />
                                                                <figcaption><strong>Adam Gilgrisht</strong></figcaption>
                                                        </figure>
                                                        <p className="project-designation">Project Delivery Head, DXC Technology</p>
                                                        <p>Sarah is fueled by her passion for understanding the nuances of cross-cultural advertising. She considers herself a ‘forever student....</p>
                                                </div>
                                                <div className="project-item">
                                                        <figure className="profile-thumbnail-img">
                                                                <img src={managerImage} alt="portrait image" className="profile-image-rwd" />
                                                                <figcaption><strong>Adam Gilgrisht</strong></figcaption>
                                                        </figure>
                                                        <p className="project-designation">Project Delivery Head, DXC Technology</p>
                                                        <p>Sarah is fueled by her passion for understanding the nuances of cross-cultural advertising. She considers herself a ‘forever student....</p>
                                                </div>
                                                <div className="project-item">
                                                        <figure className="profile-thumbnail-img">
                                                                <img src={managerImage} alt="portrait image" className="profile-image-rwd" />
                                                                <figcaption><strong>Adam Gilgrisht</strong></figcaption>
                                                        </figure>
                                                        <p className="project-designation">Project Delivery Head, DXC Technology</p>
                                                        <p>Sarah is fueled by her passion for understanding the nuances of cross-cultural advertising. She considers herself a ‘forever student....</p>
                                                </div>
                                                <div className="project-item">
                                                        <figure className="profile-thumbnail-img">
                                                                <img src={managerImage} alt="portrait image" className="profile-image-rwd" />
                                                                <figcaption><strong>Adam Gilgrisht</strong></figcaption>
                                                        </figure>
                                                        <p className="project-designation">Project Delivery Head, DXC Technology</p>
                                                        <p>Sarah is fueled by her passion for understanding the nuances of cross-cultural advertising. She considers herself a ‘forever student....</p>
                                                </div>
                                                
                                        </div>
                                </div>
                                </div>
                        </div>                                                                               
                );
        }
}

export default Testimonials;