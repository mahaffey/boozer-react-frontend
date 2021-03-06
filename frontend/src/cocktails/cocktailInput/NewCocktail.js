import React from 'react'
import ProportionsForm from './ProportionsForm'
import { Button, Form } from 'semantic-ui-react'

export default class NewCocktail extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      cocktailName: "",
      cocktailDescription: "",
      cocktailInstructions: "",
      cocktailProportions: [],
    }
  }

    addNew = (event) => {
      event.preventDefault()
      const obj = {}
      obj[event.target.name] = event.target.value
      this.setState(obj)
    }

    submitProportion(newProportion) {
      this.setState({
        cocktailProportions: [...this.state.cocktailProportions, newProportion]
      })
    }

    submitNewCocktail(event) {
      event.preventDefault()
      const obj = {cocktail: this.state}
      const url = "http://localhost:3000/api/v1/cocktails/"
      fetch(url, {
        method: "POST",
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
      })

      this.setState({cocktailName: "",
        cocktailDescription: "",
        cocktailInstructions: "",
        cocktailProportions: [],})

        this.props.toggle()
    }


    addedIngredients(){
      return(
      <div>
        <h3>Ingredients Added:</h3>
        <ul>
          {this.state.cocktailProportions.map(el => <li><h4>{el.ingredient} - {el.amount}</h4></li>)}
        </ul>
      </div>
    )
    }

    render() {
      return (
      <div>
          <Form>
            <Form.Field>
              <label style={{color: 'white'}}>Name:</label>
                <input type='text' value={this.state.cocktailName} onChange={this.addNew} name='cocktailName'/>
            </Form.Field>

            <Form.Field>
              <label style={{color: 'white'}}>Description:</label>
                <textarea value={this.state.cocktailDescription} onChange={this.addNew} name='cocktailDescription'/>
            </Form.Field>

            <Form.Field>
              <ProportionsForm submitProportion={this.submitProportion.bind(this)}/>
            </Form.Field>

            <Form.Field>
              <label style={{color: 'white'}}>Instructions:</label>
                <textarea value={this.state.cocktailInstructions} onChange={this.addNew} name='cocktailInstructions'/>
            </Form.Field>


            <Button inverted color='green' type="submit" onClick={this.submitNewCocktail.bind(this)} >Add New Cocktail!</Button>
          </Form>
          {(this.state.cocktailProportions.length > 0) && this.addedIngredients()}
      </div>
      )
    }
}
