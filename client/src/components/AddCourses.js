import React, { Component } from 'react';
import {
    Input,
    Label,
    ButtonGroup,
    FormGroup,
    Button
} from 'reactstrap';

import {
    Link
} from 'react-router-dom'
import { withRouter } from "react-router";


class AddCourses extends Component {
   
        state = {

            CourseName: ""
                    
        } 


        updateState (key, value) {

            const newState = this.state
            newState[key] = value
        
            this.setState({ ...newState })
        
          }



    //     componentDidMount () {

    //         const CourseName = this.state.CourseName //localStorage.getItem('AdminID')
    //   //      const SemesterNumber = this.state.SemesterNumber //localStorage.getItem('SemesterNumber')
    
    //   fetch("http://localhost:5000/api/UpdateCourse/"+ CourseName)
    //         .then(res => res.json())
    //         .then(
    //           (Semester) => {
    
    //             if (Semester.error) {
    //                 alert('Error from database')
    //                 console.log(Semester.error)
    //                 return 
    //             }
    
    //             this.setState({ Semester });
    
    //           },
    //           (error) => {
                
    //             alert('Error fetching data')
    //             console.log(error)
                
    //           })
    
    //     }
render(){

            return (
                <div>
                   <FormGroup>
                   <Label style={{marginLeft: '13em' }} for="AddCourse">Course Name</Label>
                   <Input style={{marginLeft: '13em',  maxWidth: '30%' }} value={this.state.CourseName} onChange={(e) => this.updateState('CourseName', e.target.value)}  type="CourseName" name="CourseName" id="CourseName"  />
                   </FormGroup>
                   <ButtonGroup>
                   <Button style={{marginLeft: '13em'}}>Add</Button>
                   <br />
                   
                   <Button style={{marginLeft: '13em'}}>Update</Button>
                   <br />
                   <Button style={{marginLeft: '13em'}}>Delete</Button>
                   </ButtonGroup>
                </div>
       
     )
   
     }
   
    }  

export default withRouter (AddCourses);
    