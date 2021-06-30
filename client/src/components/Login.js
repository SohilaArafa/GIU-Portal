import React, { Component } from 'react';
import { Button, FormGroup,  Label, Input } from 'reactstrap';
import { withRouter } from 'react-router';


class Login extends Component {
  state = { 
      email: "",
      password: ""
  }


  updateState (key, value) {

    const newState = this.state
    newState[key] = value

    this.setState({ ...newState })

  }

  login () {

    
    const { email, password } = this.state


    fetch(`http://localhost:5000/api/changepass/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password }) 
    })
    .then(res => res.json()) 
    .then(
      (user) => {

        console.log(user)
        localStorage.setItem('user', JSON.stringify(user))

        if(user.profile === 'student') {
          this.props.history.push('/students')
        } else if (user.profile === 'ta'){
          this.props.history.push('/ta')
        }  else if (user.profile === 'Admin'){
          this.props.history.push('/Admin')
        }

        if (user.error) {
            alert('Error from database')
            console.log(user.error)
            return 
        }


        console.log(user)

      },
      (error) => {
        
        alert('Error fetching data')
        console.log(error)
        
      })

  }
        
     render()
    {

        return (
            <div>
                <FormGroup>
                <Label style={{marginLeft: '13em'}} for="Email">Email</Label>
                <Input style={{marginLeft: '13em', maxWidth: '30%' }} value={this.state.email} onChange={(e) => this.updateState('email', e.target.value)} type="Email" name="Email" id="exampleEmail"  />
                </FormGroup>
             <br />
                <FormGroup>
                <Label style={{marginLeft: '13em' }} for="Password">Password</Label>
                <Input style={{marginLeft: '13em',  maxWidth: '30%' }} value={this.state.password} onChange={(e) => this.updateState('password', e.target.value)} type="password" name="password" id="examplePassword"  />
                </FormGroup>
              <br />
               {<Button color="primary" style={{ marginLeft: '13em' }} onClick={() => this.login()} >
                    Submit
                </Button>}
                <p></p>
                <a style={{marginLeft: '13em' }} href="/apply"> <strong>Not Registered Yet?</strong></a>
            </div>
  )
}

}

export default withRouter(Login);