import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

import data from './data'


class App extends React.Component{
  toysURL = 'http://localhost:3000/toys'

  fetchToys = () => {
    fetch(this.toysURL)
    .then(response => response.json())
    .then(json => this.setState({toys: json}))
  }

  state = {
    display: false,
    toys: []
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  componentDidMount(){
    this.fetchToys()
  }

  createToy = (toy) => {
  
    fetch(this.toysURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(toy)
    })
    .then(response => response.json())
    .then(json => {
      const toys = [...this.state.toys, json]
      this.setState({toys})
      this.handleClick()
    })
  }

  deleteToy = (toyID) => {
    fetch(`${this.toysURL}/${toyID}`, {
      method: 'DELETE'
    })

    let toys = this.state.toys.filter((toy) => toy.id !== toyID)
    this.setState({toys})
  }

  addLike = (toy) => {
    fetch(`${this.toysURL}/${toy.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({likes: ++toy.likes})
    })
    .then(response => response.json())
    .then(json => {
      const toys = this.state.toys
      this.setState({toys})
    })
  }

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm createToy={this.createToy} />
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toys={this.state.toys} deleteToy={this.deleteToy} addLike={this.addLike} />
      </>
    );
  }

}

export default App;
