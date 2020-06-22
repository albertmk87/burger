import React, {Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary.js';
import Burger from '../../components/Burger/Burger.js';
import BuildControls from '../../components/Burger/BuildControls/BuildControls.js';
// import BuildControls from '../../components/Burger/BuildControls/BuildControls.js';
import Modal from '../../components/UI/Modal/Modal.js';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary.js';
const prices={
	salad:0.5,
	cheese:0.4,
	meat:1,
	bacon:0.7
}

class BurgerBuilder extends Component {

	state={
			ingredients:{
				salad:0,
				bacon:0,
				cheese:0,
				meat:0
			},
			totalPrice:4,
			purchaseable:false,
			modalShow:false

	}

	updatePurchaseable=(newIngredients)=>{
			const ingredientsValues=Object.values(newIngredients);
			const sum=ingredientsValues.reduce((acc,el)=>acc+el);
			
				this.setState({purchaseable:sum>0});
			
	}

	addingredient=(type)=>{
			const newIngredients={...this.state.ingredients};
			newIngredients[type]=newIngredients[type]+1;
			
			const priceToAdd=prices[type];
			const newPrice=this.state.totalPrice+priceToAdd;
			this.setState({ingredients:newIngredients, totalPrice:newPrice});
			this.updatePurchaseable(newIngredients);

	}

	removeingredient=(type)=>{
		const newIngredients={...this.state.ingredients};
		if(newIngredients[type]>0){
			newIngredients[type]=newIngredients[type]-1;
			const priceToAdd=prices[type];
			const newPrice=this.state.totalPrice-priceToAdd;
			this.setState({ingredients:newIngredients, totalPrice:newPrice});
			this.updatePurchaseable(newIngredients);
		}
	}

	showModal=()=>{
		const oldValue=this.state.modalShow;
		this.setState({modalShow:true});
		console.log(this.state.modalShow);
	}

	closeModal=()=>{
		this.setState({modalShow:false});
	}

	purchaseContinue=()=>{
		console.log("Clicked the conitnue");
	}

		render(){

const arrBool={...this.state.ingredients};

for(let key in arrBool){
	arrBool[key]=arrBool[key]>0;
}

console.log(arrBool)

 
			return (
				<Auxiliary>
					<div> 
					<Modal clicked={this.closeModal} show={this.state.modalShow}>

						<OrderSummary price={this.state.totalPrice} purchaseContinue={this.purchaseContinue} closeModal={this.closeModal} ingredients={this.state.ingredients} price={this.state.totalPrice}/>

					</Modal>
						<Burger ingredients={this.state.ingredients}/>
					</div>
					<div>
						<BuildControls modalShowFunc={this.showModal} purchaseable={this.state.purchaseable} arrBool={arrBool} totalPrice={this.state.totalPrice} addingredient={this.addingredient} removeingredient={this.removeingredient}/>
					</div>

					</Auxiliary>
				)
		}
}


export default BurgerBuilder;