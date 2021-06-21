import React, { Component } from 'react';
import {
    ListGroup,
    ListGroupItem,
    Container,

} from 'reactstrap';

class Student extends Component {
   
        state = {
            semester: [
                {
                    SemesterNumber: '1'
                },
                {
                    SemesterNumber: '2'
                },
            ]
        }
        render () {
        return (
        <Container>
            { this.state.semester.map(semester => (
            <ListGroup>
            <ListGroupItem active tag="button" action>{SemesterNumber}</ListGroupItem>
            <ListGroupItem tag="button" action>{SemesterNumber}</ListGroupItem>

          </ListGroup>
                      ))
                    }
        </Container>
        )
    }

} 

export default Student; 
