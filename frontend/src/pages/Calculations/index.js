import React, { Component } from 'react';

import AuthContext from '../../context/auth-context';
import BazalMetabolizma from '../../components/Calculations/BazalMetabolizma'
import IdealKilo from '../../components/Calculations/IdealKilo'
import VucutKitle from '../../components/Calculations/VucutKitle'
import VucutYag from '../../components/Calculations/VucutYag'
import './calculations.css';

class CalculationsPage extends Component {
  state = {
    creating: false,
    calculationType: "vucutKitle",
    isLoading: false,
    selectedEvent: null
  };
  isActive = true;

  static contextType = AuthContext;

  bazalMetabolizma = () => {
    this.setState({ calculationType: "bazalMetabolizma" });
  };
  idealKilo = () => {
    this.setState({ calculationType: "idealKilo" });
  };
  vucutKitleİndeksi = () => {
    this.setState({ calculationType: "vucutKitle" });
  };
  vucutYagOrani = () => {
    this.setState({ calculationType: "vucutYag" });
  };

  render() {
    return (
      <React.Fragment>
        <div className="calculations-list">
            <button className="btn" onClick={this.bazalMetabolizma}>
                Bazal Metabolizma Hızı
            </button>
            <button className="btn" onClick={this.idealKilo}>
                İdeal Kilo Hasaplama
            </button>
            <button className="btn" onClick={this.vucutKitleİndeksi}>
                Vücut Kitle İndeksi
            </button>
            <button className="btn" onClick={this.vucutYagOrani}>
                Vücut Yağ Oranı
            </button>
        </div>
        {this.state.calculationType === "bazalMetabolizma" ? <BazalMetabolizma/> : ''}
        {this.state.calculationType === "idealKilo" ? <IdealKilo/> : ''}
        {this.state.calculationType === "vucutKitle" ? <VucutKitle/> : ''}
        {this.state.calculationType === "vucutYag" ? <VucutYag/> : ''}
      </React.Fragment>
    );
  }
}

export default CalculationsPage;