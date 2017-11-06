import React from 'react'
import Character from './Character'

class SearchBar extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return(
		<div>
		<p>Search for a Species</p>
			<form onSubmit={this.props.onSubmit}>
			<input type="text" onChange={this.props.onChange}/>
			<button type="submit">Search!!!</button>
			</form>
		</div>
		)
	}
}

export default SearchBar
