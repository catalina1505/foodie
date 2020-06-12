import React from 'react';
import { 
    Grid, 
    InputLabel, 
    MenuItem, 
    FormControl, 
    Select 
} from '@material-ui/core';
import './Filters.scss';

export default function Restaurant(props) {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };

    return (
        <Grid container justify='space-between'>
            <Grid item lg={2} xs={12}>
                <input type="text" placeholder="Search.." onChange={props.searchOnChange} value={props.searchValue} className='search-input'/>
            </Grid>

            <Grid item lg={2} xs={12}>
                <FormControl className='form-control'>
                    <InputLabel id="demo-simple-select-label">Availability</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Open</MenuItem>
                        <MenuItem value={20}>Order ahead</MenuItem>
                        <MenuItem value={30}>Closed</MenuItem>
                    </Select>
                </FormControl>
            </Grid>

            <Grid item lg={8} xs={12}>
                <FormControl className='form-control'>
                    <InputLabel id="demo-simple-select-label">Sort</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Best match</MenuItem>
                        <MenuItem value={20}>Newest</MenuItem>
                        <MenuItem value={30}>Rating average</MenuItem>
                        <MenuItem value={30}>Distance</MenuItem>
                        <MenuItem value={30}>Popularity</MenuItem>
                        <MenuItem value={30}>Average product price</MenuItem>
                        <MenuItem value={30}>Delivery cost</MenuItem>
                        <MenuItem value={30}>Minimum cost</MenuItem>
                    </Select>
                </FormControl>
            </Grid>

        </Grid>
    )
}
