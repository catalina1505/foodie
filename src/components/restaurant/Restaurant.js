import React from 'react';
import {
    Grid,
    Card,
    CardActions,
    CardContent,
    Button,
    Typography
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Restaurant.scss';

export default function Restaurant(props) {

    return (
        <Grid container justify="space-between" spacing={2}>
            {/* list favorite restaurants */}
            {props.fav.length > 0 && props.fav.map((el, index) =>
                <Grid item xs={12} key={index}>
                    <Card>
                        <CardContent>
                            <Typography className='title' color="textSecondary" gutterBottom> {el.name}</Typography>
                            <Typography className='title' color="textSecondary" gutterBottom> {el.status}</Typography>
                        </CardContent>
                        <CardActions>
                            <Button onClick={() => props.removeFromFavorites(index)}>
                                <span><FontAwesomeIcon icon={["fas", "heart"]} /> Favorite</span>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>)}

            {/* list the restaurants that are not marked as favorites */}
            {props.data && props.data.length > 0 && props.data.map((el, index) =>
                <Grid item xs={12} key={index}>
                    <Card>
                        <CardContent>
                            <Typography className='title' color="textSecondary" gutterBottom> {el.name}</Typography>
                            <Typography className='title' color="textSecondary" gutterBottom> {el.status}</Typography>
                        </CardContent>
                        <CardActions>
                            <Button onClick={() => props.addToFavorites(index)}>
                                <span><FontAwesomeIcon icon={["far", "heart"]} /></span>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>)}
        </Grid>
    )
}
