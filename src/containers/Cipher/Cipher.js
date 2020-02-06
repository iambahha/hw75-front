import React, {Component} from 'react';
import {connect} from "react-redux";
import {Button, Input} from "reactstrap";
import {changeValue, sendToEncode, sendToDecode} from "../../store/actions/cipherActions";

class Cipher extends Component {
	render() {
		return (
			<div>
				<div><h3>Decoded</h3>
					<Input name='decoded' onChange={this.props.changeValue} value={this.props.decoded}/></div>
				<h3>Password</h3>
				<div className="d-flex">
					<div>
						<Input name='password' value={this.props.password} onChange={this.props.changeValue}/>
					</div>
					<div className="d-flex" >
						<Button color="success" onClick={this.props.sendToEncode}>encode</Button>
						<Button color="warning" onClick={this.props.sendToDecode}>decode</Button>
					</div>
				</div>
				<div>
					<h3>Encoded</h3>
					<Input name='encoded' value={this.props.encoded} onChange={this.props.changeValue}/>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		encoded: state.encoded,
		decoded: state.decoded,
		password: state.password,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		changeValue: (e) => dispatch(changeValue(e)),
		sendToEncode: ()=> dispatch(sendToEncode()),
		sendToDecode: ()=> dispatch(sendToDecode())

	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Cipher);