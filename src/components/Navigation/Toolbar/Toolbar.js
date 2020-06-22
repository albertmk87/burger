import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo.js';
import NavigationItems from '../NavigationItems/NavigationItems.js';
import MenuBtn from '../../UI/MenuBtn/MenuBtn.js';

const Toolbar=(props)=>{
		return (
				<div className={classes.Toolbar}>
					<MenuBtn close={props.close}/>
					<Logo className={classes.Logo} height="60%" margin="15px" mleft="200px"/>
					<div>
						<nav className={classes.DesktopOnly}>
							<NavigationItems/>
						</nav>

					</div>
				</div>
			)
}


export default Toolbar;