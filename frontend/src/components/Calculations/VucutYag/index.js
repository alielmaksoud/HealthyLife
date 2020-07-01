import React, { Component } from 'react';

import AuthContext from '../../../context/auth-context';

class VucutYag extends Component {
  state = {
    creating: false,
    events: [],
    isLoading: false,
    selectedEvent: null
  };
  isActive = true;

  static contextType = AuthContext;
  calculateHandler = () => {
    console.log("sdc")
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
        <h4>Vücut Yağ Oranı Hesapla</h4>
        <div>
          Vücut yağ oranı, senin ağırlığına göre vücudunda yüzde kaç oranında yağ bulunduğunu gösterir...
          Not: Bel çevresi ölçümü belin en ince yerinden yapılmalıdır.
          Vücudundaki yağ oranı, ağırlığın ile orantılı olarak artar ve azalır. Bu değerlendirmede, kadınlarda 4.2 kg., erkeklerde ise 5.8 kg.’lık bir sapma görülebilir. Sporcular ve hamileler bu değerlendirmenin dışında tutulur.
        </div>
        <div className="row">
          <div className="col-11 col-md-7">
     
            <p>Please select your gender:</p>
              <input type="radio" id="male" name="gender" value="male"/>
              <label htmlFor="male">Male</label><br/>
              <input type="radio" id="female" name="gender" value="female"/>
              <label htmlFor="female">Female</label><br/>
              <div className="form-control-f">
                <label htmlFor="boy">Boy(cm)</label>
                <input type="number" id="boy"  />
              </div>
              <div className="form-control-f">
                <label htmlFor="kilo">Kilo(kg)</label>
                <input type="number" id="kilo"  />
              </div>
              <div className="form-control-f">
                <label htmlFor="boyun">Boyun(cm)</label>
                <input type="number" id="boyun"  />
              </div>
              <div className="form-control-f">
                <label htmlFor="bel">Bel(cm)</label>
                <input type="number" id="bel"  />
              </div>
              <div className="form-control-f">
                <label htmlFor="kalca">Kalça(cm)</label>
                <input type="number" id="kalca"  />
              </div>
              <button className="btn" onClick={this.calculateHandler}>
                Hesapla
              </button>
          
            </div>
            <div className="result col-6 col-md-4">
            <span className="result-panel">
            <span>kg</span>
            </span>
            
          </div>

          </div>
          </div>
      </React.Fragment>
    );
  }
}

export default VucutYag;