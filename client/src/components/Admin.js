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


class Admin extends Component {
   
        state = {

            AdminID: '100-2345',
            Semester:[{SemesterNumber: 'Winter19' ,
            AdminID: "100-2345"}]
                    
        } 


        componentDidMount () {

            const AdminID = this.state.AdminID 
    
            fetch("http://localhost:5000/api/Schedule/semester/" + AdminID)
            .then(res => res.json())
            .then(
              (Semester) => {

                console.log(Semester)
    
                if (Semester.error) {
                    alert('Error from database')
                    console.log(Semester.error)
                    return 
                }
    
                this.setState({ Semester });
    
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
                    { this.state.Semester.map((Semester, i) => (
                            <Col xs="12" md="6" lg="4" key={i}>
                                <Card>
                                    <CardBody>
                                        <CardTitle tag="h5">{ Semester.SemseterNumber }</CardTitle>
                                        <Link color="info" style={{ marginRight: '1em' }} to={"/create-schedule/"+Semester.SemesterNumber + '/' + Semester.AdminID} component={Button}>
                                            Create Schedule 
                                        </Link>
                                        <Link color="info" style={{ marginRight: '1em' }} to={"/edit-courses"} component={Button}>
                                            Update Course 
                                        </Link>
                                    </CardBody>
                                </Card>
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

export default Admin;