import React from 'react'

export default class ProportionsForm extends React.Component {
  constructor() {
    super()
    this.state = {
      ingredient: "",
      amount: ""
    }
  }

  addProportion = (event) => {
    event.preventDefault()
    this.props.submitProportion(this.state)
  }

  setProportion = (event) => {
    const prop = {}
    prop[event.target.name] = event.target.value
    this.setState(prop)
  }

  render () {
    return (
      <div>
        <form >
          <label>Ingredient:</label>
          <input onChange={this.setProportion} type='text' name='ingredient'></input>
          <label>Amount:</label>
          <input onChange={this.setProportion} type='text' name='amount'></input>
          <input type='submit' onClick={this.addProportion.bind(this)} value="Add Proportion!"></input>
        </form>
      </div>
    )

  }
}
