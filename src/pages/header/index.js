import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import DataTable from '../../component/datatable/Datatable';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: "white",
      fontSize:"1.5rem",
      backgroundColor:"#4D8FAC"
    },
    tablepaper: {
        padding: theme.spacing(1),
        color: theme.palette.text.secondary,
        height:500
      },
  }));

const Header = ()=>{
    const classes = useStyles();

    return(
        <>
<div className={classes.root}>
      <Grid container >
        <Grid item xs={12}>
          <Paper className={classes.paper}>List of Shipments</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.tablepaper}><DataTable /></Paper>
        </Grid>
        </Grid>
    </div>
        </>
    )
}

export default Header