import React, { Component } from 'react';
import Auxiliary from '../Auxiliary';
import Navbar from '../../components/Navbar/Navbar';
import Footer from "../../components/Footer/Footer"

import "./Layout.scss"

class Layout extends Component {
	state = {
		current: 'mail',
		visible: false
	}
	showDrawer = () => {
		this.setState({
			visible: true,
		});
	};

	onClose = () => {
		this.setState({
			visible: false,
		});
	};


	render() {
		console.log(this.props)
		return (

			<Auxiliary>

				<Navbar />
				<main>
					{this.props.children}
				</main>
				<Footer />
			</Auxiliary>

		);
	}
}

export default Layout;
