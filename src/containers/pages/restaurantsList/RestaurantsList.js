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

    useEffect(() => {
        //add topRestaurants to the data
        restaurants.restaurants.map((el => topRestaurantsAdded.push({
            ...el,
            ...el.sortingValues.topRestaurants = (el.sortingValues.distance * el.sortingValues.popularity) + el.sortingValues.ratingAverage
        })));

        sorting(topRestaurantsAdded)

        setStateOrderedRestaurants({
            stateOrderedRestaurants: topRestaurantsAdded
        });

    }, [topRestaurantsAdded]);


    const sorting = (array) => {
        //delete and add the restaurants with state open at the beginning of the array 
        array.map((el => el.status === "order ahead" ? array.splice(array.indexOf(el), 1) && array.unshift(el) : ""));

        //delete and add the restaurants with state closed at the end of the array 
        array.map((el => el.status === "open" ? array.splice(array.indexOf(el), 1) && array.unshift(el) : ""))
    }

    const addToFav = (i) => {
        //remove the restaurant from the array
        const favRestaurant = stateOrderedRestaurants.stateOrderedRestaurants.splice(i, 1);
        setStateOrderedRestaurants({ stateOrderedRestaurants: stateOrderedRestaurants.stateOrderedRestaurants.filter(item => item !== favRestaurant) })

        //push sorted favorite restaurants in an array 
        const fav3 = [];

        fav3.push(...fav, favRestaurant[0]) 
        fav3.length > 1 && sorting(fav3)
        setFav(fav3);
    }

    const removeFromFav = (i) => {
        //remove the restaurant from fav
        const favRestaurant = fav.splice(i, 1);
        setFav(fav.filter(item => item !== favRestaurant));

        console.log("favFromRemove", fav)

        //push restaurant in the initial array 
        const stateOrderedRestaurants2 = [];

        stateOrderedRestaurants2.push(...stateOrderedRestaurants.stateOrderedRestaurants, favRestaurant[0]);
        sorting(stateOrderedRestaurants2)
        setStateOrderedRestaurants({ stateOrderedRestaurants: stateOrderedRestaurants2 });

        console.log("stateOrderedRestaurants.stateOrderedRestaurants", stateOrderedRestaurants.stateOrderedRestaurants)

    }

    return (
        <div className="list-root">
            <Filters
                searchString={searchString}
                setSearchString={setSearchString}
                restaurants={stateOrderedRestaurants.stateOrderedRestaurants}
                setFiltered={setFiltered}
                filtered={filtered}
                select={select}
                setSelect={setSelect} />
            <Restaurant removeFromFav={removeFromFav} addToFav={addToFav} fav={fav} data={searchString.length < 1 ? stateOrderedRestaurants.stateOrderedRestaurants : filtered} />
        </div>
    )
}