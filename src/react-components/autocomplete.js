import React from 'react';

export class Autocomplete extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ''
    };
  }

  onChange = (ev) => this.setState({
    query : ev.target.value
  })

  getWords = (q) => [
    { w: 'aa', k: 1 },
    { w: 'ab', k: 2 },
    { w: 'ac', k: 3 },
    { w: 'ad', k: 4 },
  ].filter(x => x.w.startsWith(q))

  render () {
    return (
      <div>
        <input type="text" value={this.state.query} onChange={this.onChange} placeholder="Search..." />
        <ul>
          {this.getWords(this.state.query).map(x => (<li key={x.k}>{x.w}</li>))}
        </ul>
      </div>
    )
  }
}
