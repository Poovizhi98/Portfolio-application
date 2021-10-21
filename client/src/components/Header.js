import React, {Component} from 'react';
import ProfileImage from './header/ProfileImage';
import ProfileInfo from './header/ProfileInfo';
class Header extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {   
  
  }
  render() {
  
    return (
      <div className="container-fluid">
          <div className="row row-split">       
                  <ProfileImage />
                  <ProfileInfo />
          </div>
      </div>
      );
  }
}

export default Header;