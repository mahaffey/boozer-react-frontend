import React from 'react'
import ProportionsForm from './ProportionsForm'

export default class NewCocktail extends React.Component {
  constructor() {
    super()

    this.state ={
      cocktailName: "",
      cocktailDescription: "",
      cocktailInstructions: "",
      cocktailProportions: []
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

    render() {
      console.log(this.state)
      return (
        <form>
          <label>Name:</label>
            <input type='text' value={this.state.cocktailName} onChange={this.addNew} name='cocktailName'/>
          <label>Description:</label>
            <textarea value={this.state.cocktailDescription} onChange={this.addNew} name='cocktailDescription'/>
          <label>Instructions:</label>
            <textarea value={this.state.cocktailInstructions} onChange={this.addNew} name='cocktailInstructions'/>
          <h4>Proportions:</h4>
          <ProportionsForm submitProportion={this.submitProportion.bind(this)}/>
          {/* <input type="submit" onClick={this.addNew} value="Add New Cocktail!" /> */}
        </form>
      )
    }
}
