import React,{Component} from 'react';
import AuthContext from '../../context/auth-context';
import FoodList from '../../components/Food/FoodList';

class KacKalori extends Component {
  state = {
    creating: false,
    foods:[],
    isLoading: false,
  };
  isActive = true;

  static contextType = AuthContext;

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
              description
              calories
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

      const foods =  (resData.data.foods);

      if (this.isActive) {
        this.setState({ foods: foods, isLoading: false });
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
        <FoodList
          foods={this.state.foods}
          authUserId={this.context.userId}
        />
     );
    }
}

export default KacKalori;
