import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
}

  render() {
    const { values: {firstName, lastName, bio, email, city, occupation}} = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter User Details" />
         <List>
         <ListItem
         primaryText = "FirstName"
         secondaryText = {firstName}/>
         <ListItem
         primaryText = "LastName"
         secondaryText = {lastName}/>
         <ListItem
         primaryText = "Email"
         secondaryText = {email}/>
         <ListItem
         primaryText = "Occupation"
         secondaryText = {occupation}/>
        <ListItem
         primaryText = "City"
         secondaryText = {city}/>
         <ListItem
         primaryText = "Bio"
         secondaryText = {bio}/>
         </List>
          <br />
          <RaisedButton
             label="Back"
             primary={false}
             onClick={this.back}
             style = {styles.button}/>
          <RaisedButton
            label="Confirm"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default Confirm;