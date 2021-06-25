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
          users: []
      
  }

async componentDidMount () {
  const email = this.props.match.params//localStorage.getItem('Email')
  fetch(`http://localhost:5000/api/Login/${email}`)
  .then(res => res.json())
  .then(
    (users) => {

      if (users.error) {
          alert('Error from database')
          console.log(users.error)
          return 
      }


      console.log(users)
      this.setState({ users });

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
                <Input style={{marginLeft: '13em', maxWidth: '30%' }} type="Email" name="Email" id="exampleEmail"  />
                </FormGroup>
             <br />
                <FormGroup>
                <Label style={{marginLeft: '13em' }} for="Password">Password</Label>
                <Input style={{marginLeft: '13em',  maxWidth: '30%' }} type="password" name="password" id="examplePassword"  />
                </FormGroup>
              <br />
               {/* <Link style={{ marginRight: '1em' }} to={"/Login/"+semester.SemesterNumber + '/' + semester.SID + '/' + semester.CourseMajor + '/' + semester.CourseID } component={Button}>
                    Submit
                </Link> */}
            </div>
  )
}

}

export default withRouter(Login);

