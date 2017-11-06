import React from 'react'

class AddCharacter extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return(
			<div>
			<p>Add a character!</p>
			<form onSubmit={this.props.submitNewCharacter}>
				<input type="text" />
				<button type="submit">Submit!!!!!</button>
			</form>
			</div>
		)
	}
}

export default AddCharacter