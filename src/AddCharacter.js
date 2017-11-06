import React from 'react'

class AddCharacter extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return(
			<form onSubmit={this.props.submitNewCharacter}>
				<input type="text" />
			</form>
		)
	}
}