import React, {Component} from 'react';
import AuthContext from '../context/auth-context';
import './Auth.css';

class AuthPage extends Component {
    state = {
        isLogin: true
      };
      static contextType = AuthContext;
    
      constructor(props) {
        super(props);
        this.emailEl = React.createRef();
        this.passwordEl = React.createRef();
        this.fullNameEl = React.createRef();
      }
    
      switchModeHandler = () => {
        this.setState(prevState => {
          return { isLogin: !prevState.isLogin };
        });
      };
    
      submitHandler = event => {
        event.preventDefault();
        const email = this.emailEl.current.value;
        const password = this.passwordEl.current.value;
    //check null ?
        if (email.trim().length === 0 || password.trim().length === 0) {
          return;
        }
    //graphql syntax
        let requestBody = {
          query: `
            query Login($email: String!, $password: String!){
              login(email: $email, password: $password) {
                userId
                token
                tokenExpiration
              }
            }
          `,
          variables:{
            email: email,
            password: password
          } 
        };
    //graphql mutation syntax --root mutation 
    /*
    query: `
              mutation{
                createUser(userInput: {email: "${email}", password: "${password}"}) {
                  _id
                  email
                }
              }
            `
    */
        if (!this.state.isLogin) {
        const fullName = this.fullNameEl.current.value;
          requestBody = {
            query: `
              mutation CreateUser ($email: String!, $fullName:String! $password: String!) {
                createUser(userInput: {email: $email, fullName:$fullName password: $password}) {
                  _id
                  email
                }
              }
            `,
            variables: {
              email: email,
              password: password,
              fullName: fullName
            }
          };
        }
    
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
            if(resData.data.login.token){
                this.context.login(
                    resData.data.login.token,
                    resData.data.login.userId,
                    resData.data.login.tokenExpiration
                    )
            }
        })
          .catch(err => {
            console.log(err);
          });
      };
    render(){
        return(
            <form className="auth-form" onSubmit={this.submitHandler}>
            <div className="form-control-f">
              <label htmlFor="email">E-Mail</label>
              <input type="email" id="email" ref={this.emailEl} />
            </div>
            {this.state.isLogin ? '':
            <div className="">
              <label htmlFor="fullName">Ad Soyad</label>
              <input type="fullName" id="fullName" ref={this.fullNameEl} />
            </div> }
            <div className="form-control-f">
              <label htmlFor="password">Şifre</label>
              <input type="password" id="password" ref={this.passwordEl} />
            </div>
            <div className="form-actions">
              <button type="submit">Giriş Yap</button>
              <button type="button" onClick={this.switchModeHandler}>
                {this.state.isLogin ? 'Üye Ol' : 'Giriş Yap'}
              </button>
            </div>
          </form>
        );
    }
}
export default AuthPage;