import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

export class Success extends Component {
	continute = e => {
		e.preventDefault();
		// PROCESS FORM //
		this.props.nextStep();
	};
	back = e => {
		e.preventDefault();
		this.props.prevStep();
	};
	render() {
		return (
			<MuiThemeProvider>
				<React.Fragment>
					<AppBar title="Success" />
					<h1> Thank you for your Submission</h1>
					<p>You will receive an email with further instruction</p>
				</React.Fragment>
			</MuiThemeProvider>
		);
	}
}

const styles = {
	button: {
		margin: 15
	}
};

export default Success;
