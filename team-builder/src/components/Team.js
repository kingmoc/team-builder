import React from 'react';
import Member from './Member'

const Team = (props) => {
    console.log(props)
    return (
        <div>
            {props.team.map(member => <Member />)}
        </div>
    );
};

export default Team;