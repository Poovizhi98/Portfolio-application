import React, {Component} from 'react';
import Experience from './profileHistory/Experience';
import Testimonials from './profileHistory/Testimonials';
import Education from './profileHistory/Education';
class AccordianMain extends Component {
    constructor(){
        super();
    }
    componentDidMount(){
        
    }
    render(){
        return (
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">                       
                                <div className="accordion" id="project-accordian">
                                        <Experience />
                                        <Testimonials />
                                        <Education />
                                </div>
                        </div>
                    </div>
                    </div>
        );
    }
}
export default AccordianMain;