import React, { Component } from 'react';
import { Button } from 'reactstrap';

class ProjectItem extends Component {

  deleteProject(id){
    this.props.onDelete(id);
  }

  render(){
    return(
      <div>
      <li className="Projects">
        <strong>{this.props.project.name} : </strong>
         {this.props.project.category} 
        <Button className="btn btn-sm mx-1 px-1 py-0" color="danger" outline  block={false} onClick={this.deleteProject.bind(this, this.props.project.id)}> <strong>X</strong> </Button>
      </li>
      </div>
    );
  }
}

export default ProjectItem;
