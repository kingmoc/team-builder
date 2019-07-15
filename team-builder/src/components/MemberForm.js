
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({

	form: {
        display: 'flex',
        flexDirection: 'column'
    }
})

const MemberForm = () => {
    const classes = useStyles();

    return (
        <>
            <form className={classes.form}>

                <TextField label="Name" variant="filled"/>
                <TextField label="Email" variant="filled"/>
                <TextField label="Role" variant="filled"/>                

            </form>
        </>
    );
};

export default MemberForm;