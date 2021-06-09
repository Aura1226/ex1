import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import ExLayout from './ExLayout';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const Kiosk = () => {

    const classes = useStyles();

    return ( 
        <ExLayout>
            <div className={classes.root}>
                <Paper elevation={5}/>
                <Paper elevation={5}/>
                <Paper elevation={5}/>
            </div>
        </ExLayout>
     );
}
 
export default Kiosk;