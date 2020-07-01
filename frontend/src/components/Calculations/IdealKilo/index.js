import React, {Component} from 'react';

import AuthContext from '../../../context/auth-context';

class IdealKilo extends Component {
    constructor() {
        super();

        this.state = {
            gender: '',
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
        if (this.state.gender == 'female') {
            console.log()
            const idealKilo = 45.5 + (2.3/2.54) * ( this.state.boy - 152.4) ;
            this.setState({result: idealKilo});

        } else {
            const idealKilo =  50 + (2.3/2.54) * ( this.state.boy - 152.4);
            this.setState({result: idealKilo});
        }
    }
    onValueChange(event) {
        const value = event.target.value;
        this.setState({
            gender: event.target.value,
            ...this.state,
            [event.target.name]: value
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <h4>İdeal Kilo Hesapla</h4>
                    <div>
                        İdeal kilo cinsiyetine, boyuna ve yaşına bağlı olarak sahip olman gereken sağlıklı kiloyu gösterir.
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
                            <label htmlFor="male">Male</label><br/>
                            <input type="radio" id="female" name="gender" value="female"
                                checked={
                                    this.state.gender === "female"
                                }
                                onChange={
                                    this.onValueChange
                                }/>
                            <label htmlFor="female">Female</label><br/>
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
                                } kg</span>
                            </span>

                        </div>

                    </div>

                </div>
            </React.Fragment>
        );
    }
}

export default IdealKilo;
