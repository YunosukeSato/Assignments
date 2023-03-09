import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import ChallengeOne from '../challenges/ChallengeOne';
import ChallengeTwo from '../challenges/ChallengeTwo';

class App extends React.Component{

    render(){
        return (
          <div className="App">
            <h1>React Lab 102</h1>
            {/* Import Components (ChallengeOne and Challenge Two) here */}
            <ChallengeOne />
            <ChallengeTwo />
          </div>
        );
      }
}

const rootNode = document.getElementById('root')
ReactDOM.render(<App />, rootNode)

export default App;