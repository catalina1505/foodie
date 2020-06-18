import React, { useState, useEffect } from 'react';
import Restaurant from '../../../components/restaurant/Restaurant';
import Filters from '../../../components/filters/Filters';
import restaurants from '../../../utils/Sample - Restaurant list - technical assignment (PHP_Javascript).json';
import './RestaurantsList.scss';

export default function RestaurantsList() {

    const [topRestaurantsAdded, setTopRestaurantsAdded] = useState([]);
    const [stateOrderedRestaurants, setStateOrderedRestaurants] = useState([]);
    const [searchString, setSearchString] = useState('');
    const [select, setSelect] = useState('');
    const [filtered, setFiltered] = useState([]);
    const [fav, setFav] = useState([]);
    const [open, setOpen] = useState([]);
    const [orderAhead, setOrderAhead] = useState([]);
    const [closed, setClosed] = useState([]);

    useEffect(() => {
        
         //add topRestaurants to the data
        restaurants.restaurants.map((el => topRestaurantsAdded.push({
            ...el,
            ...el.sortingValues.topRestaurants = (el.sortingValues.distance * el.sortingValues.popularity) + el.sortingValues.ratingAverage
        })));

        //sortbyState
        sortByState(topRestaurantsAdded, open, orderAhead, closed)

        setStateOrderedRestaurants({
            stateOrderedRestaurants: topRestaurantsAdded
        });

        //sort by bestMatch by default
        setSelect('bestMatch')
        const sortedByBestMatch = sortedBySelect(open, orderAhead, closed)

        setFiltered(sortedByBestMatch)

    }, [topRestaurantsAdded]);


    const sortedBySelect = (x, y, z) => {

        //sort by select for 3 arrays of restaurants
        x.sort(function (a, b) {
            return a.sortingValues[select] - b.sortingValues[select]
        });

       y.sort(function (a, b) {
            return a.sortingValues[select] - b.sortingValues[select]
        });

        x.sort(function (a, b) {
            return a.sortingValues[select] - b.sortingValues[select]
        });

       return [...x, ...y, ...z]
    }


    const sortByState = (array, a, b, c) => {
        //get the restaurants with open state
        array.map((el => el.status === "open" ? a.push(el) : ""));

        //get the restaurants with order ahead state
        array.map((el => el.status === "order ahead" ? b.push(el) : ""));

        //get the restaurants with closed state
        array.map((el => el.status === "closed" ? c.push(el) : ""))

        //get the restaurants sorted by state
        return [...a, ...b, ...c];
    }

    const addToFavorites = (i) => {
        //remove the restaurant from the array
        const favRestaurant = filtered.splice(i, 1);
        setFiltered(filtered.filter(item => item !== favRestaurant))

        //push sorted favorites restaurants in an array 
        let newListFavorites = [];
        let openFavorites = [];
        let orderAheadFavorites = [];
        let closedFavorites = [];

        newListFavorites.push(...fav, favRestaurant[0]);
        let sortedFavoritesByState = sortByState(newListFavorites, openFavorites, orderAheadFavorites, closedFavorites);
        setFav(sortedFavoritesByState);
    }

    const removeFromFavorites = (i) => {
        //remove the restaurant from favorites list
        const favRestaurant = fav.splice(i, 1);
        setFav(fav.filter(item => item !== favRestaurant));

        //push restaurant in the initial array 
        let newListStateOrderedRestaurants = [];
        let openRestaurants = [];
        let orderAheadRestaurants= [];
        let closedRestaurants = [];

        newListStateOrderedRestaurants.push(...filtered, favRestaurant[0]);
        let sortedRestaurantsByState = sortByState(newListStateOrderedRestaurants, openRestaurants, orderAheadRestaurants, closedRestaurants)
        setFiltered(sortedRestaurantsByState);
    }

    return (
        <div className="list-root">
            <Filters
                searchString={searchString}
                setSearchString={setSearchString}
                restaurants={stateOrderedRestaurants.stateOrderedRestaurants}
                setFiltered={setFiltered}
                filtered={filtered}
                sortedBySelect={sortedBySelect}
                select={select}
                setSelect={setSelect} 
                open={open}
                orderAhead={orderAhead}
                closed={closed}/>
            <Restaurant removeFromFavorites={removeFromFavorites} addToFavorites={addToFavorites} searchString={searchString} fav={fav} data={filtered} />
        </div>
    )
}