import React, {Component} from 'react';


class ProjectSummaryList extends Component {
        constructor(){
                super();
        }
        componentDidMount(){
                
        }
        render(){
                return (
                        <div className="col-sm-3 col-md-3 project-summay-list-column">
                                <div className="project-summary-list">
                                        <div className="header">Project Summary</div>
                                        <div className="body">
                                                <a href="#" className="project-list-item"><span>Project Name</span> <span>...</span></a>
                                                <a href="#" className="project-list-item"><span>Project Name</span> <span>...</span></a>
                                                <a href="#" className="project-list-item"><span>Project Name</span> <span>...</span></a>
                                                <a href="#" className="project-list-item"><span>Project Name</span> <span>...</span></a>
                                                <a href="#" className="project-list-item"><span>Project Name</span> <span>...</span></a>
                                                <a href="#" className="project-list-item"><span>Project Name</span> <span>...</span></a>
                                                <a href="#" className="project-list-item"><span>Project Name</span> <span>...</span></a>
                                        
                                        </div>
                                </div>                              
                        </div>
                );
        }
}

export default ProjectSummaryList;