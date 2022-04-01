import React from "react";

class EmailRecord extends React.Component {
    render() {
        return(
            <div className='subMainContainer'>
              <div className='inputContainer' >
                <h5>Your email</h5>
                <input
                  type={"text"} 
                  value={this.props.emailValueOne}
                  placeholder={"test@mailbox.com"} 
                  onChange={(event) => this.props.handleEmailValueOne(event)}
                />
              </div>
              <div className='inputContainer'>
                <h5>Confirm email</h5>
                <input
                  type={"text"} value={this.props.emailValueTwo}
                  placeholder={"Confirm email"}
                  onChange={(event) => this.props.handleEmailValueTwo(event)}
                />
              </div>
              <div style={{display: "flex", justifyContent: "space-between"}} className='buttonContainer'>
                <button
                    onClick={(event) => this.props.handleToggleBackToOne(event)}
                >Previous</button>
                <button
                    onClick={(event) => this.props.handleToggleToNextPage(event)}
                >Next</button>
              </div>
              <div>

              </div>
            </div>
        )
    }
}
export default EmailRecord;