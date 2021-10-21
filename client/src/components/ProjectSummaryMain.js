import React, {Component} from 'react';
import ProjectSummaryHeader from './projectSummary/ProjectSummaryHeader';
import ProjectSummaryList from './projectSummary/ProjectSummaryList';
import ProjectSummaryDetails from './projectSummary/ProjectSummaryDetails';
class ProjectSummaryMain extends Component {
    constructor(){
        super();
    }
    componentDidMount(){

    }
    render() {
        return (
            <div className="container-fluid">
                <ProjectSummaryHeader />
                <div className="row">
                        <ProjectSummaryList />
                        <ProjectSummaryDetails />
                </div>    
            </div>
        );
    }
}

export default ProjectSummaryMain;