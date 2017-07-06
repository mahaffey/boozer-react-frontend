import React, { Component } from 'react'
import { Button, Check, Form, Segment } from 'semantic-ui-react'

export default class Login extends Component {
  constructor () {
    super()

    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.onSubmit(this.state)
    this.setState({
      username: '',
      password: ''
    })
  }
  render() {
    return (
      <div className='login'>
        <Segment inverted>
          <Form inverted onSubmit={this.handleSubmit}>
            <Form.Field>
              <label>Username</label>
              <input name='username' placeholder='username' onChange={this.handleChange} />
            </Form.Field>

            <Form.Field>
              <label>Password</label>
              <input name='password' placeholder='password' type='password' onChange={this.handleChange} />
            </Form.Field>

            <Button inverse color='green' type='submit'>Log In</Button>
          </Form>
        </Segment>
      </div>
    )
  }
}
