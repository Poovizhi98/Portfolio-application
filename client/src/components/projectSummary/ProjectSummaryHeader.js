import React, {Component} from 'react';

class ProjectSummaryHeader extends Component {
        constructor(){
                super();                
        }
        componentDidMount(){

        }
        render() {
                return (
                        <div className="row total-project-engagements">
                                <div className="title-container">
                                        <h4 className="title">Engagements</h4>
                                </div >
                                <div className="engagement-container">
                                        <div className="engagments">Total Projects: <strong>14</strong></div>
                                        <div className="engagments">Projects @DXC: <strong>05</strong></div>
                                </div>
                        </div>
                );
        }
       
}
export default ProjectSummaryHeader;