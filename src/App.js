import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import StreamCreate from './components/streams/StreamCreate';
import StreamEdit from './components/streams/StreamEdit';
import StreamList from './components/streams/StreamList';
import StreamShow from './components/streams/StreamShow';
import StreamDelete from './components/streams/StreamDelete';
import Header from './components/Header';
class App extends Component {
  render() {
    return (
      <div className="App ui container">
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit" exact component={StreamEdit} />
            <Route path="/streams/delete" exact component={StreamDelete} />
            <Route path="/streams/show" exact component={StreamShow} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
