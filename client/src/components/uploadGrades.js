import React, { Component } from 'react';
import {
    InputGroup, 
    Input,
    Button,
    InputGroupAddon,

} from 'reactstrap';

import { withRouter } from "react-router";

function editData(e) {
  const el = e.target;
  const input = document.createElement("input");
  input.setAttribute("value", el.value);
  el.replaceWith(input);

  const save = function() {
    const previous = document.createElement(el.tagName.toLowerCase());
    previous.onclick = editData;
    previous.textContent = input.value;
    input.replaceWith(previous);
  };

  input.addEventListener('blur', save, {
    once: true,
  });
  input.focus();
}

for (const child of document.querySelectorAll('[data-editable]')) {
  child.onclick = editData;
}


class uploadGrades extends Component {
    state = {
        SID: "100-1941",
        CourseGrade : 75.0 ,
        students: []
    }

    
    

    async componentDidMount () {

        console.log(this.props)
        
        const SID = this.state.SID //localStorage.getItem('CourseID')
        fetch("http://localhost:5000/api/viewClassStudents/students/" + SID)
        .then(res => res.json())
        .then(
          (students) => {

            if (students.error) {
                alert('Error from database')
                console.log(students.error)
                return 
            }


            console.log(students)
            this.setState({ students });

          },
          (error) => {
            
            alert('Error fetching data')
            console.log(error)
            
          })
     

    }
    
    
    render () {

        return (
            <div>
              <br />
              <InputGroup>
                <Input placeholder="Student" />
                <InputGroupAddon addonType="append">
                </InputGroupAddon>
              </InputGroup>
              <br />
              <InputGroup>
                <Input placeholder="Grade" />
                <InputGroupAddon addonType="append">
                  <Button >Add Grade</Button>
                </InputGroupAddon>
              </InputGroup>
            </div>
          );
    }
}



export default withRouter(uploadGrades);