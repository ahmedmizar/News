import React, { Component } from 'react';
import Auxiliary from '../Auxiliary';
import Navbar from '../../components/Header/Header';
import Footer from "../../components/Footer/Footer"
import "./Layout.scss"
class Layout extends Component {
	render() {
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
