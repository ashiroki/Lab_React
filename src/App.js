import React from 'react';
import CharacterCard from './CharacterCard';
import './App.css';
import _ from 'lodash';
import world from './dio.jpg';
import di from './wq.jpg';
 
let message = 'ZAWARUDO'
 
const prepareStateFromWord = (given_word) => {
  let word = given_word.toUpperCase()
  let chars = _.shuffle(Array.from(word))
  return {
    word,
    chars,
    attempt: 1,
    guess: [],
    completed: false
  }
}
 
class App extends React.Component {
 
  state = prepareStateFromWord(message);
 
  activationHandler = (c) => {
    let guess = [...this.state.guess, c]
    this.setState({ guess })
    if (guess.length === this.state.chars.length) {
      if (guess.join('').toString() === this.state.word) {
        this.setState({ guess: [], completed: true })
      } else {
        this.setState({ guess: [], attempt: this.state.attempt + 1 , completed: false})
      }
    }
  }
 
  render() {
    return (
      
      <div>
        <img src={world}width="460" height="345"></img><br></br>
        {
          Array.from(this.state.chars).map((item, index) => (
            <CharacterCard
              value={item}
              key={index}
              activationHandler={this.activationHandler}
              attempt={this.state.attempt}
            />
          ))
        }
        <h2>Selected</h2>
        {
          Array.from(this.state.guess).map((item, index) => (
            <CharacterCard
              value={item}
              key={index}
              activationHandler={this.activationHandler}
              
            />
          ))
        }
        <div>Attemp {this.state.attempt}</div>
        {
          this.state.completed && <h4>Muda! Muda! Muda! Muda! Muda! Muda! Muda!</h4>
        }
        {
          this.state.completed && <img src={di}width="460" height="345"></img>
        }
      </div>
    )
  }
}
 
export default App;
