import React, { Component } from 'react';

class ToyForm extends Component {
  formSubmission = (e) => {
    e.preventDefault()
    const toy = {
      name: e.target.name.value,
      image: e.target.image.value,
      likes: 0
    }
    this.props.createToy(toy)
  }

  render() {
    return (
      <div className="container">
        <form className="add-toy-form" onSubmit={this.formSubmission} >
          <h3>Create a toy!</h3>
          <input type="text" name="name" placeholder="Enter a toy's name..." className="input-text"/>
          <br/>
          <input type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text"/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
