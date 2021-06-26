import React, { Component } from 'react';
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Container,
    Row,
    Col,
    Button
} from 'reactstrap';
import {
    Link
} from 'react-router-dom'


class Student extends Component {
   
        state = {

            SID: '100-1941',
            semester: [
                {
                    SemesterNumber: 'Winter19' ,
                    SID: "100-1941"
                },
                {
                    SemesterNumber: 'Spring20',
                    SID: "100-1941"
                },
                {
                    SemesterNumber: 'Winter20',
                    SID: "100-1941"
                },
            ]
        } 

      /*  state = { 
            SID : '1002329' ,
            SemesterNumber : []
        
        }*/

        componentDidMount () {

            const SID = this.state.SID //localStorage.getItem('SID')
      //      const SemesterNumber = this.state.SemesterNumber //localStorage.getItem('SemesterNumber')
    
            fetch("http://localhost:5000/api/viewClassStudents/courses/" + SID)
            .then(res => res.json())
            .then(
              (courses) => {
    
                if (courses.error) {
                    alert('Error from database')
                    console.log(courses.error)
                    return 
                }
    
                this.setState({ courses });
    
              },
              (error) => {
                
                alert('Error fetching data')
                console.log(error)
                
              })
    
        }
 render () {
        return (
            <Container>
                <Row>
                    { this.state.semester.map((semester, i) => (
                            <Col xs="12" md="6" lg="4" key={i}>
                                <Card>
                                    <CardBody>
                                        <CardTitle tag="h5">{ semester.SemesterNumber }</CardTitle>
                                        <Link style={{ marginRight: '1em' }} to={"/course-grade/"+semester.SemesterNumber + '/' + semester.SID} component={Button}>
                                            View Grade 
                                        </Link>
                                       
                                        <Link style={{ marginRight: '1em' }} to={"/course-details/"+semester.SemesterNumber + '/' + semester.SID + '/' + semester.CourseMajor + '/' + semester.CourseID } component={Button}>
                                          View Major Courses 
                                        </Link>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        )
    }

} 

export default Student;