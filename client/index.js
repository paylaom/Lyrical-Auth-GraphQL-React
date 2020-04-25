import './style/style.css'
import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider } from '@apollo/client';
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks';
// import { HttpLink, InMemoryCache, ApolloClient } from 'apollo-boost';
// import { ApolloProvider  } from '@apollo/react-hooks';

import App from './components/App';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Header from './components/Header';
import SongList from './components/SongList';
import SongCreate from './components/SongCreate';
import SongDetail from './components/SongDetail';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:4000/graphql'
  })
});

const Root = () => (
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
      <Router>
        <div className="container">
        <Header />
        <Switch>
          {/* <Route path="/"><App/></Route> */}
          <Route path="/login"><LoginForm/></Route>
          <Route path="/signup"><SignupForm /></Route>
          <Route path="/songlist"><SongList/></Route>
          <Route path="/songs/new"><SongCreate/></Route>
          <Route path="/songs/:id"><SongDetail/></Route>
        </Switch>
        </div>
      </Router>
      </ApolloHooksProvider>
    </ApolloProvider>
  );

  render(<Root />, document.getElementById('root'));
