import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import SignInUp from './components/SignInUp/SignInUp';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends Component {
  constructor() {
    super();

    this.state = { currentUser: null };
    this.unsubscribeFromAuth = null;
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      } else this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.state;

    return (
      <div className="App">
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
