import React, { Component } from 'react';
import {
    Table,
    Container,
    Row,
    Col
} from 'reactstrap';

class CourseStudents extends Component {
    state = {
        students: [
            {
                SID: '213',
                Name: 'Ahmed Mahmoud',
                CourseID: '321',
                CourseGrade: 77.55,
                SemesterNumber: 'Semester 1'
            },
            {
                SID: '214',
                Name: 'Ibrahim Hebo',
                CourseID: '321',
                CourseGrade: 80.51,
                SemesterNumber: 'Semester 1'
            },
            {
                SID: '215',
                Name: 'Farah Sheko',
                CourseID: '321',
                CourseGrade: 77.55,
                SemesterNumber: 'Semester 1'
            },
            {
                SID: '2166',
                Name: 'Hend Sabre',
                CourseID: '321',
                CourseGrade: 77.55,
                SemesterNumber: 'Semester 1'
            }
        ]
    }
    
    render () {

        return (
            <Container>
                <Row>
                    <Col xs="12"><h1>Software Engineering 101 - SE101</h1></Col>
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
                                    this.state.students.map(student => (
                                        <tr>
                                            <th scope="row">{ student.SID }</th>
                                            <td>{ student.Name }</td>
                                            <td>{ student.SemesterNumber }</td>
                                            <td>{ student.CourseGrade }</td>
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



export default CourseStudents;