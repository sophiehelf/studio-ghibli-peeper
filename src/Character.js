import React from 'react'

class Character extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return(
			<div>
			<p>{this.props.character.name}: {this.props.character.classification}</p>
			</div>
		)
	}
}

export default Character