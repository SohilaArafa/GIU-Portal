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

            Semester:[{SemesterNumber: '' ,
            AdminID: ""}]
                    
        } 


        componentDidMount () {

            const AdminID = this.state.AdminID //localStorage.getItem('AdminID')
      //      const SemesterNumber = this.state.SemesterNumber //localStorage.getItem('SemesterNumber')
    
            fetch("http://localhost:5000/api/Schedule/Semester/" + AdminID)
            .then(res => res.json())
            .then(
              (Semester) => {
    
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
                                        <CardTitle tag="h5">{ this.state.SemesterNumber }</CardTitle>
                                        <Link style={{ marginRight: '1em' }} to={"/create-schedule/"+Semester.SemesterNumber + '/' + Semester.AdminID} component={Button}>
                                            Create Schedule 
                                        </Link>
                                        <Link style={{ marginRight: '1em' }} to={"/edit-courses"} component={Button}>
                                            Update Course 
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

export default Admin;