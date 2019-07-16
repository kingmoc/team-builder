
import React, { useState, useEffect } from 'react';
import { TextField, Select, MenuItem, FormHelperText, Button, ButtonGroup } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({

	form: {
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
        margin:' 0 auto'
    }
})

const MemberForm = (props) => {
    // console.log(props)
    const classes = useStyles();

    const [member, setMember] = useState({
        name: "",
        email: "",
        role: ""
    })

    useEffect(() => {
        setMember(props.memberToEdit)
    },[props.memberToEdit])

    const changeHandler = e => {
        // console.log(member)

        setMember({
            ...member, [e.target.name]: e.target.value
        })
    }

    const submitHandler = e => {
        e.preventDefault()
        console.log('works')
        props.addMember(member)
        setMember({
            name: "",
            email: "",
            role: ""
        })
    }

    
    return (
        <>
        {/* {console.log(member)} */}
            <form className={classes.form} onSubmit={submitHandler}>

                <TextField 
                    label="Name" 
                    variant="filled"
                    value={member.name}
                    name="name"
                    onChange={changeHandler}
                    margin='normal'
                />
                <TextField 
                    label="Email" 
                    variant="filled"
                    value={member.email}
                    name="email"
                    onChange={changeHandler}
                    margin='normal'
                />
                <Select name="role" onChange={changeHandler} value={member.role}>
                    
                    <MenuItem value="Backend Engineer">Backend Engineer </MenuItem>
                    <MenuItem value="Frontend Engineer">Frontend Engineer</MenuItem>
                    <MenuItem value="Dev-Ops">Dev-Ops</MenuItem>                
                    <MenuItem value="Network Admin">Network Admin</MenuItem>                
                    <MenuItem value="Exective">Exective </MenuItem>                
                    <MenuItem value="IOS">IOS </MenuItem>                
                
                </Select>                
                <FormHelperText>Role</FormHelperText>

                <Button className={classes.button} size='medium' variant='outlined' onClick={submitHandler}>Submit</Button>

            </form>
        </>
    );
};

export default MemberForm;