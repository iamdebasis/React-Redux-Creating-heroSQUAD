//our first job is to create a reducer.
//once we have reducers we have to set up the store......
//we have to import actions here from actions...

//now as we have two reducers here we have to listen to both of em to do that we have to use combined-reducer function from redux
import {combineReducers} from 'redux'

//we are importing reducers files here...
import characters from './characters_reducer'
import heroes from './heroes_reducer'




//to combine these reducers......and export root reducer
//we can create seperate file for each reducers..
const rootReducer =combineReducers({
	characters,
	heroes
})

//we are exporting this so that others can use it...
export default rootReducer; 
