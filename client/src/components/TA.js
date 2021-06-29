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
        TaID: '100-1234', 
        courses: [
           
        ]
    }

    componentDidMount () {

        const TaID = this.state.TaID //localStorage.getItem('TaID')

        fetch("http://localhost:5000/api/viewClassStudents/courses/" + TaID)
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