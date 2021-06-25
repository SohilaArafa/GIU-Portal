import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { Button, FormGroup, ButtonGroup, Label, } from 'reactstrap';
import { withRouter } from 'react-router';


class ChangePassword extends Component {
    state = { 
            email: "",
            users: []
        
    }
    async componentDidMount () {
        const{email} = this.props.match.params //localStorage.getItem('CourseID')
        fetch(`http://localhost:5000/api/ChangePassword/${email}`)
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
               <FormGroup>
                <Label style={{marginLeft: '13em'}} for="Email">Email</Label>
                <Input style={{marginLeft: '13em', maxWidth: '30%' }} type="Email" name="Email" id="exampleEmail"  />
                </FormGroup>
             <br />
                <FormGroup>
                <Label style={{marginLeft: '13em' }} for="Password">Old Password</Label>
                <Input style={{marginLeft: '13em',  maxWidth: '30%' }} type="password" name="password" id="examplePassword"  />
                </FormGroup>
             <br />
                <FormGroup>
                <Label style={{marginLeft: '13em' }} for="Password">New Password</Label>
                <Input style={{marginLeft: '13em',  maxWidth: '30%' }} type="password" name="password" id="examplePassword"  />
                </FormGroup>
              <br />
                <Button style={{marginLeft: '13em' }} color="primary">Submit</Button>{' '}
             </div>
    
  )

  }
}


export default withRouter(ChangePassword);
