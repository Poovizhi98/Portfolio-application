import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ProjectSummaryMain from './components/ProjectSummaryMain';
import AccordianMain from './components/AccordianMain';
class App extends Component  {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    // debugger;
    // console.log("Application Component...");
    // console.log("this.props", this.props.match.params.employeeId);
    const { employeeId } = this.props.match.params; //casting to the employeeId
    fetch(`https://dxc-portfolio-api.azurewebsites.net/api/profiles/${employeeId}`)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          items: result.items
        });
        console.log("result", result);
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        console.log("error", error);
        // this.setState({
        //   isLoaded: true,
        //   error
        // });
      }
    )
  }
  render(){
    return (
      <React.Fragment>
          <Header />
          <ProjectSummaryMain />
          <AccordianMain />
      </React.Fragment>
    );
  }
}

export default App;
