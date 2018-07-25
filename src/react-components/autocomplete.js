import React from 'react';
import axios from 'axios';
import debounce from 'lodash.debounce';

export class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: []
    };
    this.search = debounce(this._search, 500);
  }

  onChange = (event) => {
    let q = event.target.value;
    this.search(q);
  }

  _search(q) {
    if (q.length < 2) {
      this.setState({
        countries: res.data
      });
      return;
    }
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
