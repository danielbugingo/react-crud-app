import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import uuid from 'uuid';
import { Container, Row, Col, Button, Jumbotron } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

//import {Container, Row, Col } from 'reactstrap';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      projects:[]
    }
  }

  componentDidMount(){
    this.setState({projects: [
        {
          id:uuid.v4(),
          name: 'Lugemwa Ronald',
          category: 'Web Design'
        },
        {
          id:uuid.v4(),
          name: 'Musa Body',
          category: 'Mobile Development'
        },
        {
          id:uuid.v4(),
          name: 'Opio Christopher',
          category: 'Web Development'
        }
    ]});
  }

  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }

  handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1)
    this.setState({projects:projects});
  }

  render(){
    return(
      <div className="App">
        <Jumbotron>
          <h1 className="display-5">Add Users</h1>
          <p className="lead">This is a simple hello unit, a simple Jumbotron-style component for calling extra attention to feature content or information.</p><hr />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p className="lead">
            <Button className="btn btn-info" >Learn More.</Button>
          </p>
        </Jumbotron>

        <Container>
          <Row>
            <Col>
              <AddProject  addProject={this.handleAddProject.bind(this)} />
            </Col>
            <Col>
              <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
            </Col>
          </Row>
        </Container>





      </div>
    )
  }
}


export default App;
