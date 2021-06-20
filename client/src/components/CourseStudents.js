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
        CourseID: undefined,
        students: [
            {
                SID: '213',
                Name: 'Ahmed Mahmoud',
                CourseID: '321',
                CourseGrade: 77.55,
                SemesterNumber: '1'
            },
            {
                SID: '214',
                Name: 'Ibrahim Hebo',
                CourseID: '321',
                CourseGrade: 80.51,
                SemesterNumber: '1'
            },
            {
                SID: '215',
                Name: 'Farah Sheko',
                CourseID: '321',
                CourseGrade: 77.55,
                SemesterNumber: '1'
            },
            {
                SID: '2166',
                Name: 'Hend Sabre',
                CourseID: '321',
                CourseGrade: 77.55,
                SemesterNumber: '1'
            }
        ]
    }

    async componentDidMount () {
        
        const CourseID = this.props.match.params.course;
        await this.getStudentsFromDB(CourseID)
        // this.setState({ CourseID })

    }

    async getStudentsFromDB (CourseID) {
        console.log(CourseID)
    }

    
    render () {


        return (
            <Container>
                <Row>
                    <Col xs="12"><h1>Software Engineering 101 - SE101 { this.state.CourseID } </h1></Col>
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



export default withRouter(CourseStudents);