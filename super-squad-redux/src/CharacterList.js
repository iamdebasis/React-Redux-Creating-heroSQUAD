import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addCharacterById} from './actions'

class CharacterList extends Component {
  render() {
      console.log('this.props',this.props)
    return (
      <div >
        <div><h2>Characters</h2></div>
        <ul className="list-group">
            {
                this.props.characters.map(character=>{
                    return(
                        <li key={character.id} className="list-group-item">
                        <div className="list-item">{character.name}</div>
                        <div className="list-item right-button" 
                        onClick={()=>this.props.addCharacterById(character.id)}>
                            +
                        </div>
                        </li>
                    )
                })
            }
        </ul>
      </div>
    );
  }
}

//mapStateToProps will take the redux state and map it to the props obj in our component
//so that we can access store in our component
function mapStateToProps(state){
    return {
        characters: state.characters
    };
}
//this method returns an objectso that the data in it can be a part of the props.

//2.mapDispatchToProps  used as action creator...our component can call action creator, activate reducers and update the store.
//it also takesone argument dispatch
//////......................................
// function mapDispatchToProps(dispatch){
//     return bindActionCreators({addCharacterById},dispatch)
// }
//it will return

//connect used to use data from the store within this component 
//CONNECT function returns another function for us to call as a result.. in that returned function we have to pass the componenent (ie CharacterList) that we
//want to connect with redux.
//connect function takes to arguments...they are two other functions 1. mapStateToProps 
//2.mapDispatchToProps  used as action creator...our component can call action creator, activate reducers and update the store.
//it also takesone argument dispatch

//mapStateToProps will take the redux state and map it to the props obj in our component

//export default connect(mapStateToProps,mapDispatchToProps)(CharacterList);

export default connect(mapStateToProps,{addCharacterById})(CharacterList);
