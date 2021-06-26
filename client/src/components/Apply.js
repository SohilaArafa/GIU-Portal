import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Apply extends Component {

    render () {
            return (
                <Form>
                <Row form>
                    <Col md={6}>
                    <FormGroup>
                        <Label for="first name">First Name</Label>
                        <Input type="text" name="firstname" id="fname"  />
                    </FormGroup>
                    </Col>
                    <Col md={6}>
                    <FormGroup>
                        <Label for="last name">Last Name</Label>
                        <Input type="text" name="lastname" id="lname" />
                    </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Label for="Email"> Email </Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="forExample@gmail.com"/>
                </FormGroup>
                <FormGroup>
                    <Label for="Application Number">Address 2</Label>
                    <Input type="text" name="appNO" id="id" placeholder="100-1234"/>
                </FormGroup>
                <Row form>
                    <Col md={6}>
                    <FormGroup>
                        <Label for="Password">City</Label>
                        <Input type="text" name="pass" id="password"/>
                    </FormGroup>
                    </Col>
                    <Col md={6}>
                    <FormGroup>
                        <Label for="Profile">City</Label>
                        <Input type="text" name="userType" id="profile" placeholder="student"/>
                    </FormGroup>
                    </Col>
                    <Col md={4}>
                    <FormGroup>
                        <Label for="Date Of Birth">State</Label>
                        <Input type="date" name="dob" id="birthDate"/>
                    </FormGroup>
                    </Col>
                    <Col md={2}>
                    <FormGroup>
                        <Label for="Faculty"> Faculty </Label>
                        <Input type="text" name="faculty" id="faculty"/>
                    </FormGroup>  
                    </Col>
                </Row>
                <Button> Apply </Button>
                </Form>
                );
    }
}
export default Apply;