import React from 'react';
import { 
    Grid
} from '@material-ui/core';
import './Header.scss';

import Pizza from '../../images/pizza.jpg'

export default function Header(props) {

    return (
        <Grid container>
                <section style={{backgroundImage: `url(${Pizza})` }}></section>
                <img src={'Pizza'} alt={"pizza"}/>
        </Grid>
    )
}
