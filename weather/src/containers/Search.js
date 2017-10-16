import React, { Component } from 'react';
import { Row, Col, FormGroup, ControlLabel, FormControl, PageHeader } from 'react-bootstrap';
import { connect } from 'react-redux';
import { searchCity } from '../actions';
import Button from 'react-bootstrap-button-loader';

class Search extends Component {
    constructor (props) {
        super(props)

        this.state = {
            fetching: false,
            result: null,
            value: ''
        }
    }

    componentWillReceiveProps (props) {
        if (this.state.fetching && !props.fetching) {
            this.setState({fetching: false, result: props.result})
        }
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    submitSearch () {
        this.setState({fetching: true})
        this.props.searchCity(this.state.value)
    }

    renderResult () {
        if (this.state.result) {
            const result = this.state.result;
            return (
                <div>
                    <h3>{result.name} - {result.sys && result.sys.country}</h3>
                    <ul>
                        <li>Weather: {result.weather && result.weather[0] ? `${result.weather[0].main} (${result.weather[0].description})` : '-'}</li>
                        <li>Temperature: {result.main ? `${result.main.temp - 273.15}° Celsius` : '-'}</li>
                        <li>Humidity: {result.main ? `${result.main.humidity}%` : '-'}</li>
                        <li>Atmospheric pressure: {result.main ? `${result.main.pressure} hPa` : '-'}</li>
                    </ul>
                </div>
            )
        }
    }

    render () {
        return (
            <div className="container">
                <Row className="show-grid">
                    <Col xs={10} xsOffset={1}>
                        <PageHeader>Search Weather</PageHeader>
                        <form>
                            <FormGroup
                                controlId="formBasicText"
                            >
                                <ControlLabel>Type the name of a city:</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.value}
                                    placeholder="Recife"
                                    onChange={this.handleChange.bind(this)}
                                />
                                <FormControl.Feedback />
                            </FormGroup>
                            <Button bsStyle="primary" loading={this.state.fetching} onClick={this.submitSearch.bind(this)}>Search weather</Button>
                        </form>
                        {this.renderResult()}
                    </Col>
                </Row>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        result: state.search.result
    }
}

const mapDispatchToProps = (dispatch) => ({
    searchCity: (text) => dispatch(searchCity(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)