import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { Button, FormGroup, ButtonGroup, Label, } from 'reactstrap';
import { withRouter } from 'react-router';

class ChangePassword extends Component {
    state = { 
            email: String,
            users: []
        
    }
    async componentDidMount () {
        const UserName = this.state.UserName //localStorage.getItem('CourseID')
        fetch("http://localhost:5000/api/ChangePassword/user" + UserName)
        .then(res => res.json())
        .then(
          (user) => {

            if (user.error) {
                alert('Error from database')
                console.log(user.error)
                return 
            }


            console.log(user)
            this.setState({ user });

          },
          (error) => {
            
            alert('Error fetching data')
            console.log(error)
            
          })
     

    }

    render(){

         return (
             <div>
                <InputGroup>
                <Input placeholder="username" />
                <InputGroupAddon addonType="append">
                <InputGroupText>@giu-uni.de</InputGroupText>
                </InputGroupAddon>
                </InputGroup>
              <br />
                <FormGroup>
                <Label for="Password">Current Password</Label>
                <Input type="password" name="password" id="examplePassword"  />
                </FormGroup>
              <br />
                <FormGroup>
                <Label for="Password">New Password</Label>
                <Input type="password" name="password" id="examplePassword" />
                </FormGroup>
                <ButtonGroup>
                <Button>Submit</Button>
                </ButtonGroup>
             </div>
    
  )

  }
}


export default withRouter(ChangePassword);
