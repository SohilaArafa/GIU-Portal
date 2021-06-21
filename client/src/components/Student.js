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
                    SemesterNumber: 'Winter19'
                },
                {
                    SemesterNumber: 'Spring20'
                },
                {
                    SemesterNumber: 'Winter20'
                },
            ]
        } 

      /*  state = { 
            SID : '1002329' ,
            SemesterNumber : []
        
        }*/

        componentDidMount () {

            const SID = this.state.SID //localStorage.getItem('SID')
      //      const SemesterNumber = this.state.SemesterNumber //localStorage.getItem('SemesterNumber')
    
            fetch("http://localhost:5000/api/viewClassStudents/courses/" + SID)
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
            { this.state.semester.map(semester => (
            <ListGroup>
                <ListGroupItem  tag="button" action>{semester.SemesterNumber}</ListGroupItem>      
          </ListGroup>
                      ))
                    }
        </Container>
        )
    }

} 

export default Student; 
