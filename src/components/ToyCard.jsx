import React, { Component } from 'react';

class ToyCard extends Component {
  toy = this.props.toy;

  deleteToy = () => {
    this.props.deleteToy(this.toy.id)
  }

  addLike = () => {
    this.props.addLike(this.toy)
  }

  render() {
    return (
      <div className="card">
        <h2>{this.toy.name}</h2>
        <img src={this.toy.image} alt={this.toy.name} className="toy-avatar" />
        <p>{this.toy.likes} Likes </p>
        <button className="like-btn" onClick={this.addLike} >Like {'<3'}</button>
        <button className="del-btn" onClick={this.deleteToy} >Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
