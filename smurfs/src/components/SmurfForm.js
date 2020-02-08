import React, { Component } from 'react';
import { connect } from 'react-redux';
import {pushSmurf, getSmurfs} from '../actions/Action';

const NAME = 'NAME';
const HEIGHT = 'HEIGHT';
const AGE = 'AGE';


class SmurfForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: '',
            height: '',
            age: ''
        };
    }

    handleSubmit(event){
        event.preventDefault();
        this.setState(this.props.pushSmurf(this.state));
    }

    handleChange(input, action){
        switch(action){
            case NAME:
                return {
                    ...this.state,
                    name: input
                };
            case HEIGHT:
                return {
                    ...this.state,
                    height: input
                };
            case AGE:
                return {
                    ...this.state,
                    age: input
                };
            default:
                return this.state;
        }
    }

    render() {
        return (
            <form onSubmit={event => this.handleSubmit(event)}>
                Name: <input
                    type="text"
                    value={this.state.name}
                    onChange={ref => this.setState(this.handleChange(ref.target.value, NAME))}
                />
                Height: <input
                    type="text"
                    value={this.state.height}
                    onChange={ref => this.setState(this.handleChange(ref.target.value, HEIGHT))}
                />
                Age: <input
                    type="text"
                    value={this.state.age}
                    onChange={ref => this.setState(this.handleChange(ref.target.value, AGE))}
                />
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

const mapStateToProps = state => ({
    data: state.data,
    isFetching: state.isFetching,
    error: state.error
});

export default connect(mapStateToProps, {pushSmurf, getSmurfs}) (SmurfForm);