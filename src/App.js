import React from 'react';
import './App.css';
import axios from 'axios';
// const databaseUrl = process.env.HEROKU_DB_URL || 'http://localhost:3000'
const herokuBackendUrl = 'https://heroku-deployment-backend-77.herokuapp.com'
const databaseUrl = process.env.NODE_ENV === 'production' ? herokuBackendUrl : 'http://localhost:3000'
// const apiUrl = 'https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=a19bff0f4a764cbcb3de17525336fd29'


class App extends React.Component {
  state = {
    users: []
  }

  componentDidMount() {
    this.getUsers()
    // this.getSportsNews()
  }


  // sports news api
  // getSportsNews = () => {
  //   axios({
  //     url: `${apiUrl}`,
  //     method: 'get'
  //   })
  //     .then(response => {
  //       console.log(response)
  //       this.setState({ response })
  //     })
  // }

  getUsers = () => {
    axios({
      url: `${databaseUrl}/api/users`,
      // url: 'https://project3-backend-test.herokuapp.com/api/users',
      method: 'get'
    })
      .then(users => {
        console.log(users)
        this.setState({ users })
      })
  }

  render() {
    console.log(this.state.users)
    console.log("Rendered")
    return (
      <div className="App" >
        <header className="App-header">
          <h1>Project 3 Starter. Let's git it!</h1>
        </header>
      </div>
    );
  }
}

export default App;
