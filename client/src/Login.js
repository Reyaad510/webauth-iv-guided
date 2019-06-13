import React from 'react';

class Login extends React.Component {
    state = {
        username: '',
        password: ''
    }

    handleSubmit = (ev) => {
        ev.preventDefault();
        console.log(this.state);
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
                <input type='text'
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

export default Login