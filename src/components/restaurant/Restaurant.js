import React from 'react';
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import './Restaurant.scss';

export default function Restaurant(props) {

    return (
        <Grid container spacing={24}>
            {props.data.map((el, index) => 
            <Grid item lg={4} sm={6} xs={12} key={index}>
                <Card className='root'>
                    <CardContent>
                        <Typography className='title' color="textSecondary" gutterBottom> {el.name}</Typography>
                        <Typography className='title' color="textSecondary" gutterBottom> {el.status}</Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Like</Button>
                    </CardActions>
                </Card>
            </Grid>)}
        </Grid>
    )
}
