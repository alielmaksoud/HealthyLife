import React, {Component} from 'react';

import AuthContext from '../../../context/auth-context';

class BazalMetabolizma extends Component {
    constructor() {
        super();

        this.state = {
            gender: '',
            boy: 0,
            kilo: 0,
            yas: 0
        };

        this.onValueChange = this.onValueChange.bind(this);
        this.calculateHandler = this.calculateHandler.bind(this);
    }

    state = {
        creating: false,
        isLoading: false,
        result: 0
    };
    isActive = true;

    static contextType = AuthContext;

    calculateHandler = (event) => {
        event.preventDefault();
        if (this.state.gender == 'female') {
            console.log()
            const bmh = 655.1 + (9.56 * this.state.kilo) + (1.85 * this.state.boy) - (4.68 * this.state.yas);
            this.setState({result: bmh});

        } else {
          const bmh = 66.5 + (13.75 * this.state.kilo) + (5.03 * this.state.boy) - (6.75 * this.state.yas);
          this.setState({result: bmh});
        }
    }
    onValueChange(event) {
      const value = event.target.value;
        this.setState({
           gender: event.target.value,    
          ...this.state,
          [event.target.name]: value});
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <h4>Bazal Metabolizma Hızı Hesapla</h4>
                    <div>
                        Bazal metabolizma, 12 saatlik açlık sonunda, dinlenme anında vücudunun yaşamsal fonksiyonlarını sürdürebilmesi için ihtiyacı olan enerjiyi gösterir...
                                  Vücut yaşamsal fonksiyonlarını yerine getirmek için enerjiye ihtiyaç duyar. Bu enerjiye Bazal Metabolizma adı verilir. Bazal Metabolizma Hızı, 12 saatlik açlık sonunda hiç hareket etmeden, vücudun dinlenmiş durumdayken iç organlarının harcadığı enerjidir. Bu hız kişiden kişiye farklılık gösterir ve yaş, cinsiyet, boy, kilo gibi faktörlerden etkilenir. Örneğin gençlerin bazal metabolizma hızı yaşlılardan, erkeklerinki ise kadınlardan daha fazladır.
                    </div>
                    <div className="row">
                        <div className="col-11 col-md-7">

                            <p>Please select your gender:</p>
                            <input type="radio" id="male" name="gender" value="male"
                                checked={
                                    this.state.gender === "male"
                                }
                                onChange={
                                    this.onValueChange
                                }/>
                            <label htmlFor="male">Erkek</label><br/>
                            <input type="radio" id="female" name="gender" value="female"
                                checked={
                                    this.state.gender === "female"
                                }
                                onChange={
                                    this.onValueChange
                                }/>
                            <label htmlFor="female">Kadın</label><br/>
                            <div className="form-control-f">
                                <label htmlFor="boy">Boy(cm)</label>
                                <input type="number" id="boy" name="boy"
                                    value={
                                        this.state.boy
                                    }
                                    onChange={
                                        this.onValueChange
                                    }/>
                            </div>
                            <div className="form-control-f">
                                <label htmlFor="kilo">Kilo(kg)</label>
                                <input type="number" id="kilo" name="kilo"
                                    value={
                                        this.state.kilo
                                    }
                                    onChange={
                                        this.onValueChange
                                    }/>
                            </div>
                            <div className="form-control-f">
                                <label htmlFor="yas">Yaş</label>
                                <input type="number" id="yas" name="yas"
                                    value={
                                        this.state.yas
                                    }
                                    onChange={
                                        this.onValueChange
                                    }/>
                            </div>
                            <button className="btn"
                                onClick={
                                    this.calculateHandler
                            }>
                                Hesapla
                            </button>

                        </div>
                        <div className="result col-6 col-md-4">
                            <span className="result-panel">
                                <h3>{
                                    this.state.result
                                } kcal</h3>
                            </span>

                        </div>

                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default BazalMetabolizma;
