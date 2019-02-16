import {ADD_CHARACTER, REMOVE_CHARACTER} from '../actions';
import {createCharacter} from './helpers';

function heroes(state=[],action){
	switch(action.type){
		case ADD_CHARACTER:
			let heroes=[...state, createCharacter(action.id)];
			//we are using a spread operator(...) in state it will get all the items from state if there is any and then at last append the current
			//hereo bt using create character..
			return heroes;
		
		case REMOVE_CHARACTER:
			heroes=state.filter(item => item.id !== action.id);
			return heroes;

		default:
			return state
	}
}



export default heroes;