import React, { Component } from 'react';
import { Jumbotron, Button, Row, Col } from 'react-bootstrap';
import {
    Link
} from 'react-router-dom';

class Home extends Component {

    render () {
        return (
            <div class="container">
                <Row className="show-grid">
                    <Col xs={10} xsOffset={1}>
                        <Jumbotron>
                            <h1>City Weather</h1>
                            <p>This is a simple web app, which allow the users to search for the currently weather conditions
                                using the name of a city.</p>
                            <p><Link to="/search"><Button bsStyle="primary">Search</Button></Link></p>
                        </Jumbotron>
                    </Col>
                </Row>
            </div>
        )
    }
    
}

export default Home;