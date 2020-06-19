import React from 'react';
import {
    Grid,
    Card,
    CardActions,
    CardContent,
    Button,
    Typography
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Restaurant.scss';

export default function Restaurant(props) {

    const addToFavorites = (i) => {
        //remove the restaurant from the array
        const favRestaurant = props.filtered.splice(i, 1);
        props.setFiltered(props.filtered.filter(item => item !== favRestaurant))

        //push sorted favorites restaurants in an array 
        let newListFavorites = [];
        let openFavorites = [];
        let orderAheadFavorites = [];
        let closedFavorites = [];

        newListFavorites.push(...props.fav, favRestaurant[0]);
        props.sortByState(newListFavorites, openFavorites, orderAheadFavorites, closedFavorites);
        props.setFav(props.sortedBySelect(openFavorites, orderAheadFavorites, closedFavorites));
    }

    const removeFromFavorites = (i) => {
        //remove the restaurant from favorites list
        const favRestaurant = props.fav.splice(i, 1);
        props.setFav(props.fav.filter(item => item !== favRestaurant));

        //push restaurant in the initial array 
        let newListStateOrderedRestaurants = [];
        let openRestaurants = [];
        let orderAheadRestaurants= [];
        let closedRestaurants = [];

        newListStateOrderedRestaurants.push(...props.filtered, favRestaurant[0]);
        props.sortByState(newListStateOrderedRestaurants, openRestaurants, orderAheadRestaurants, closedRestaurants);
        props.setFiltered(props.sortedBySelect(openRestaurants, orderAheadRestaurants, closedRestaurants));
    }

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
                            <Button onClick={() => removeFromFavorites(index)}>
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
                            <Button onClick={() => addToFavorites(index)}>
                                <span><FontAwesomeIcon icon={["far", "heart"]} /></span>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>)}
        </Grid>
    )
}

Restaurant.propTypes = {
    filtered: PropTypes.array,
    setFiltered: PropTypes.func,
    fav: PropTypes.array,
    setFav: PropTypes.func,
    sortByState: PropTypes.func,
    sortedBySelect: PropTypes.func,
    data: PropTypes.array
}