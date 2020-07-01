import React, { Component } from 'react';
import AuthContext from '../../context/auth-context';
import DatePicker from "react-datepicker";
import {Card } from 'react-bootstrap'
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
class KaloriTakip extends Component {

  state = {
      creating: false,
      isLoading: false,
      startDate: new Date(),
      foods: [],
      query:''
    };
    isActive = true;
    
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  static contextType = AuthContext;

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.fetchFoods()
        }
      } else if (!this.state.query) {
      }
    })
  }

  componentDidMount() {
    this.fetchFoods();
  }
    
  fetchFoods() {
    this.setState({ isLoading: true });
    const requestBody = {
      query: `
          query {
            foods {
              _id
              name
            }
          }
        `
    };
    fetch('http://localhost:8000/graphql', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error('Failed!');
        }
        return res.json();
      })
      .then(resData => {
        const foods = resData.data.foods;
        if (this.isActive) {
          this.setState({ foods: foods, isLoading: false});
        }
      })
      .catch(err => {
        console.log(err);
        if (this.isActive) {
          this.setState({ isLoading: false });
        }
      });
  }
    render() {
        return (
          <div>
            <DatePicker
                  selected={this.state.startDate}
                  onChange={this.handleChange}
                />
          <br/>
          <br/>
          <Card border="success" style={{ width: '45rem' }}>
            <Card.Header>Kahvaltı</Card.Header>
            <Card.Body>
              <Card.Text>
                <form>
                  <div className="col-md-4">
                  <Autocomplete
                  id="combo-box-demo"
                  options={this.state.foods}
                  getOptionLabel={(option) => option.name}
                  style={{ width: 300 }}
                  renderInput={(params) => <TextField {...params} label="Şunu da yedim..." variant="outlined" />}
                />
                <button>Ekle</button>

                  </div>

                </form>
              </Card.Text>
            </Card.Body>
          </Card>
          <br/>
          <Card border="success" style={{ width: '45rem' }}>
            <Card.Header>1. Ara Öğün</Card.Header>
            <Card.Body>
              <Card.Text>
              <form>
                  <div className="col-md-4">
                  <Autocomplete
                  id="combo-box-demo"
                  options={this.state.foods}
                  getOptionLabel={(option) => option.name}
                  style={{ width: 300 }}
                  renderInput={(params) => <TextField {...params} label="Şunu da yedim..." variant="outlined" />}
                />
                <button>Ekle</button>

                  </div>

                </form>
              </Card.Text>
            </Card.Body>
          </Card>
          <br/>
          <Card border="success" style={{ width: '45rem' }}>
            <Card.Header>Öğle Yemeği</Card.Header>
            <Card.Body>
              <Card.Text>
              <form>
                  <div className="col-md-4">
                  <Autocomplete
                  id="combo-box-demo"
                  options={this.state.foods}
                  getOptionLabel={(option) => option.name}
                  style={{ width: 300 }}
                  renderInput={(params) => <TextField {...params} label="Şunu da yedim..." variant="outlined" />}
                />
                <button>Ekle</button>

                  </div>

                </form>
              </Card.Text>
            </Card.Body>
          </Card>
          <br/>
          <Card border="success" style={{ width: '45rem' }}>
            <Card.Header>2. Ara Öğün</Card.Header>
            <Card.Body>
              <Card.Text>
              <form>
                  <div className="col-md-4">
                  <Autocomplete
                  id="combo-box-demo"
                  options={this.state.foods}
                  getOptionLabel={(option) => option.name}
                  style={{ width: 300 }}
                  renderInput={(params) => <TextField {...params} label="Şunu da yedim..." variant="outlined" />}
                />
                <button>Ekle</button>

                  </div>

                </form>
              </Card.Text>
            </Card.Body>
          </Card>
          <br/>
          <Card border="success" style={{ width: '45rem' }}>
            <Card.Header>3. Ara Öğün</Card.Header>
            <Card.Body>
              <Card.Text>
              <form>
                  <div className="col-md-4">
                  <Autocomplete
                  id="combo-box-demo"
                  options={this.state.foods}
                  getOptionLabel={(option) => option.name}
                  style={{ width: 300 }}
                  renderInput={(params) => <TextField {...params} label="Şunu da yedim..." variant="outlined" />}
                />
                <button>Ekle</button>

                  </div>

                </form>
              </Card.Text>
            </Card.Body>
          </Card>
          <br/>
          <Card border="success" style={{ width: '45rem' }}>
            <Card.Header>Akşam Yemeği</Card.Header>
            <Card.Body>
              <Card.Text>
              <form>
                  <div className="col-md-4">
                  <Autocomplete
                  id="combo-box-demo"
                  options={this.state.foods}
                  getOptionLabel={(option) => option.name}
                  style={{ width: 300 }}
                  renderInput={(params) => <TextField {...params} label="Şunu da yedim..." variant="outlined" />}
                />
                <button>Ekle</button>

                  </div>

                </form>
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
          <Card border="success" style={{ width: '45rem' }}>
            <Card.Header>4. Ara Öğün</Card.Header>
            <Card.Body>
              <Card.Text>
              <form>
                  <div className="col-md-4">
                  <Autocomplete
                  id="combo-box-demo"
                  options={this.state.foods}
                  getOptionLabel={(option) => option.name}
                  style={{ width: 300 }}
                  renderInput={(params) => <TextField {...params} label="Şunu da yedim..." variant="outlined" />}
                />
                <button>Ekle</button>

                  </div>

                </form>
              </Card.Text>
            </Card.Body>
          </Card>
         </div>
        );
    }
}
export default KaloriTakip;