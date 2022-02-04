import React,{useState} from 'react';
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@material-ui/core';
// import Button from '@mui/material';
import axios from 'axios';
// import { createstudent } from '../../../../server/controllers/student';

const useStyles = makeStyles((theme)=> ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function Create() {
    const classes = useStyles();

    const [student,setStudent] = useState({
        regNo: '',
        studentName: '',
        grade: '',
        section: '',
    })

    const createStudent = () => {
        console.log('hello');
        axios.post('https://ancient-bastion-13010.herokuapp.com/students', student).then( ()=> {
            // window.location.reload(false);
        })
        console.log(student)
    }
  return (
      <>
      <h2>Create Student</h2>
      <form className={classes.root} noValidate autoComplete='off'>
        <TextField id="outlined-basic" label="Registeration No." variant="outlined" value={student.regNo} onChange={(event)=> {
          setStudent({ ...student, regNo: event.target.value})
        }} />
        <TextField id="outlined-basic" label="Name" variant="outlined" value={student.studentName} onChange={(event)=> {
          setStudent({ ...student, studentName: event.target.value})
        }}/> 
        <TextField id="outlined-basic" label="Grade" variant="outlined" value={student.grade} onChange={(event)=> {
          setStudent({ ...student, grade: event.target.value})
        }}/>
        <TextField id="outlined-basic" label="Section" variant="outlined" value={student.section} onChange={(event)=> {
          setStudent({ ...student, section: event.target.value})
        }}/>
        
        <button variant="contained" color="primary" onClick={createStudent}>Create</button>
        </form>
    </>
  );
}
