import React from 'react';

const Smurf = (props) => {
    return (
        <>
            <h1> Name: {props.data.name} </h1>
            <h2> Age: {props.data.age} </h2>
            <h2> Height: {props.data.height}</h2>
        </>
    );
};

export default Smurf;