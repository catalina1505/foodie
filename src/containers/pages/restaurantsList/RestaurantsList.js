import React from 'react';
import Restaurant from '../../../components/restaurant/Restaurant';
import restaurants from  '../../../utils/Sample - Restaurant list - technical assignment (PHP_Javascript).json';

export default function RestaurantsList() {

    console.log("r", restaurants)
    return (
        <React.Fragment>
            <Restaurant data={restaurants.restaurants}/>
        </React.Fragment>
    )
}