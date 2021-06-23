import React, { Component } from 'react';
import {
    Table,
    Container,
    Row,
    Col
} from 'reactstrap';

import { withRouter } from "react-router";


class CourseGrades extends Component {
    state = {
        course : [
             {
        SemesterNumber : "Winter19" ,
        CourseGrade: 78.0 ,
        CID : "SE101",
     }

        ]
    }

    async componentDidMount () {
        
        const SemesterNumber = this.state.SemesterNumber //localStorage.getItem('SemesterNumber')
        fetch("http://localhost:5000/api/viewClassStudents/students/" + SemesterNumber)
        .then(res => res.json())
        .then(
          (course) => {

            if (course.error) {
                alert('Error from database')
                console.log(course.error)
                return 
            }


            console.log(course)
            this.setState({ course });

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
                    <Col xs="12"><h1>Results - { this.state.SemesterNumber } </h1></Col>
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
                                    this.state.course.map((course, i) => (
                                        <tr key={i}>
                                            <th scope="row">{ course.SID }</th>
                                            <td>{ course.Course.name   }</td>
                                            <td>{ course.CID }</td>
                                            <td>{ course.CourseGrade.$numberDecimal }</td>
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



export default withRouter(CourseGrades);