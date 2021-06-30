import React, { Component } from 'react';
import {
    Label,
    FormGroup,
    Input,
    Button
} from 'reactstrap';


class Update extends Component {
   
        state = {

            CourseName: null,
            CourseID: null,
            CourseDetails: null
        } 

      

        updateState (key, value) {
            const state = this.state
            this.setState({ ...state, [key]: value })
    
        }

        componentDidMount () {

            const CourseName = this.state.CourseName 
    
            fetch("http://localhost:5000/api/Update/" + CourseName)
            .then(res => res.json())
            .then(
              (Semester) => {
    
                if (Semester.error) {
                    alert('Error from database')
                    console.log(Semester.error)
                    return 
                }
    
                this.setState({ Semester });
    
              },
              (error) => {
                
                alert('Error fetching data')
                console.log(error)
                
              })
    
        }
 render () {
        return (
        <div>
            <FormGroup>
            <Label style={{marginLeft: '13em' }} for="CourseID">Course ID</Label>
            <Input style={{marginLeft: '13em',  maxWidth: '30%' }} value={this.state.CourseID} onChange={e => this.updateState('CourseID', e.target.value)}   />
            </FormGroup>
         <br />
            <FormGroup>
            <Label style={{marginLeft: '13em' }} for="CourseName">Course Name</Label>
            <Input style={{marginLeft: '13em',  maxWidth: '30%' }} value={this.state.CourseName} onChange={e => this.updateState('CourseName', e.target.value)}   />
            </FormGroup>
        <br />
            <FormGroup>
            <Label style={{marginLeft: '13em' }} for="CourseDetails">Course Details</Label>
            <Input style={{marginLeft: '13em',  maxWidth: '30%' }}  value={this.state.CourseDetails} onChange={e => this.updateState('CourseDetails', e.target.value)}  />
            </FormGroup>
        <br /> 
            <Button style={{marginLeft: '13em' }} color="primary" >Submit</Button>{' '}
        </div>
           
        )  
                        
    }

} 

export default Update;