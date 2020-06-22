import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary.js';
import Button from '../../UI/Button/Button.js';


class OrderSummary extends React.Component{

	componentDidUpdate() {
		console.log('[order summary will update]');
	}

render() {


	let ingredients=Object.keys(this.props.ingredients).map((ingName,i)=>{
		return <li key={ingName+i}>{ingName}: {this.props.ingredients[ingName]}</li>
	})
	
		

	return (
		<Auxiliary>
		<h3>Your order: </h3>
		<p>A burger with the following ingredients:</p>
		<ul>
			{ingredients}
		</ul>
				<h2>The total price is: <strong> ${this.props.price.toFixed(2)} </strong> </h2>
		<Button btnType="Danger" clicked={this.props.purchaseContinue}>Continue to checkout</Button>
		<Button btnType="Success" clicked={this.props.closeModal}>Go back to order</Button>

		</Auxiliary>
		)
}
}


export default OrderSummary;