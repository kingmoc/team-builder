import React from 'react';
import Member from './Member'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({

	cardCont: {
        // width: '80%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap'
    }
})

const Team = (props) => {
    const classes = useStyles();
    // console.log(props)
    return (
        <div className={classes.cardCont}>
            {props.team.map(member => {
                return (
                    <Member 
                        key={member.name} 
                        member={member} 
                        editMember={props.editMember} 
                        removeMember={props.removeMember}
                    />
                )
            })}
        </div>
    );
};

export default Team;