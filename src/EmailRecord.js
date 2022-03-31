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
                  onChange={this.props.handleEmailValueTwo}
                />
              </div>
              <div style={{display: "flex", justifyContent: "space-between"}} className='buttonContainer'>
                <button
                    onClick={this.props.handleToggleBackToOne}
                >Previous</button>
                <button
                    onClick={this.props.handleToggleToNextPage}
                >Next</button>
              </div>
              <div>

              </div>
            </div>
        )
    }
}
export default EmailRecord;