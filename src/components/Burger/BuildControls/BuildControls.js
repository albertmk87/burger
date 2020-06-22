import React from 'react';
import BuildControl from './BuildControl/BuildControl.js';
import classes from './BuildControls.module.css';
import Auxiliary from '../../../hoc/Auxiliary.js';


const controls=[
	{label:"Salad", type:"salad"},
	{label:"Bacon", type:"bacon"},
	{label:"Cheese", type:"cheese"},
	{label:"Meat", type:"meat"},
]


const BuildControls=(props)=>{
	return (
		<Auxiliary >
		
		<div className={classes.BuildControls}>
		<div>The total price is: <strong> ${props.totalPrice.toFixed(2)} </strong> </div>
			{controls.map(control=> <BuildControl addingredient={()=>props.addingredient(control.type)} removeingredient={()=>props.removeingredient(control.type)} key={control.label} label={control.label} arrBool={props.arrBool[control.type]} />)}
		<button onClick={props.modalShowFunc} disabled={!props.purchaseable} className={classes.Button}> CheckOut </button>
		</div>
		</Auxiliary>
		)
}

export default BuildControls;