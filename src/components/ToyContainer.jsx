import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {
  return(
    <div id="toy-collection">
      {props.toys.map(toy => <ToyCard key={toy.id} toy={toy} deleteToy={props.deleteToy} addLike={props.addLike} />)}
    </div>
  );
}

export default ToyContainer;
