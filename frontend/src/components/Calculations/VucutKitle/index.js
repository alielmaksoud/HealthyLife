import React, {Component} from 'react';

import AuthContext from '../../../context/auth-context';

class VucutKitle extends Component {
    constructor() {
        super();

        this.state = {
            boy: 0,
            kilo: 0
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
        const vki = (this.state.kilo) / (this.state.boy * this.state.boy);
        this.setState({result: vki});

    }
    onValueChange(event) {
        const value = event.target.value;
        this.setState({
            ...this.state,
            [event.target.name]: value
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <h4>Vücut Kitle İndeksi Hesapla</h4>
                    <div>
                        Vücut Kitle indeksi (Beden kitle indeksi), boyuna göre uygun ağırlıkta olup olmadığını değerlendiren formüldür.
                                                      Ağırlığımızın boyumuza uygun olup olmadığını değerlendirmek için çeşitli formüller geliştirilmiştir. Bunlardan en çok kullanılan ve en kabul göreni Vücut Kitle İndeksidir. Yaş ilerledikçe Vücut Kitle İndeksinde artışlar olabilir.
                    </div>
                    <div className="row">
                        <div className="col-11 col-md-7">

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
                            <button className="btn"
                                onClick={
                                    this.calculateHandler
                            }>
                                Hesapla
                            </button>

                        </div>
                        <div className="result col-6 col-md-4">
                            <span className="result-panel">
                                <span>{
                                    this.state.result
                                }
                                    kg</span>
                            </span>

                        </div>

                    </div>

                </div>
            </React.Fragment>
        );
    }
}
export default VucutKitle;
