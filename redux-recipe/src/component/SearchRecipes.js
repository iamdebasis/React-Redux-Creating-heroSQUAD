import React, { Component } from 'react';
import{ Form, FormControl, FormGroup, Button, ControlLabel } from 'react-bootstrap';
import { connect } from 'react-redux'
import { setReciprs } from '../actions'

class SearchRecipes extends Component {
  constructor(){
    super();
    this.state={
      ingredients:'',
      dish:'',
    }
  }
  search(){
    let {ingredients,dish}=this.state
    const cors = 'https://cors-anywhere.herokuapp.com/';
    const url = `${cors}http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`

    fetch(url,{
      method:'GET',
    }).then(blob => blob.json())
    .then(json => {
      this.props.setReciprs(json.results)
    })
  }

  render() {
    return (
      <Form >
        <FormGroup>
            <label className="control-label" >Ingredients</label>
            {' '}
            <FormControl 
            type="text"  
            value="garlic, Chicken"
            onChange={event=> this.setState({ingredients:event.target.value})}
            />
        </FormGroup>
        {' '}  
        <FormGroup>  
        <label className="control-label">Dish</label>
            {' '}
        <FormControl 
        type="text"  
        value="adobo"
        onChange={event=> this.setState({dish:event.target.value})}
        />
        </FormGroup>
        {' '}
        <Button onClick={()=>this.search()}>Submit</Button>
      </Form>
    );
  }
} 
 
export default connect(null,{setReciprs}) (SearchRecipes);
 