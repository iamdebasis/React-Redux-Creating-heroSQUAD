import characters_json from '../data/characters.json';
import {ADD_CHARACTER,REMOVE_CHARACTER} from '../actions';
import {createCharacter} from './helpers'

function characters(state=characters_json,action){
	//in our reducer we will place a seitch statement used to update store depending on the action
	switch(action.type){
		case ADD_CHARACTER:
			let characters=state.filter(item=>item.id!==action.id);
			return characters;

		case REMOVE_CHARACTER:
			characters=[...state, createCharacter(action.id)]
			return characters;
			
		default:   //1st action is default when there is no change we will return the state itself
		return state;
 
	}
}


export default characters