
import React from 'react';
import api from './helpers/api';

class Signup extends React.Component {
    
    state = {
        username: '',
        password: '',
        fullname: ''
    }


    handleSubmit = async (ev) => {
        ev.preventDefault();
        console.log(this.state);

        try {
            const { username, password, fullname } = this.state
           
          const result = await api.post('/auth/register', {
              fullname,
              username,
              password,
            //   username: this.state.username,
            //   password: this.state.password
          });
          console.log(result);
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
            <h3>Signup</h3>


            <form onSubmit={this.handleSubmit}>
            <input type='text'
                     name='fullname'
                     onChange={this.handleChange}
                     value={this.state.fullname} 
                     placeholder= 'Full Name'
                     />
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
                     <button type='submit'>Signup</button>
            </form>
            </>
        )
    }
}

export default Signup