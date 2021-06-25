import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { Button, FormGroup, ButtonGroup, Label } from 'reactstrap';
import { withRouter } from 'react-router';
import {
  Link
} from 'react-router-dom'

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


    fetch(`http://localhost:5000/api/changepass/login/`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password }) 
    })
    .then(res => res.json())
    .then(
      (user) => {

        if (user.error) {
            alert('Error from database')
            console.log(user.error)
            return 
        }


        console.log(user)
        // this.setState({ users });

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
               {<Button style={{ marginRight: '1em' }} onClick={() => this.login()} >
                    Submit
                </Button>}
            </div>
  )
}

}

export default withRouter(Login);

