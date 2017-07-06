import React from 'react'
import { Button, Form } from 'semantic-ui-react'

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
    this.submitProportion
  }

  setProportion = (event) => {
    const prop = {}
    prop[event.target.name] = event.target.value
    this.setState(prop)
  }

  submitNewProportion() {
    const obj = {proportions: this.state.proportions}
    const url = "http://localhost:3000/api/v1/ingredients"
    fetch(url, {
      method: "POST",
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    })
  }

  render () {
    return (
        <Form>
          <Form.Field>
            <label>Ingredient:</label>
            <input onChange={this.setProportion} type='text' name='ingredient'/>
          </Form.Field>

          <Form.Field>
            <label>Amount:</label>
            <input onChange={this.setProportion} type='text' name='amount'/>
          </Form.Field>

          <Button type='submit' onClick={this.addProportion.bind(this)} >Add Proportion!</Button>
        </Form>

    )

  }
}
