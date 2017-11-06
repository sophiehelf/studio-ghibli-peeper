import React from 'react'
import CharacterList from './CharacterList'
import Character from './Character'
import SearchBar from './SearchBar'

class CharacterContainer extends React.Component {
	constructor() {
		super()

		this.state = {
			filtered: false,
			filteredCharacters: [],
			characters: [],
			searchTerm: ""
		}
	}

	handleChange = (e) => {
		e.preventDefault();
		this.setState({
			searchTerm: e.target.value
		})
		console.log(e.target.value)
	}

	handleOnSubmit = (e) => {
		e.preventDefault();
		var searchTerm = this.state.searchTerm
		var toFilter = []
		this.state.filtered = true;
		this.state.characters.map((character) => {
			if (character.name === searchTerm || character.classification === searchTerm) {
				toFilter.push(character)
			}
		})
		this.setState({
			filteredCharacters: toFilter
		})
		console.log(toFilter)
	}

	// handleOnSubmit2 = (e) =>{

	// }

	componentWillMount() {
		fetch("https://ghibliapi.herokuapp.com/species")
		.then(res => res.json())
		.then(json => this.setState({
			characters: json,
			searchTerm: this.state.searchTerm
		}))
	}

	render() {
		return(
			<div>
			<h2>Studio Ghibli Thingy!</h2>
			<CharacterList characters={this.state.filtered ? this.state.filteredCharacters : this.state.characters} searchTerm={this.state.searchTerm} />
			<br />
			<SearchBar onSubmit={this.handleOnSubmit} onChange={this.handleChange}/>
			</div>
		)
	}
}

export default CharacterContainer 