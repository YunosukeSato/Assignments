import React, { Component } from 'react'

const studentList = [
  'Randall Malfoy',
  'Kvothe Black',
  'Chun Zorander',
  'Leomund Ridcully',
  'Rary Stibbons',
  'Gandalf Dresden',
  'Zeddicus Doom',
]

export default class ChallengeTwo extends Component {
  //declare the states
  state = {
    arr: []
  }

  shuffle = (array) => {
    const students = array;
    for(let i = 0; i < array.length; i++) {
      const randomIndex = Math.floor(Math.random() * (i + 1));

      const temp = students[i]
      students[i] = students[randomIndex]
      students[randomIndex] = temp;
    }
    return students;
  }

  //componentDidMount will execute when the page has loaded (this will only run once)
  componentDidMount() {
    //display the student list after 3 seconds
    setTimeout(() => {
      this.setState({arr: this.shuffle(studentList)})
    }, 3000);
  }

  //random button handler
  randomize = () => {
    //shuffle the array and set the state
    this.setState({arr: this.shuffle(studentList)})
  }

  render() {
    return (
      <>
        <h2>Challenge 2</h2>
        <div className='msg'>
          <ul>
            {/* display the list of students by iterating through the array */}
            {this.state.arr.map(student => (
              <li key={student}>{student}</li>
            ) )}
          </ul>
        </div>
        <button className='btn large' onClick={() => this.randomize()}>Randomize</button>
      </>
    )
  }
}