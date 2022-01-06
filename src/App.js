import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    // function added to props with mapDispatchToProps
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // check if user exists
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        // listen to the userRef for any
        // changes in the data, ALSO
        // get back first state of the data
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      } else {
        // set currentUser to null
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    // close subscription
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/sign-in' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
