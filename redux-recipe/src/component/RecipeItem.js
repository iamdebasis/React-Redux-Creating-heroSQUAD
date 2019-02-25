import React, { Component } from 'react';
import { connect } from 'react-redux';

//for each item we should be able to add it in our vafoutite list so we have to import 
//actions here...
import { favouriteRecipes} from '../actions'

class RecipeItem extends Component {
  constructor(){
    super();
    this.state={
      favourited:false,
    }
  }
  favourite(recipe){
    this.props.favouriteRecipes(recipe)
    this.setState({favourited:true})
  }

    render() {
      let {recipe}=this.props;
       // console.log('props:',this.props)
      return (
        <div className="recipe-item">
        {this.props.favouriteButton?
        
          this.state.favourited?       
          <div>&#9733;</div>:
           <div onClick={()=>this.favourite(recipe)}>&#9734;</div>
        :<div></div>
      }

        <div className="star" className="recipe-text">
          <a href={recipe.href}>
            <h4 >{recipe.title}</h4>
          </a>
          <p>{recipe.ingredients}</p>
        </div>
           <img 
           src={recipe.thumbnail} 
           alt={recipe.title}
           className="recipe-img"
           />       
        </div>
      );
    }
  }

  export default connect(null,{favouriteRecipes})(RecipeItem) ;