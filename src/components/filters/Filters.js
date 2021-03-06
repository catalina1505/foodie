import React  from 'react';
import {
    Grid,
    MenuItem,
    FormControl,
    Select,
    Input
} from '@material-ui/core';
import PropTypes from 'prop-types';
import './Filters.scss';

export default function Filters(props) {

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
        const sorted = props.sortedBySelect(props.open, props.orderAhead, props.closed);
        props.setFiltered(sorted);
    }

    return (
        <Grid container className="filters-root">
            <Grid item md={6} xs={12}>
                <Input type="text" placeholder="Search.." onChange={e => handleChangeSearch(e.target.value)} value={props.searchString} className='search-input' />
            </Grid>

            <Grid item md={6} xs={12}>
                <FormControl className='form-control'>
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

Filters.propTypes = {
    setSearchString: PropTypes.func,
    restaurants: PropTypes.array,
    setFiltered: PropTypes.func,
    select: PropTypes.string,
    setSelect: PropTypes.func,
    sortedBySelect: PropTypes.func,
    searchString: PropTypes.string,
    closed: PropTypes.array,
    open: PropTypes.array,
    orderAhead: PropTypes.array
}