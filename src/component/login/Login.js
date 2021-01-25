import React, { Component } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import AuthService from '../../serviceAPI/AuthService';


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.authenticationUser = this.authenticationUser.bind(this);
        this.authenticationChange = this.authenticationChange.bind(this);
    }
    authenticationUser(event) {
        event.preventDefault();

        AuthService.login(this.state.username, this.state.password);
    }
    authenticationChange(event) {
        const name = event.target.name;
        this.setState({
            [name]: event.target.value
        });
    }
    render() {
        return (
            <Container className="login-container">

                <Form id="loginFormId" onSubmit={this.authenticationUser}>
                    <Card style={{ width: "38rem", margin: "0 auto" }} className={"border border-dark bg-dark text-white"}>
                        <Card.Header style={{ textAlign: "center", fontSize: "24px" }}>
                            Login
                        </Card.Header>
                        <Card.Body>
                            <Form.Group controlId="formEmail" >
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="text" required
                                    name="username"
                                    value={this.state.username}
                                    onChange={this.authenticationChange}
                                    className={"bg-dark text-white"}
                                    placeholder="Enter Username/Email" />
                            </Form.Group>

                            <Form.Group controlId="formPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" required
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.authenticationChange}
                                    className={"bg-dark text-white"}
                                    placeholder="Enter Password" />
                            </Form.Group>
                        </Card.Body>
                        <Card.Footer className="text-center">
                            <Button variant="primary" type="submit">Submit</Button>
                        </Card.Footer>
                    </Card>
                </Form>
            </Container>

        )
    }

}
