import React, { Component } from 'react';
import uuid from 'uuid';
import { Button, Fade } from 'reactstrap';

class AddProject extends Component {
  constructor(){
    super();
    this.state = {
      newProject:{}
    }
  }

  static defaultProps = {
    categories: ['Web Design', 'Web Development', 'Mobile Development']
  }

  handleSubmit(e){
    if(this.refs.name.value === ''){
      alert('Name is required.!');
    }else {
      this.setState({newProject:{
        id: uuid.v4(),
        name: this.refs.name.value,
        category: this.refs.category.value
      }}, function(){
        //console.log(this.state);
        this.props.addProject(this.state.newProject);
      });
    }
    e.preventDefault();
  }

  render(){
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>
    })

    return(
      <div>
        <h3>User Details</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>name</label> <br />
            <input type="text" ref="name" />
          </div>
          <div>
            <label>category</label> <br />
            <select ref="category">
              {categoryOptions}
            </select>
          </div>
          <br />
          <Button onClick={this.clicky} color="info" outline block={false} type="submit" value="Submit" >Submit</Button>
        </form>
      </div>
    );
  }
}

export default AddProject;
