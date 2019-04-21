import React, { Component } from 'react';
import { Button, Container, Row, Col, Form, FormGroup, Input, Label } from 'reactstrap';

export default class OrganismsForm extends Component {


    state = {
        email: '',
        password: '',
        class: ''
    }

    clicked = () => {
        window.alert ('i\m clicked')
    }

    handleChanged = (event) => {
        console.log(event.target);
        console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        })
}

onSubmit = (e) => {
    e.preventDefault();
    console.log('state', this.state)
}

render(){
    return (
        <Container>
            <Row>
                <Col sm={{size:4, offset:4}}>
                    <Form onSubmit={this.onSubmit}>
                        <FormGroup row>
                            <Label htmlFor="email" sm="3">Email</Label>
                            <Col sm="9">
                                <Input type="email" name="email" id="email" onChange={this.handleChanged}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="password" sm="3">Password</Label>
                            <Col sm="9">
                                <Input type="password" name="password" id="password" onChange={this.handleChanged}/>    
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="select" sm="3">Select</Label>
                            <Col sm="9">
                                <Input type="select" name="class" id="select" onChange={this.handleChanged}>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </Input>
                            </Col>
                            <Col sm={{size:9, offset:3}}>
                                <Button type="submit">Submit</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

}