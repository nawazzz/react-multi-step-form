import './App.scss';
import React from 'react';
import EmailRecord from './EmailRecord';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValueOne: "",
      inputValueTwo: "",
      switchPage: false,
      emailValueOne: "",
      emailValueTwo: "",
      allData: []
    }
  }

  handleInputTextOne = (event) => {
    this.setState({
      inputValueOne: event.target.value
    }, () => {console.log(this.state.inputValueOne)})
  }

  handleInputTextTwo = (event) => {
    this.setState({
      inputValueTwo: event.target.value
    })
  }

  togglePage = () => {
    let obj = {
      name: this.state.inputValueOne,
      surname: this.state.inputValueTwo,
      email: this.state.emailValueOne
    }
    this.setState({
      switchPage: true,
      allData: [
        ...this.state.allData,
        obj
      ]
    }, () => {console.log(this.state.allData)})

  }

  handleEmailValueOne = (event) => {
    this.setState({
      emailValueOne: event.target.value
    })
  }
  
  handleEmailValueTwo = (event) => {
    this.setState({
      emailValueTwo: event.target.value
    })
  }

  handleToggleBackToOne = (event) => {
    this.setState({
      switchPage: false
    })
  }

  handleToggleToNextPage = (event) => {
    console.log(event)
  }

  render() {
    return (
      <div className="mainContainer">
        <h1>React Multi Step Form</h1>
        {this.state.switchPage? (
          
          <EmailRecord 
            emailValueOne={this.state.emailValueOne} switchPage={this.state.switchPage} 
            emailValueTwo={this.state.emailValueTwo}
          />
        ) : (
            <div className='subMainContainer'>
              <div className='inputContainer' >
                <h5>First Name</h5>
                <input
                  type={"text"} value={this.state.inputValueOne}
                  placeholder={"First Name"} onChange={this.handleInputTextOne}
                />
              </div>
              <div className='inputContainer'>
                <h5>Last Name</h5>
                <input
                  type={"text"} value={this.state.inputValueTwo}
                  placeholder={"Last Name"}
                  onChange={this.handleInputTextTwo}
                />
              </div>
              <div className='buttonContainer'>
                <button
                  onClick={this.togglePage}
                >Next</button>
              </div>
              <div>

              </div>
            </div>
        )}        
      </div>
    );
  }
}

export default App;
