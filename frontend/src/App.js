import React, {Component} from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import AuthPage from './pages/Auth';
import BookingsPage from './pages/Bookings';
import EventsPage from './pages/Events';
import HomePage from './pages/HomePage/HomePage';
import ProfilePage from './pages/Profile/profile';
import CalculationsPage from './pages/Calculations';
import KacKalori from './pages/KacKalori';
import KaloriTakip from './pages/KaloriTakip';
import SuTakip from './pages/SuTakip';
import MainNavigation from './components/Navigation/MainNavigation';
import AuthContext from './context/auth-context';

import './App.css';

class App extends Component {
  state = {
    token: null,
    userId:null
  }
  login = (token,userId,tokenExpiration) =>{
    this.setState({token:token,userId:userId});
  }

  logout = () =>{
    this.setState({
      token:null,
      userId:null
    })

  }
  render (){
    return (
      <BrowserRouter>
        <React.Fragment>
          <AuthContext.Provider
            value={{
              token: this.state.token,
              userId: this.state.userId,
              login: this.login,
              logout: this.logout
            }}
          >
            <MainNavigation />
            <main className="main-content container">
              <Switch>
                {this.state.token && <Redirect from="/" to="/events" exact />}
                {this.state.token && (
                  <Redirect from="/auth" to="/profile" exact />
                )}
                {!this.state.token && (
                  <Route path="/auth" component={AuthPage} />
                )}
                <Route path="/events" component={EventsPage} />
                <Route path="/homepage" component={HomePage} />
                <Route path="/calculations" component={CalculationsPage} />
                <Route path="/kacKalori" component={KacKalori} />
                {this.state.token && (
                  <Route path="/bookings" component={BookingsPage} />
                )}
                
                  <Route path="/kaloriTakip" component={KaloriTakip} />
                
                {this.state.token && (
                  <Route path="/suTakip" component={SuTakip} />
                )}
                {this.state.token && (
                  <Route path="/profile" component={ProfilePage} />
                )}
                {!this.state.token && <Redirect to="/auth" exact />}
              </Switch>
            </main>
          </AuthContext.Provider>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
