import React, { Component } from 'react';
import {
    Container, 
    Label,
    FormGroup,
    Input,
    ButtonGroup,
    Button
} from 'reactstrap';
import {
    Link
} from 'react-router-dom'


class AddCourses extends Component {
   
        state = {

            CourseName: '100-1941',
            Semester:[{SemesterNumber: 'Winter19' ,
            AdminID: "100-1941"}]
                    
        } 

        componentDidMount () {

            const CourseName = this.state.CourseName //localStorage.getItem('AdminID')
      //      const SemesterNumber = this.state.SemesterNumber //localStorage.getItem('SemesterNumber')
    
            fetch("http://localhost:5000/api/CreateSchedule/Semester/" + CourseName)
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
            <Container>
                   <FormGroup>
                   <Label style={{marginLeft: '13em' }} for="AddCourse">Course Name</Label>
                   <Input style={{marginLeft: '13em',  maxWidth: '30%' }} value={this.state.CourseName} onChange={(e) => this.updateState('CourseName', e.target.value)}  type="CourseName" name="CourseName" id="CourseName"  />
                   </FormGroup>
                   <ButtonGroup>
                   <Link style={{ marginRight: '1em' }} to={"/add/"} component={Button}>
                        Add Course
                    </Link>
                   <br />
                   <Link style={{ marginRight: '1em' }} to={"/update/"} component={Button}>
                        Update Course 
                    </Link>
                   <br />
                   <Link style={{ marginRight: '1em' }} to={"/delete/"} component={Button}>
                        Delete Course 
                    </Link>
                   </ButtonGroup>               
            </Container>
        )
    }

} 

export default AddCourses;