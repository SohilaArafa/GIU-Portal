import React, { Component } from 'react';
import { Button, FormGroup, Label, Input} from 'reactstrap';
import { withRouter } from 'react-router';


class ChangePassword extends Component {
    state = { 
        oldPassword: "",
        newPassword: "" 
    }

    updateState (key, value) {

      const newState = this.state
      newState[key] = value
  
      this.setState({ ...newState })
  
    }

    async changePass () {

       const user = JSON.parse(localStorage.getItem('user'))
       const { email } = user

       const { oldPassword, newPassword } = this.state
        // const{email} = this.props.match.params //localStorage.getItem('CourseID')
        fetch(`http://localhost:5000/api/changepass/updatePassword`,{
          method: "PUT",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, oldPassword, newPassword }) 
        })
        .then(res => res.json())
        .then(
          (user) => {

            if (user.error) {
                alert(JSON.stringify(user.error))
                return 
            }


            alert('Password Changed Successfully')
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
                <Label style={{marginLeft: '13em' }} for="Password">Old Password</Label>
                <Input style={{marginLeft: '13em',  maxWidth: '30%' }} value={this.state.oldPassword} onChange={(e) => this.updateState('oldPassword', e.target.value)}  type="password" name="password" id="examplePassword"  />
                </FormGroup>
             <br />
                <FormGroup>
                <Label style={{marginLeft: '13em' }} for="Password">New Password</Label>
                <Input style={{marginLeft: '13em',  maxWidth: '30%' }} value={this.state.newPassword} onChange={(e) => this.updateState('newPassword', e.target.value)}  type="password" name="password" id="examplePassword"  />
                </FormGroup>
              <br />
                <Button style={{marginLeft: '13em' }} color="primary" onClick={() => this.changePass()}>Submit</Button>{' '}
             </div>
    
  )

  }
}


export default withRouter(ChangePassword);




