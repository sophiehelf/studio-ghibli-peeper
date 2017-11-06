import React from 'react'
import CharacterList from './CharacterList'
import Character from './Character'
import SearchBar from './SearchBar'

class CharacterContainer extends React.Component {
	constructor() {
		super()

		this.state = {
			characters: [],
			searchTerm: ""
		}
	}

	// handleChange = (e) => {
	// 	e.preventDefault();
	// 	this.setState({
	// 		searchTerm: e.target.value
	// 	})
	// }

	handleOnSubmit = (e) => {
		e.preventDefault();
		this.setState({
			searchTerm: e.target.value
		})

		console.log(this.state)
	}

	componentWillMount() {
		fetch("https://ghibliapi.herokuapp.com/species")
		.then(res => res.json())
		.then(json => this.setState({
			characters: json
		}))
	}

	render() {
		return(
			<div>
			<h2>Studio Ghibli Thingy!</h2>
			<CharacterList characters={this.state.characters} searchTerm={this.state.searchTerm} />
			<br />
			<SearchBar onSubmit={this.handleOnSubmit} onChange={this.handleChange}/>
			</div>
		)
	}
}

export default CharacterContainer 