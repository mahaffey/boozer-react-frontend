import React from 'react'

const CocktailContainer = BaseComponent => {
    return class CocktailComponent extends React.Component {

        fetchAll () {
            const baseUrl = 'http://localhost:3000/api/v1/cocktails/'
            fetch(baseUrl)
                .then(res => res.json())
                .then(jsonRes => {
                    this.setState({cocktails: jsonRes})
                })
        }

        componentWillMount () {
            this.fetchAll()
            }

        render () {
            return (
                <BaseComponent {...this.state} {...this.props} />
            )
        }
    }
}

export default CocktailContainer
