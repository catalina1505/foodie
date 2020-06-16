import React, { useState } from 'react';
import {
    Grid,
    MenuItem,
    FormControl,
    Select
} from '@material-ui/core';

import './Filters.scss';

export default function Restaurant(props) {

    const [select, setSelect] = useState("");

    const handleChangeSearch = e => {
        props.setSearchString(e);
        //!!!! WE NEED TO CHANGE PROPS IN RESTAURANTSLIST
        let initialList = props.restaurants.map(restaurant => {
            return { name: restaurant.name.toLowerCase(), status: restaurant.status }
        })
        if (props.searchString !== "") {
            let newList = [];
            newList = initialList.filter(restaurant => restaurant.name.includes(props.searchString.toLocaleLowerCase()))

            props.setFiltered(newList);
        } else {
            props.setFiltered(props.restaurants)
        }
    }


    const handleChange = (event) => {
        setSelect(event.target.value);
        props.availabilityOptions.length > 0 && props.availabilityOptions.sort(function (a, b) {
            return a.sortingValues[select] - b.sortingValues[select]
        });
    }

    return (
        <Grid container justify='space-between'>
            <Grid item lg={2} xs={12}>
                <input type="text" placeholder="Search.." onChange={e => handleChangeSearch(e.target.value)} value={props.searchString} className='search-input' />
            </Grid>

            <Grid item lg={10} xs={12}>

                <FormControl className='form-control'>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={select}
                        defaultValue={"bestMatch"}
                        onChange={handleChange}
                        >
                        {props.availabilityOptions && Object.keys(props.availabilityOptions[0].sortingValues).map(((el, i) => <MenuItem key={i} value={el}>{el}</MenuItem>))})}
                    </Select>
                </FormControl>
            </Grid>
        </Grid >
    )
}
