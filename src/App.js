import React from 'react';
import PropTypes from "prop-types";

const foodILike = [
  {
    id : 1,
    name : "pizza",
    image : 
      "https://w.namu.la/s/dc811d27b3489248e9fc7fa9ceb3624e85fb938b5da2e784d95b4d1dc0dc41ed4d4fe7844eb850aa9dc930a57f0f3f55e770d58aed75135fc3ce91baaf40ad456403a795acd489913b031e1dc3528046f8fc1bfbd7dc87d6ba51f0a1dabd6e3dce3ac89b922a05e69f9dbeb81eb4ecfd",
    rating : 2
  },
  {
    id : 2,
    name : "hamburger",
    image : 
      "https://w.namu.la/s/dc811d27b3489248e9fc7fa9ceb3624e85fb938b5da2e784d95b4d1dc0dc41ed4d4fe7844eb850aa9dc930a57f0f3f55e770d58aed75135fc3ce91baaf40ad456403a795acd489913b031e1dc3528046f8fc1bfbd7dc87d6ba51f0a1dabd6e3dce3ac89b922a05e69f9dbeb81eb4ecfd",
    rating : 4.2
  },
  {
    id : 3,
    name : "hotdog",
    image : 
      "https://w.namu.la/s/dc811d27b3489248e9fc7fa9ceb3624e85fb938b5da2e784d95b4d1dc0dc41ed4d4fe7844eb850aa9dc930a57f0f3f55e770d58aed75135fc3ce91baaf40ad456403a795acd489913b031e1dc3528046f8fc1bfbd7dc87d6ba51f0a1dabd6e3dce3ac89b922a05e69f9dbeb81eb4ecfd",
    rating : 5
  },
  {
    id : 4,
    name : "cola",
    image : 
      "https://w.namu.la/s/dc811d27b3489248e9fc7fa9ceb3624e85fb938b5da2e784d95b4d1dc0dc41ed4d4fe7844eb850aa9dc930a57f0f3f55e770d58aed75135fc3ce91baaf40ad456403a795acd489913b031e1dc3528046f8fc1bfbd7dc87d6ba51f0a1dabd6e3dce3ac89b922a05e69f9dbeb81eb4ecfd",
    rating : 3
  },
  {
    id : 5,
    name : "milk",
    image : 
      "https://w.namu.la/s/dc811d27b3489248e9fc7fa9ceb3624e85fb938b5da2e784d95b4d1dc0dc41ed4d4fe7844eb850aa9dc930a57f0f3f55e770d58aed75135fc3ce91baaf40ad456403a795acd489913b031e1dc3528046f8fc1bfbd7dc87d6ba51f0a1dabd6e3dce3ac89b922a05e69f9dbeb81eb4ecfd",
    rating : 1.1
  }
]

function Food ({name, picture, rating}) {
  return (
    <div>
      <h1> I Like {name}</h1>
      <h4>{rating}/5.0</h4>
      <img src = {picture} alt={name}/>
    </div>
  );
}

Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired
}

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food 
        key={dish.id}
        name={dish.name} 
        picture={dish.image} 
        rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
