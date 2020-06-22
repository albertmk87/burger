import React from 'react';
import NavigationItem from './NavigationItem.js';
import classes from './NavigationItems.module.css';

const NavigationItems=(props)=>{
	return (
			<ul className={classes.NavigationItems}>
			<NavigationItem active link="/"> Burger Builder</NavigationItem>
			<NavigationItem link="/">Contact </NavigationItem>
			</ul>
			)
}


export default NavigationItems;