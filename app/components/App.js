import React from 'react';
import ReactDOM from 'react-dom';
import axios from '../../node_modules/axios/dist/axios.min.js';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
        events: []
    };
  }
  componentDidMount() {
    const dataUrl = 'http://localhost:8888/api/events';
    axios.get(dataUrl).then(response => {
      console.log('component did mount', response.data);
      this.setState({
        events: response.data
      });
    });
  }
  render() {
    return (
      <div className="container">
        {this.state.events.map(event => {
          return (
            <div key={event.nid[0].value}>
              <h3>{event.title[0].value}</h3>
              <p>Organizer: {event.field_organizer[0].value}</p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default App;
