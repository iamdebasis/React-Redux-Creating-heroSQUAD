
//helper is used to create char
import characters_json from '../data/characters.json';

//this function gives the character from our json file ehose id matches with supplied id
export function createCharacter(id){
	let character=characters_json.find(c=>c.id===id);
	return character
}
