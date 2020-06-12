import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import RestaurantsList from './pages/restaurantsList/RestaurantsList';

export default function ApplicationRoutes() {
    return (
        <Switch>
            <Route path='/restaurants' component={RestaurantsList} exact/>
            <Redirect to='/restaurants'></Redirect>
        </Switch>
    )
}