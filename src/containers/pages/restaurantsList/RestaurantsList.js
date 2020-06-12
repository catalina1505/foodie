import React, {useState} from 'react';
import Restaurant from '../../../components/restaurant/Restaurant';
import Filters from './Filters';
import Header from '../../../components/header/Header'

import restaurants from  '../../../utils/Sample - Restaurant list - technical assignment (PHP_Javascript).json';
import './RestaurantsList.scss';

export default function RestaurantsList() {

    const [searchString, setSearchString] = useState('');
    const [filtered, setFiltered] = useState([]);

    const handleChange = e => {
        setSearchString(e);

        let initialList = restaurants.restaurants.map(restaurant => {
            return {name: restaurant.name.toLowerCase(), status: restaurant.status}
            })
        if(searchString !== "") {
            let newList = [];
            newList = initialList.filter( restaurant => restaurant.name.includes(searchString.toLocaleLowerCase()))

            setFiltered(newList); 
        } else {
            setFiltered(restaurants.restaurants)
        }
     }
    


    return (
        <div>
            <Header/>
            <Filters searchValue={searchString} searchOnChange={e => handleChange(e.target.value)} />
            <Restaurant data={searchString.length < 1 ? restaurants.restaurants : filtered}/>
        </div>
    )
}