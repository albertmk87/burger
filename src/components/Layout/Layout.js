import React, {Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary.js';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar.js';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer.js';

class Layout extends React.Component {

	state={
		showSideDrawer:false
	}

	sideDrawerClosed=()=>{
		this.setState({showSideDrawer:false});
	}

	openBackdrop=()=>{
		this.setState({showSideDrawer:true});
	}
	render(){
	return (
		<Auxiliary>
		<div>
		<Toolbar close={this.openBackdrop} />
		<SideDrawer show={this.state.showSideDrawer} closed={this.sideDrawerClosed} />
		
		 </div>
			<main className={classes.Layout}>
				{this.props.children}
			</main>
			</Auxiliary>
		)
}
}

export default Layout;