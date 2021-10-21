import React, {Component} from 'react';
import ProfileExperienceShortInfo from './profileInfo/ProfileExperienceShortInfo';
import ContactDetails from './profileInfo/ContactDetails';
import Summary from './profileInfo/Summary';

class ProfileInfo extends Component {
        constructor(props){
                super(props)
        }
        componentDidMount(){
                
        }
        render() {
                return(
                        <div className="col">                  
                                <ContactDetails />                       
                                <Summary />
                                <ProfileExperienceShortInfo />
                        </div>
                );
        }
}
export default ProfileInfo;