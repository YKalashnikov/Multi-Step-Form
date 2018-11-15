import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


export class Success extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter User Details" />
          <h1>Thank you for your submission</h1>
          <p>You will get an email with futher extraction s 😀   
          </p>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;