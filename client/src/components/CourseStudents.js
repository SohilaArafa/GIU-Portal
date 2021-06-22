import React, { Component } from 'react';
import {
    Table,
    Container,
    Row,
    Col
} from 'reactstrap';

import { withRouter } from "react-router";


class CourseStudents extends Component {
    state = {
        CourseID: "SE101",
        students: []
    }

    async componentDidMount () {
        
        const CourseID = this.state.CourseID //localStorage.getItem('CourseID')
        fetch("http://localhost:5000/api/viewClassStudents/students/" + CourseID)
        .then(res => res.json())
        .then(
          (students) => {

            if (students.error) {
                alert('Error from database')
                console.log(students.error)
                return 
            }


            console.log(students)
            this.setState({ students });

          },
          (error) => {
            
            alert('Error fetching data')
            console.log(error)
            
          })
     

    }

    // async getStudentsFromDB (CourseID) {
    //     console.log(CourseID)
    // }

    
    render () {


        return (
            <Container>
                <Row>
                    <Col xs="12"><h1>Software Engineering 101 - { this.state.CourseID } </h1></Col>
                    <Col xs="12" style={{ paddingTop: '2em' }}>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Student ID</th>
                                    <th>Name</th>
                                    <th>Semester</th>
                                    <th>Grade</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.students.map((student, i) => (
                                        <tr key={i}>
                                            <th scope="row">{ student.SID }</th>
                                            <td>{ `${student.Student.fname} ${student.Student.lname}`  }</td>
                                            <td>{ student.SemesterNumber }</td>
                                            <td>{ student.CourseGrade.$numberDecimal }</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                
            </Container>
        )
    }
}



export default withRouter(CourseStudents);