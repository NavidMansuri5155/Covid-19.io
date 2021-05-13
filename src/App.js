import React, { Component } from 'react';
import axios from "axios";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      Countries: []

    }
  }

  componentDidMount() {
    axios.get("https://api.covid19api.com/summary")
      .then(response => {
        this.setState({ Countries: response.data.Countries })
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {

    const { Countries } = this.state
    // console.log(Countries);

    return (
      <div className="App">
        <h1 className="font">C<img className="App-logo" src="https://research-compliance.umich.edu/sites/default/files/covid-virus.png" alt="logo..." />VID-19<span>With React.js</span></h1>
        {
          Countries.map(post => <div key={post.id}>
            <div className="container">
              <table className="table table-striped table-dark table-hover">
                <thead>
                  <tr>
                    <th><h4>{post.Country} , {post.CountryCode}</h4></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Slug</th>
                    <td>{post.Slug}</td>
                  </tr>
                  <tr>
                    <th scope="row">NewConfirmed</th>
                    <td>{post.NewConfirmed}</td>
                  </tr>
                  <tr>
                    <th scope="row">TotalConfirmed</th>
                    <td>{post.TotalConfirmed}</td>
                  </tr>
                  <tr>
                    <th scope="row">NewDeaths</th>
                    <td>{post.NewDeaths}</td>
                  </tr>
                  <tr>
                    <th scope="row">TotalDeaths</th>
                    <td>{post.TotalDeaths}</td>
                  </tr>
                  <tr>
                    <th scope="row">NewRecovered</th>
                    <td>{post.NewRecovered}</td>
                  </tr>
                  <tr>
                    <th scope="row">TotalRecovered</th>
                    <td>{post.TotalRecovered}</td>
                  </tr>
                  <tr>
                    <th scope="row">Date</th>
                    <td>{post.Date}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          )
        },
      </div>
    );
  }
}

export default App;