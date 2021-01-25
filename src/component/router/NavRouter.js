import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Header from './header/Header';
import { Container, Row } from 'react-bootstrap';
import Login from '../login/Login';
import Service from '../service/Service';
import Product from '../product/Product';
import Home from '../home/Home';

export default class NavRouter extends Component {
    render() {
        let marginTop = {
            marginTop: "20px"
        };
        return (
            <Router>
                <Header />
                <Container >
                    <Row>
                        <div className="col-lg-12" style={marginTop}>
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route exact path="/product" component={Product} />
                                <Route exact path="/login" component={Login} />
                                <Route exact path="/service" component={Service} />
                            </Switch>
                        </div>
                    </Row>
                </Container>
            </Router>
        );
    }
}