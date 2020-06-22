import React from 'react';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop.js';
import Auxiliary from '../../../hoc/Auxiliary.js';

class Modal extends React.Component{

	shouldComponentUpdate(nextProps,nextState){
			return nextProps.show !==this.props.show;

			
	}

	componentDidUpdate(){
		console.log("Modal will update");
	}

	render(){
		return (
			<Auxiliary>
			<Backdrop clicked={this.props.clicked} show={this.props.show}/>
			 <div className={classes.Modal} style={{transform:this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
													opacity:this.props.show ? '1' : '0'}}>
						  {this.props.children}
					     </div> 

					     </Auxiliary>
			   )
	}
}


export default Modal;