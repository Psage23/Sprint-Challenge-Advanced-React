import React from 'react';
import axios from 'axios';
import ToggleBar from './components/DarkMode';
import PlayerCard from './components/PlayerCard';
import './App.css';


class App extends React.Component {
      state = {
        players: [],
      };
  

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
    .then(response => {
      console.log(response);
      this.setState({players: response.data})
    })
  }

render() {
  console.log('render is working')
  return (
    <div className="App">
      <ToggleBar />
      <div className="results">
        <PlayerCard players={this.state.players}/>
      </div>
    </div>
  );
}
}


export default App;
