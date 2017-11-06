import React from 'react'
import CharacterList from './CharacterList'
import Character from './Character'
import SearchBar from './SearchBar'
import AddCharacter from './AddCharacter'

class CharacterContainer extends React.Component {
	constructor() {
		super()

		this.state = {
			filtered: false,
			filteredCharacters: [],
			characters: [],
			searchTerm: "",
			newCharacter: ""
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


	handleOnSubmit2 = (e) =>{
		e.preventDefault();
		this.state.characters.push(this.state.newCharacter)
		console.log(this.state.characters)
	}

	handleChange2 = (e) => {
		e.preventDefault();
		this.setState({
			newCharacter: e.target.value
		})
		console.log(this.state.newCharacter)
	}

	componentWillMount() {
		fetch("https://ghibliapi.herokuapp.com/species")
		.then(res => res.json())
		.then(json => this.setState({
			characters: json,
			searchTerm: this.state.searchTerm,
			filtered: false
		}))
	}


	////////

	render() {
		return(
			<div>
			<h2>Studio Ghibli Thingy!</h2>
			<CharacterList characters={this.state.filtered ? this.state.filteredCharacters : this.state.characters} searchTerm={this.state.searchTerm} />
			<br />
			<SearchBar onSubmit={this.handleOnSubmit} onChange={this.handleChange} />
			<br />
			<AddCharacter submitNewCharacter={this.handleOnSubmit2} onChange={this.handleChange2}/>
			</div>
		)
	}
}

export default CharacterContainer 