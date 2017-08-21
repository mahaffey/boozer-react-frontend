import React from 'react'
import { Input } from 'semantic-ui-react'

export default class Search extends React.Component {
    // handleSearch function lives in ../../src/Navigation/Navigation.js

    constructor() {
        super()
        this.state = {
            query: ''
        }
    }

    handleChange (e) {
        this.setState({query: e.target.value})
        this.props.handleSearch(e.target.value)
    }

    render () {
        return (
            <Input
                placeholder='Search Cocktails'
                value={this.state.query}
                onChange={this.handleChange.bind(this)}
                icon='search'
            />
        )
    }
}
