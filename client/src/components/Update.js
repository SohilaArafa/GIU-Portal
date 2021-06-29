import React, { Component } from 'react';
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Container,
    Row,
    Col,
    Label,
    FormGroup,
    Input,
    Button
} from 'reactstrap';
import {
    Link
} from 'react-router-dom'


class Update extends Component {
   
        state = {

            CourseName: '100-1941',
            Semester:[{CourseName: "" , CourseID: "" , TaID: "" , CourseDetails: "" , }]
                    
        } 

      /*  state = { 
            SID : '1002329' ,
            SemesterNumber : []
        
        }*/

        componentDidMount () {

            const CourseName = this.state.CourseName //localStorage.getItem('AdminID')
      //      const SemesterNumber = this.state.SemesterNumber //localStorage.getItem('SemesterNumber')
    
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
            <Input style={{marginLeft: '13em',  maxWidth: '30%' }}   />
            </FormGroup>
         <br />
            <FormGroup>
            <Label style={{marginLeft: '13em' }} for="CourseName">Course Name</Label>
            <Input style={{marginLeft: '13em',  maxWidth: '30%' }}   />
            </FormGroup>
        <br />
            <FormGroup>
            <Label style={{marginLeft: '13em' }} for="CourseDetails">Course Details</Label>
            <Input style={{marginLeft: '13em',  maxWidth: '30%' }}   />
            </FormGroup>
        <br /> 
            <Button style={{marginLeft: '13em' }} color="primary" >Submit</Button>{' '}
        </div>
           
        )  
                        
    }

} 

export default Update;