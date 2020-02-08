import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {getSmurfs} from '../actions/Action';
import Smurf from './Smurf';

const Smurfs = (props) => {

    useEffect(() =>{
        props.getSmurfs();
    },[]);

    const displaySmurfs = smurfs =>{
        return smurfs.map(res =>(
            <Smurf data={res} />
        ));
    };

    return (
        <div>
            {displaySmurfs(props.data)}
            {console.log(props)}
        </div>
    );
};

const mapStateToProps = state => ({
    data: state.data,
    isFetching: state.isFetching,
    error: state.error
});

export default connect(mapStateToProps, {getSmurfs}) (Smurfs);