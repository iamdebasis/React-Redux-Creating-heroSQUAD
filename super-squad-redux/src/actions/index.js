export const ADD_CHARACTER='ADD_CHARACTER';
export const REMOVE_CHARACTER='REMOVE_CHARACTER';
//we are exporting this action so that other components import this action and use it.
//action types tipycally takes all uppercase...
export function addCharacterById(id){
	//here we have to define action object...
	const action={
		type:ADD_CHARACTER,
		id:id       //we can use only id here because id : id
	}
	return action; 
}

export function removeCharacterById(id){
	//here we have to define action object...
	const action={
		type:REMOVE_CHARACTER,
		id       //we can use only id here because id : id
	}
	return action; 
}