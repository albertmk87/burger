import React from 'react';
import Logo from '../../Logo/Logo.js';
import classes from './SideDrawer.module.css';
import NavigationItems from '../NavigationItems/NavigationItems.js';
import Auxiliary from '../../../hoc/Auxiliary.js';
import Backdrop from '../../UI/Backdrop/Backdrop.js';
const SideDrawer=(props)=>{

	let newClasses=[classes.SideDrawer, classes.Close];
	if(props.show) {
			newClasses=[classes.SideDrawer, classes.Open];
	}
	return (
			<Auxiliary>
			<Backdrop show={props.show} clicked={props.closed} />
			<div className={newClasses.join(' ')}>

				
				<Logo/>

				<nav>
					<NavigationItems />
				</nav>
			</div>

			</Auxiliary>
		)

}		

export default SideDrawer;