import React, {Component} from 'react';

class Summary extends Component {
    constructor(){
        super();
    }
    componentDidMount(){
        
    }
    render(){
        return (
                <div className="row">
                    <div className="col profile-container">
                            <h2>Sarah Emmanuel</h2>
                            <h6>Senior User Experience/User Interface Designer</h6>
                            <h6>8 years - P2 Application Delivery</h6>
                            <h6 className="date-of-joining">Joined On: 13/01/2019</h6>
                    </div>
                </div>
        );
    }
}

export default Summary;