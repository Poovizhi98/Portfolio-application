import React, {Component} from 'react';

class ProfileImage extends Component {
  constructor(){
    super();
  }
  componentDidMount(){
    
  }
  render() {
    return (
          <div className="profile-photo-container-col">
                  <a href="" className="profile-photo-container profile"> </a>
                  <p className="likes-share"><a href="#" className="likes">25</a><a href="#" className="share">100</a></p>
                  <p className="profile-updated-status">Profile updated: 25/01/2019</p>
          </div>
      );
  }
}

export default ProfileImage;