import React, { Component } from 'react';
import {
    Card,
    CardBody,
    CardTitle,
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

            SID: null,
            semester: [
            ]
        } 

        componentDidMount () {
            
             const user = JSON.parse(localStorage.getItem('user'))
            
    
            fetch("http://localhost:5000/api/viewClassStudents/student-courses/" + user.id)
            .then(res => res.json())
            .then(
              (semester) => {

                console.log(semester)
    
                if (semester.error) {
                    alert('Error from database')
                    console.log(semester.error)
                    return 
                }
    
                this.setState({ semester });
    
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

                                        <CardTitle tag="h5">{ semester._id }</CardTitle>
                                        <Link color="info" style={{ marginRight: '1em' }} to={"/course-grade/"+semester._id} component={Button}>
                                            View Grade 
                                        </Link>
                                        <Link color="info"  style={{ marginRight: '1em' }} to={"/course-details/"+semester._id} component={Button}>
                                          View Info
                                        </Link>
                                    
                                    </CardBody>
                                    
                                </Card>
                                <tb />
                            </Col>
                        ))
                    }
                    <p></p>
                    <a href="/change-password"> <strong>Change Password</strong></a>
                </Row>
            </Container>
        )
    }

} 

export default Student; 
