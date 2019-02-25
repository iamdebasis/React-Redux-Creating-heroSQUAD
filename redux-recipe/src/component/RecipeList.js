import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import RecipeItem from './RecipeItem';
class RecipeList extends Component {

    render() {
        console.log('props:',this.props)
      return (
        <div>
          {
            this.props.favouriteRecipes.length>0?
            <h4 className="link"><Link to='/favourites'>Favourites</Link></h4>:
            <div></div>
          }
          
            {
                this.props.recipes.map((recipe, index)=>{
                    return(
                        <RecipeItem 
                        key={index} 
                        recipe={recipe}
                        favouriteButton={true}
                        />
                    )
                })
            }
        </div>
      );
    }
  }

function mapStateToProps(state){
    return state;
}
//here we dont have any action so we dont use second patameter mapDiapToProps...
export default connect(mapStateToProps,null)(RecipeList)