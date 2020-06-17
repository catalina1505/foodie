import React, { useState, useEffect } from 'react';
import Restaurant from '../../../components/restaurant/Restaurant';
import Filters from './Filters';
import Header from '../../../components/header/Header'

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
        restaurants.restaurants.map((el =>  topRestaurantsAdded.push({...el, 
            ...el.sortingValues.topRestaurants = (el.sortingValues.distance * el.sortingValues.popularity) + el.sortingValues.ratingAverage })));

        //!!!ALSO FAVORITES MUST BE ORDERED BY STATE

        //sort the new data based on state
        const x = topRestaurantsAdded.sort(function (a, b) {
            if (a.status === b.status) { return 0; }
            return a.status > b.status ? -1 : 1
        })

        const z = []

        const open = x.map((el => el.status === "open" ? z.push(el) : ""))
        const order = x.map((el => el.status === "order ahead" ? z.push(el) : ""))
        const closed = x.map((el => el.status === "closed" ? z.push(el) : ""))

        setStateOrderedRestaurants({
            stateOrderedRestaurants: z
        });


    }, []);

    console.log("select", select);


    const addToFav = (i) => {
        //remove the restaurant from the array
        const favRestaurant = stateOrderedRestaurants.stateOrderedRestaurants.splice(i, 1);
        setStateOrderedRestaurants({ stateOrderedRestaurants: stateOrderedRestaurants.stateOrderedRestaurants.filter(item => item !== favRestaurant) })

        //push favorite restaurants in an array 
        fav.push(favRestaurant[0])
    }

    const removeFromFav = (i) => {
        //remove the restaurant from fav
        const favRestaurant = fav.splice(i, 1);
        setFav(fav.filter(item => item !== favRestaurant))

        //push restaurant in the initial array 
        stateOrderedRestaurants.stateOrderedRestaurants.push(favRestaurant[0])
    }

    console.log("filtered", filtered)

    return (

        <div className="list-root">
            {/* <Header /> */}
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