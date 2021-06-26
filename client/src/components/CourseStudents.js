import React, { Component } from 'react';
import {
    Table,
    Container,
    Row,
    Col,
    Button
} from 'reactstrap';

import { withRouter } from "react-router";
//import uploadGrades from './uploadGrades';

class CourseStudents extends Component {
    state = {
        course: {},
        students: [],
    }

    activateEdit (student, index, off) {
        
        const students = this.state.students
        
        student.isEditMode = off ? false : true
        student.tempGrade = student.CourseGrade.$numberDecimal
       // student.isEditMode = true ? this.setState({temp}) : 
        students.splice(index, 1, student)

        this.setState({ students })

    }

    saveToDb (student, index) {

        student.CourseGrade.$numberDecimal = student.tempGrade
        this.activateEdit(student, index, true)

        console.log('getting stuff')

        fetch('http://localhost:5000/api/viewClassStudents/updateGrade', {
            method: 'PUT', 
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(student) 
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

    updateGrade (student, index, event) {

       // const temp = this.input.value
        const students = this.state.students
        
        // student.CourseGrade.$numberDecimal = event.target.value
        student.tempGrade = event.target.value
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
                                    <th> &nbsp; </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    students.map((student, i) => (
                                        <tr key={i}>
                                            <th scope="row">{ student.SID }</th>
                                            <td>{ `${student.Student.fname} ${student.Student.lname}`  }</td>
                                            <td>{ student.SemesterNumber }</td>
                                            <td style={{ width: '100px', maxWidth: '100px' }}>
                                                {
                                                    student.isEditMode ?  //student.temp - CourseGrade.$numberDecimal
                                                       (<input type="number" style={{ maxWidth: '100%' }} value={ student.tempGrade } onChange={ e => this.updateGrade(student, i, e) } />)
                                                    :  <span>{ student.CourseGrade.$numberDecimal }</span>
                                                }
                                            </td>
                                            <td style={{ width: '150px' }}> 
                                                {
                                                    student.isEditMode ? 
                                                        (
                                                            <div>
                                                                <Button color="success" onClick={() => this.saveToDb(student, i)}>Save</Button>
                                                                <Button color="danger" onClick={() => this.activateEdit(student, i, true)}>x</Button>
                                                            </div>
                                                        ) 
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