import React from 'react';
import classes from './Logo.module.css';
import burgerImgLogo from '../../assets/images/logo.png';


const Logo=(props)=>{
	return (
			<div className={classes.Logo} style={{height:props.height, marginTop:props.margin, marginLeft:props.mleft}}>
			<img src={burgerImgLogo} />
			</div>
		)
}


export default Logo;