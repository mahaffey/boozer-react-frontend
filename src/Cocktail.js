import React from 'react'
import {Link} from 'react-router-dom'

export default class Cocktail extends React.Component {

    render() {
        var cocktailLink = `/cocktails/`
        var cocktailName = ''
        if (this.props && this.props.cocktails) {
            cocktailLink += this.props.cocktails.id
            cocktailName = this.props.cocktails.name
        } else {
            cocktailLink += this.props.cocktail.id
            cocktailName = this.props.cocktail.name
        }
    return (
        <div>
            <Link to={cocktailLink}> {cocktailName} </Link>
        </div>
        )
    }
}