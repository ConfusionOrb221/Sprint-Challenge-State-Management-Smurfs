import React, { Component } from 'react';
import { connect } from 'react-redux';
import {pushSmurf, getSmurfs, delteSmurf, editSmurf} from '../actions/Action';

const NAME = 'NAME';
const HEIGHT = 'HEIGHT';
const AGE = 'AGE';
const ID = 'ID';

class SmurfForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            new: { 
                name: '',
                height: '',
                age: ''
            },
            id: null 
        };
    }

    editExisting(id){
        let edited = {};
        if(this.state.new.name != ''){
            edited.name = this.state.new.name;
        }
        if(this.state.new.height != ''){
            edited.height = this.state.new.height;
        }
        if(this.state.new.age != ''){
            edited.age = this.state.new.age;
        }
        this.setState({id: null, new: this.props.editSmurf(id, edited)});
    }

    deleteExisintg(id){
        this.setState({id: null, new: this.props.delteSmurf(id)});
    }

    handleSubmit(event){
        event.preventDefault();
        this.setState({id: null, new: this.props.pushSmurf(this.state.new)});
    }

    handleChange(input, action){
        switch(action){
            case NAME:
                return {
                    ...this.state,
                    new: {
                        ...this.state.new,
                        name: input
                    }
                };
            case HEIGHT:
                return {
                    ...this.state,
                    new: {
                        ...this.state.new,
                        height: input
                    }
                };
            case AGE:
                return {
                    ...this.state,
                    new: {
                        ...this.state.new,
                        age: input
                    }
                };
            case ID:
                return {
                    id: input,
                    new: {
                        ...this.state.new
                    }
                }
            default:
                return this.state;
        }
    }

    render() {
        return (
            <div>
                <h1>Submit New Smurf</h1>
                <form onSubmit={event => this.handleSubmit(event)}>
                    Name: <input
                        type="text"
                        value={this.state.new.name}
                        onChange={ref => this.setState(this.handleChange(ref.target.value, NAME))}
                    />
                    Height: <input
                        type="text"
                        value={this.state.new.height}
                        onChange={ref => this.setState(this.handleChange(ref.target.value, HEIGHT))}
                    />
                    Age: <input
                        type="text"
                        value={this.state.new.age}
                        onChange={ref => this.setState(this.handleChange(ref.target.value, AGE))}
                    />
                    <input type="submit" value="Submit"/>
                </form>
                ID: <input
                        type="text"
                        value={this.state.id}
                        onChange={ref => this.setState(this.handleChange(ref.target.value, ID))}
                    />
                    <button onClick={() => this.editExisting(this.state.id)}> Edit Exiting </button>
                    <button onClick={() => this.deleteExisintg(this.state.id)}> Delete Exisintg </button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    data: state.data,
    isFetching: state.isFetching,
    error: state.error
});

export default connect(mapStateToProps, {pushSmurf, getSmurfs, delteSmurf, editSmurf}) (SmurfForm);