import React, { Component } from 'react';
import {
    Label,
    FormGroup,
    Input,
    Button
} from 'reactstrap';


class AddCourse extends Component {
   
        state = {

            CourseName: null,
            CourseID: null,
            TaID: null,
            CourseDetails: null
            
                    
        } 

      

        updateState (key, value) {
            const state = this.state
            this.setState({ ...state, [key]: value })
    
        }

        saveToDb () {

            fetch('http://localhost:5000/api/UpdateCourses/course', {
                method: 'POST', 
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(this.state) 
            })
            .then(res => res.json())
            .then(res => {
    
                if (res.error)  {
                    alert(res.error.message)
                    return 
                }
    
                return alert(res.success)
                
            }).catch(e => console.log(e))
            
        }

 render () {
        return (
            <div>
            <FormGroup>
            <Label style={{marginLeft: '13em' }} for="CourseID">Course ID</Label>
            <Input style={{marginLeft: '13em',  maxWidth: '30%' }} value={this.state.CourseID} onChange={e => this.updateState('CourseID', e.target.value)} />
            </FormGroup>
         <br />
            <FormGroup>
            <Label style={{marginLeft: '13em' }} for="CourseName">Course Name</Label>
            <Input style={{marginLeft: '13em',  maxWidth: '30%' }} value={this.state.CourseName} onChange={e => this.updateState('CourseName', e.target.value)} />
            </FormGroup>
        <br />
            <FormGroup>
            <Label style={{marginLeft: '13em' }} for="TAID">TA ID</Label>
            <Input style={{marginLeft: '13em',  maxWidth: '30%' }}  value={this.state.TaID} onChange={e => this.updateState('TaID', e.target.value)}/>
            </FormGroup>
        <br />
            <FormGroup>
            <Label style={{marginLeft: '13em' }} for="CourseDetails">Course Details</Label>
            <Input style={{marginLeft: '13em',  maxWidth: '30%' }}  value={this.state.CourseDetails} onChange={e => this.updateState('CourseDetails', e.target.value)} />
            </FormGroup>
        <br /> 
            <Button style={{marginLeft: '13em' }} color="primary" onClick={() => this.saveToDb()} > Add </Button>{' '}
        </div>
        )
    }

} 

export default AddCourse;