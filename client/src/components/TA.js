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

class TA extends Component {
    state = {
        TaID: null, 
        courses: [ ]
    }

    componentDidMount () {

        const user = JSON.parse(localStorage.getItem('user'))
        console.log(user)

        fetch("http://localhost:5000/api/viewClassStudents/courses/" + user.id)
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
                    <h1>Your Courses</h1>
                    { !this.state.courses.length && (<p>No courses assigned</p>) }
                    { this.state.courses.map((course, i) => (
                            <Col xs="12" md="6" lg="4" key={i}>
                                <Card>
                                    <CardBody>
                                        <CardTitle tag="h5">{ course.Name }</CardTitle>
                                        <CardSubtitle tag="h6" className="mb-2 text-muted">
                                            { course.CourseID }</CardSubtitle>
                                        <Link color="info" to={"/course-students/"+course.CourseID} component={Button}>
                                            View Students
                                        </Link>
                                        {/* <Link to={'/upload-grade/'+ course.CourseID} component={Button}>
                                            Edit Grades
                                        </Link> */}
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



export default TA;