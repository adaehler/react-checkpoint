import './App.css';
import React from 'react'
import { render } from '@testing-library/react';
import EmailList from './EmailList'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      emails:[],
      readEmail: {}
    }
  }

  handleViewAll = async () => {
    var response = await fetch('http://localhost:3001/emails').then(res => {return res.json()})
    this.setState({emails: response})
  }

  handleOpenEmail = (id) => {
    let viewEmail = this.state.emails.filter((email) => {return email.id === id})
    const viewEmailObj = viewEmail[0];
    this.setState({readEmail: viewEmailObj})
  }



  render() {
    return (
      <div>
        <button type="button" onClick={this.handleViewAll}>View All Emails</button>
        <EmailList 
          emails = {this.state.emails}
          onOpenEmail = {this.handleOpenEmail}
        />
        <ul>
          <li>
            Date: {this.state.readEmail.date}<br/>
            </li>
            <li>
            Message: {this.state.readEmail.message}<br/>
            </li>
            <li>
            Recipient: {this.state.readEmail.recipient}<br/>
            </li>
            <li>
            Sender: {this.state.readEmail.sender}<br/>
            </li><li>
            Subject: {this.state.readEmail.subject}<br/>
            </li>
          
        </ul>
      </div>
    );
  }
}

export default App;
