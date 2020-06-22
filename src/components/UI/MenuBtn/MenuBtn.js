import React from 'react';
import classes from './MenuBtn.module.css';
const MenuBtn=(props)=>{
	return (
			<div onClick={props.close} className={classes.MenuBtn}>
				<div> </div>
				<div> </div>
				<div> </div>
			</div>
		)
}


export default MenuBtn;