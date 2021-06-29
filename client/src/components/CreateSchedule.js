import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class CreateSchedule extends Component {

    state = {
        AdminID: null,
        SID: null,
        CourseID: null,
        SemseterNumber: null,
        Location: null,
        Slot: null,
        Day: null
    }

    updateState (key, value) {
        const state = this.state
        this.setState({ ...state, [key]: value })

    }

    saveToDb () {

        fetch('http://localhost:5000/api/viewClassStudents/schedule', {
            method: 'POST', 
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state) 
        })
        .then(res => res.json())
        .then(res => {

            if (res.error)  {
                alert(res.error.message)
                return 
            }

            return alert(res.success)
            
        }) .catch(e => console.log(e))
        
    }


    render () {
            return (
                <Form>
                <Row form>
                    <Col md={6}>
                    <FormGroup>
                        <Label style={{ marginLeft: '13em' }} for="Admin ID">Admin ID</Label>
                        <Input style={{ marginLeft: '13em' }} value={this.state.AdminID} onChange={e => this.updateState('AdminID', e.target.value)} maxLength="30%" type="text" name="Admin Name" id="AdminID"  />
                    </FormGroup>
                    </Col>
                    <Col md={6}>
                    <FormGroup>
                        <Label style={{ marginLeft: '13em' }} for="Student Id ">Student Id</Label>
                        <Input style={{ marginLeft: '13em' }} value={this.state.SID} onChange={e => this.updateState('SID', e.target.value)} maxLength="30%" type="text" name="Student Id" id="SID" />
                    </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label style={{ marginLeft: '13em' }} for="Course Id"> Course Id </Label>
                            <Input style={{ marginLeft: '13em' }} value={this.state.CourseID} onChange={e => this.updateState('CourseID', e.target.value)} maxLength="30%" type="text" name="Course Id" id="CourseID"/>
                        </FormGroup>
                        <FormGroup>
                            <Label style={{ marginLeft: '13em' }} for="Semester Number">Semester Number</Label>
                            <Input style={{ marginLeft: '13em' }}  value={this.state.SemesterNumber} onChange={e => this.updateState('SemesterNumber', e.target.value)} maxLength="30%" type="text" name="Semester Number" id="SmesterNumber"/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={6}>
                    <FormGroup>
                        <Label style={{ marginLeft: '13em' }} for="location">location</Label>
                        <Input style={{ marginLeft: '13em' }} value={this.state.Location} onChange={e => this.updateState('Location', e.target.value)} maxLength="30%" type="text" name="location" id="Location"/>
                    </FormGroup>
                    </Col>
                    <Col md={6}>
                    <FormGroup>
                        <Label style={{ marginLeft: '13em' }} for="slot">slot</Label>
                        <Input style={{ marginLeft: '13em' }} value={this.state.Slot} onChange={e => this.updateState('Slot', e.target.value)} type="text" name="slot" id="Slot">
                        </Input>
                    </FormGroup>
                    </Col>
                    <Col md={4}>
                    <FormGroup>
                        <Label style={{ marginLeft: '13em' }} for="day">day</Label>
                        <Input style={{ marginLeft: '13em' }} value={this.state.Day} onChange={e => this.updateState('Day', e.target.value)} type="text" name="day" id="Day"/>
                    </FormGroup>
                    </Col>
                    
                </Row>
                    <p></p>
                    <Button style={{ marginLeft: '13em' }} onClick={() => this.saveToDb()} >  Create </Button>
                </Form>
                );
    }
}
export default CreateSchedule;
