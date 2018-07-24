import React from 'react';
import axios from 'axios';

export class Autocomplete extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: []
    };
  }

  onChange = (ev) => {
    let q = ev.target.value;
    if (q.length < 2) return;

    axios.get(`https://restcountries.eu/rest/v2/name/${q}`)
      .then(res => {
        this.setState({
          countries: res.data
        })
      })
      .catch(() => {
        this.setState({
          countries: []
        })
      });
  }

  render () {
    return (
      <div>
        <input type="text" onChange={this.onChange} placeholder="Search..." />
        <ul>
          {this.state.countries.map(x => (<li key={x.numericCode}>{x.name}</li>))}
        </ul>
      </div>
    )
  }
}
