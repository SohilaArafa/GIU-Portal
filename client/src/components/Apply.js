import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Apply extends Component {

    state = {
        fname: null,
        lname: null,
        email: null,
        id: null,
        password: null,
        profile: null,
        dob: null,
        faculty: null
    }

    updateState (key, value) {
        const state = this.state
        this.setState({ ...state, [key]: value })

    }

    saveToDb () {

        fetch('http://localhost:5000/api/viewClassStudents/user', {
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
            
        }).catch(e => console.log(e))
        
    }


    render () {
            return (
                <Form>
                <Row form>
                    <Col md={6}>
                    <FormGroup>
                        <Label style={{ marginLeft: '13em' }} for="first name">First Name</Label>
                        <Input style={{ marginLeft: '13em' }} value={this.state.fname} onChange={e => this.updateState('fname', e.target.value)} maxlength="30%" type="text" name="firstname" id="fname"  />
                    </FormGroup>
                    </Col>
                    <Col md={6}>
                    <FormGroup>
                        <Label style={{ marginLeft: '13em' }} for="last name">Last Name</Label>
                        <Input style={{ marginLeft: '13em' }} value={this.state.lname} onChange={e => this.updateState('lname', e.target.value)} maxlength="30%" type="text" name="lastname" id="lname" />
                    </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label style={{ marginLeft: '13em' }} for="Email"> Email </Label>
                            <Input style={{ marginLeft: '13em' }} value={this.state.email} onChange={e => this.updateState('email', e.target.value)} maxlength="30%" type="email" name="email" id="exampleEmail" placeholder="@student.giu-uni.de"/>
                        </FormGroup>
                        <FormGroup>
                            <Label style={{ marginLeft: '13em' }} for="Application Number">Application Number</Label>
                            <Input style={{ marginLeft: '13em' }}  value={this.state.id} onChange={e => this.updateState('id', e.target.value)} maxlength="30%" type="text" name="appNO" id="appID" placeholder="100-1234"/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={6}>
                    <FormGroup>
                        <Label style={{ marginLeft: '13em' }} for="Password">Password</Label>
                        <Input style={{ marginLeft: '13em' }} value={this.state.password} onChange={e => this.updateState('password', e.target.value)} maxlength="30%" type="password" name="pass" id="password"/>
                    </FormGroup>
                    </Col>
                    <Col md={6}>
                    <FormGroup>
                        <Label style={{ marginLeft: '13em' }} for="Profile">Profile</Label>
                        <Input style={{ marginLeft: '13em' }} value={this.state.profile} onChange={e => this.updateState('profile', e.target.value)} type="select" name="select" id="Profile">
                        <option>Student</option>
                        <option>TA</option>
                        <option>Admin</option>
                        </Input>
                    </FormGroup>
                    </Col>
                    <Col md={4}>
                    <FormGroup>
                        <Label style={{ marginLeft: '13em' }} for="Date Of Birth">Birth Date</Label>
                        <Input style={{ marginLeft: '13em' }} value={this.state.dob} onChange={e => this.updateState('dob', e.target.value)} type="date" name="dob" id="birthDate"/>
                    </FormGroup>
                    </Col>
                    <Col md={2}>
                    <FormGroup>
                        <Label style={{ marginLeft: '13em' }} for="Faculty"> Faculty </Label>
                        <Input style={{ marginLeft: '13em' }} value={this.state.faculty} onChange={e => this.updateState('faculty', e.target.value)} type="text" name="Faculty" id="Faculty"/>
                    </FormGroup>  
                    </Col>
                    
                </Row>
                    <p></p>
                    <Button style={{ marginLeft: '13em' }} onClick={() => this.saveToDb()} >  Apply </Button>
                </Form>
                );
    }
}
export default Apply;