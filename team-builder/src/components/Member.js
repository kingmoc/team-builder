import React from 'react';
import { Card, CardContent, CardActionArea, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({

	form: {
        display: 'flex',
        flexDirection: 'column',
        width: '50%'
    },
    card: {
        width: 275,
        margin: '20px 0',
        background: '#5f9ea06e'
    }
})

const Member = (props) => {
    const classes = useStyles();
    // console.log(props.member)
    return (
        
        <Card className={classes.card}>
            <CardContent>
                <h3>{props.member.name}</h3>
                <p><span>Email:</span> {props.member.email}</p>
                <p><span>Role:</span> {props.member.role}</p>
            </CardContent>
            <CardActionArea>
                <Button onClick={() => {props.editMember(props.member)}} size='small' color="primary">Edit</Button>
                <Button onClick={() => {props.removeMember(props.member.id)}} size='small' color="secondary">Remove</Button>
            </CardActionArea>
        </Card>
    
    );
};

export default Member;