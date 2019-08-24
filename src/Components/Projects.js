import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import { Card, CardTitle, CardBody } from 'reactstrap';
//import PropTypes from 'prop-types';

class Projects extends Component {
  deleteProject(id){
    this.props.onDelete(id);
  }

  render(){
    let projectItems;
    if(this.props.projects){
      projectItems = this.props.projects.map(project => {
        //console.log(project);
        return (
          <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.name} project={project} />
        );
      });
    }
    return(
      <div className="Projects">

      <Card className="m-0">
        <CardTitle className="bg-orange p-1 m-0" top width="102%" ><h3>List of Users</h3></CardTitle>
        <hr className="my-0" />
        <CardBody className="bg-light p-3 mb-0" top width="100%">
          {projectItems}
        </CardBody>
      </Card>




      </div>
    );
  }
}

export default Projects;
