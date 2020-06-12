import React from 'react';
import { 
    Grid, 
    Card, 
    CardActions, 
    CardContent, 
    Button, 
    Typography  
} from '@material-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './Restaurant.scss';

export default function Restaurant(props) {

    return (
        <Grid container justify="space-between" spacing={2}>
            {props.data.map((el, index) => 
            <Grid item lg={4} sm={6} xs={12} key={index}>
            <Card className='root'>
                <CardContent>
                    <Typography className='title' color="textSecondary" gutterBottom> {el.name}</Typography>
                    <Typography className='title' color="textSecondary" gutterBottom> {el.status}</Typography>
                </CardContent>
                <CardActions>
                    <Button size="small"><FontAwesomeIcon icon='heart' /></Button>
                </CardActions>
            </Card>
            </Grid>)}
        </Grid>
    )
}
