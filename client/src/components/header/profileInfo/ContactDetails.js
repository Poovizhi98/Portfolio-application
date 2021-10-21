import React, {Component} from 'react';
import hamburger from '../../../images/menu_hamburger.svg';
class ContactDetails extends Component {
        constructor(){
                super();
        }
        componentDidMount() {
                
        }
        render() {
                return (
                        <div className='row'>
                                <div className="col-md-12 profile-header-main">
                                        <div className="profile-photo-mobile-container">
                                                <a href="" className="profile-photo-container profile">
                                                        <span className="billable status"></span>
                                                </a>                                                                                                           
                                        </div>
                                        <a className="hamburger-link-button">
                                                <img src={hamburger} />
                                        </a>
                                        <div className="user-contact-avail-details">
                                                <div className="user-details"><a href="#" className="mobile-no icon-mobile">+91-3989489981</a> <span className="divider">|</span> <a href="#" className="email-id icon-email">sarah6@dxc.com</a></div>
                                                <div className="user-details"><a href="#" className="manager-name icon-avator">Alam Mohammed</a></div>
                                                <div className="user-details icon-textdoc">
                                                        <a href="#">Billable <sup className="billable">&#x25CF;</sup></a>                                                              
                                                </div>
                                        </div>
                                </div>
                        </div>
                );
        }
}
export default ContactDetails;

