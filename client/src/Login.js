import React from 'react';
import api from './helpers/api';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {
    state = {
        username: '',
        password: ''
    }

    handleSubmit = async (ev) => {
        ev.preventDefault();
        console.log(this.state);

        try {
            const { username, password } = this.state
            
           
          const result = await api.post('/auth/login', {
              username,
              password,
            //   username: this.state.username,
            //   password: this.state.password
          });
          console.log(result);
         
          localStorage.setItem('token', result.data.token);
          this.props.history.push('/users')
        } catch(err) {
            console.log(err)
        }
    }

    handleChange = ev => {
        this.setState({
            [ev.target.name]: ev.target.value
        })
    }
    
    render() {
        return (
            <>
            <h3>Login</h3>

            <form onSubmit={this.handleSubmit}>
              <input type='text'
                     name='username'
                     onChange={this.handleChange}
                     value={this.state.username} 
                     placeholder= 'Username'
                     />
                <input type='password'
                     name='password'
                     onChange={this.handleChange}
                     value={this.state.password} 
                     placeholder= 'Password'
                     />
                     <button type='submit'>Login</button>
            </form>
            
            </>
        )
    }
}

export default withRouter(Login);