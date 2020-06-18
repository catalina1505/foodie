import React  from 'react';
import {
    Grid,
    MenuItem,
    FormControl,
    Select,
    Input,
    InputLabel
} from '@material-ui/core';

import './Filters.scss';

export default function Restaurant(props) {

    const handleChangeSearch = e => {
        props.setSearchString(e);
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

    const handleChangeSelect = (e) => {
        props.setSelect(e.target.value);

       const x = props.restaurants.length > 0 && props.restaurants.sort(function (a, b) {
            return a.sortingValues[props.select] - b.sortingValues[props.select]
        });

        props.setFiltered(x)
    }

    return (
        <Grid container className="filters-root">
            <Grid item md={6} xs={12}>
                <Input type="text" placeholder="Search.." onChange={e => handleChangeSearch(e.target.value)} value={props.searchString} className='search-input' />
            </Grid>

            <Grid item md={6} xs={12}>
                <FormControl className='form-control'>
                <InputLabel htmlFor="name-multiple">{props.restaurants && Object.keys(props.restaurants[0].sortingValues).map(((el => el)))[0]}</InputLabel>
{/* try to use native select */}
                    <Select
                        labelId="simple-select-label"
                        id="simple-select"
                        value={props.select}
                        onChange={handleChangeSelect}
                        >
                        {props.restaurants && Object.keys(props.restaurants[0].sortingValues).map(((el, i) => <MenuItem key={i} value={el}>{el}</MenuItem>))})}
                    </Select>
                </FormControl>
            </Grid>
        </Grid >
    )
}
