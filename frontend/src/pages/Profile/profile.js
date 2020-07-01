import React, { Component } from 'react';

import AuthContext from '../../context/auth-context';

class ProfilePage extends Component {
  state = {
    creating: false,
    events: [],
    isLoading: false,
    selectedEvent: null
  };
  isActive = true;

  static contextType = AuthContext;
  profileUpdateConfirmHandler = () => {

  }

  render() {
    return (
      <React.Fragment>
       <form>
              <div className="form-control-f">
                <label htmlFor="kilo">Kilo (kg)</label>
                <input type="number" id="kilo" ref={this.titleElRef} />
              </div>
              <div className="form-control-f">
                <label htmlFor="hedefKilo">Hedef Kilo (kg)</label>
                <input type="number" id="hedefKilo" ref={this.dateElRef} />
              </div>
              <div className="form-control-f">
                <label htmlFor="boy">Boy (cm)</label>
                <input type="number" id="boy" ref={this.priceElRef} />
              </div>
              <input type="radio" id="male" name="gender" value="male"/>
              <label htmlFor="male">Male</label><br/>
              <input type="radio" id="female" name="gender" value="female"/>
              <label htmlFor="female">Female</label><br/>
              <div className="form-control-f">
                <label htmlFor="date">Date</label>
                <input type="date" id="date" ref={this.dateElRef} />
              </div>
              <button className="btn" onClick={this.profileUpdateConfirmHandler}>
                Update Profile
                </button>
            </form>
      </React.Fragment>
    );
  }
}

export default ProfilePage;