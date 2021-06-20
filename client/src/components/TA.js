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
        courses: [
            {
                Name: 'Programming 101',
                CourseID: 'cs-12',
                TaID: '123',
            },
            {
                Name: 'Software Engineering 101',
                CourseID: 'se-101',
                TaID: '123',
            },
        ]
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
                                        <Link to={"/course-students/"+course.CourseID} component={Button}>
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