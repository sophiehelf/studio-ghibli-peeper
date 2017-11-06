import React from 'react'
import Character from './Character'

const CharacterList = (props) => {


	return(
		<div>
			{props.characters.map((character, idx) => {
				return <Character idx={idx} character={character} />
			})}
		</div>
	)
}


export default CharacterList