import React, {Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary.js';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient.js';
import classes from './Burger.module.css';
const Burger=(props)=> {

		let ingredients=Object.keys(props.ingredients)
		.map(ingredientName=>{
			return [...Array(props.ingredients[ingredientName])].map((_,i)=>{
				return <BurgerIngredient key={ingredientName+i} type={ingredientName}/>
			})
		})

		const numOfIngredients=Object.values(props.ingredients);
		const sumOfIng=numOfIngredients.reduce((acc,el)=>{
			return acc+el;
		})

		if(sumOfIng===0){
			ingredients=<p>Please insert some ingredients</p>
		}

	return (
			<div className={classes.Burger}>
				<BurgerIngredient type="bread-top"/>
					{ingredients}
				<BurgerIngredient type="bread-bottom"/>
			</div>
		)
}


export default Burger;