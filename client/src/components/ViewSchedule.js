import React, { Component } from 'react';
import {
    Table,
    Container,
    Row,
    Col
} from 'reactstrap';

import { withRouter } from "react-router";


class ViewSchedule extends Component {
    state = { 
            SemseterNumber: "Winter19",
            Schedules: [ {Day: "Sunday " ,Name: "Software Engineering ", CourseID: "SE101" , Slot:"First Period" , Location: "315" }]
        
    }
    async componentDidMount () {
        const { SID, SemesterNumber } = this.props.match.params
        fetch(`http://localhost:5000/api/CreateSchedule/slot/location/${SemesterNumber}/${SID}`)
        .then(res => res.json())
        .then(
          (Schedules) => {

            if (Schedules.error) {
                alert('Error from database')
                console.log(Schedules.error)
                return 
            }


            console.log(Schedules)
            this.setState({ Schedules });

          },
          (error) => {
            
            alert('Error fetching data')
            console.log(error)
            
          })
     

    }


    render(){

        return(
            <Container>
                <Row>
                    <Col xs="12"><h1>Your Schedule </h1></Col>
                    <Col xs="12" style={{ paddingTop: '2em' }}>
                        <Table>
                            <thead>
                                <tr>
                                    {/* <th>Name</th> */}
                                    <th>Day</th>
                                    <th>Course ID</th>
                                    <th>Slot</th>
                                    <th>Location</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.Schedules.map((Schedules, i) => (
                                        <tr key={i}>
                                            
                                            {/* <td>{ Schedules.Course && Schedules.Course.Name }</td> */}
                                            <th>{ Schedules.Day }</th>
                                            <td>{ Schedules.CourseID }</td>
                                            <td>{ Schedules.Slot }</td>
                                            <td>{ Schedules.Location }</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                
            </Container>
        )

}}


export default withRouter(ViewSchedule);