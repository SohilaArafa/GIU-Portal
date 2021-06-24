import React, { Component } from 'react';
import {
    Table,
    Container,
    Row,
    Col,
    Button
} from 'reactstrap';

import { withRouter } from "react-router";
import uploadGrades from './uploadGrades';

class CourseStudents extends Component {
    state = {
        course: {},
        students: []
    }

    activateEdit (student, index, off) {
        
        const students = this.state.students
        
        student.isEditMode = off ? false : true
        students.splice(index, 1, student)

        this.setState({ students })

    }

    saveToDb (student, index) {

        this.activateEdit(student, index, true)

        fetch('http://localhost:5000/api/viewClassStudents/updateGrade', {
            method: 'PUT', 
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(student) 
        })
        .then(res => res.json())
        .then(res => {
            if (res.error)  {
                console.log(res)
                alert(res.error.message)
                return 
            }
            return alert(res.success)
        }).catch(console.log)
        
    }

    updateGrade (student, index, event) {

        const students = this.state.students
        
        student.CourseGrade.$numberDecimal = event.target.value
        students.splice(index, 1, student)

        this.setState({ students })

    }

    componentDidMount () {

        
        const { CourseID } = this.props.match.params //localStorage.getItem('CourseID')
        fetch(`http://localhost:5000/api/viewClassStudents/students/${CourseID}`)
        .then(res => res.json())
        .then(
          (data) => {

            const { students, course } = data

            console.log(data)

            if (data.error) {
                alert('Error from database')
                console.log(students.error)
                return 
            }

            this.setState({ students, course });

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

        const { course, students } = this.state

        return (
            <Container>
                <Row>
                    <Col xs="12"><h1>{ course.Name } - { course.CourseID } </h1></Col>
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
                                    students.map((student, i) => (
                                        <tr key={i}>
                                            <th scope="row">{ student.SID }</th>
                                            <td>{ `${student.Student.fname} ${student.Student.lname}`  }</td>
                                            <td>{ student.SemesterNumber }</td>
                                            <td>
                                                {
                                                    student.isEditMode ? 
                                                       (<input type="number" value={ student.CourseGrade.$numberDecimal } onChange={ e => this.updateGrade(student, i, e) } />)
                                                    :  <span>{ student.CourseGrade.$numberDecimal }</span>
                                                }
                                            </td>
                                            <td> 
                                                {
                                                    student.isEditMode ? 
                                                    (<Button type="primary" onClick={() => this.saveToDb(student, i)}>Save</Button>) 
                                                    :   (<Button onClick={() => this.activateEdit(student, i)}>Edit</Button>) 
                                                }  
                                            </td>
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