import React from 'react'
import LoaderExample from './semantic/loader'
import { Card } from 'semantic-ui-react'
import CocktailContainer from './CocktailContainer'
import CocktailList from './Cocktail'

class CocktailShow extends React.Component {



    fetchCocktail (nextProps) {
        const baseUrl = 'http://localhost:3000/api/v1/cocktails/'
        let cocktailId = null
        if (nextProps){
            cocktailId = nextProps.match.params.cocktailId
        }else{

            cocktailId = this.props.match.params.cocktailId
        }
        console.log(this.props.match.params.cocktailId )
        if(cocktailId) {
            // debugger
            fetch(baseUrl + cocktailId)
                .then(res => res.json())
                .then(jsonRes => {
                    this.setState({cocktail: jsonRes})
                })}
    }

    componentWillReceiveProps(nextProps){
        console.log("will receive props", nextProps)
        this.fetchCocktail(nextProps)
    }

    componentWillMount(){
        this.fetchCocktail()
    }

    loading () {
        if (this.state) {

            if (this.state.cocktail) {
            return (
                    <Card fluid raised >
                        <Card.Content>
                            <h1>
                                 {` ` + this.state.cocktail.name}
                            </h1>
                        </Card.Content>

                        <Card.Content>
                        <ul>
                            <li>
                                <div>
                                    <h3>Description:</h3>
                                    <h4>{this.state.cocktail.description}</h4>
                                </div>
                            </li>
                            <br/>
                            <li>
                                <div>
                                    <h3>Instructions:</h3>
                                    <h4>{this.state.cocktail.instructions}</h4>
                                </div>
                            </li>
                            <br/>
                            <li>
                                <div>
                                    <h3>Source:</h3>
                                    <h4>{this.state.cocktail.source}</h4>
                                </div>
                            </li>g
                        </ul>
                        </Card.Content>
                        <Card.Content>
                            <h2>Ingredients:</h2>
                            <ul>
                                {(this.state.cocktail.proportions) &&
                                     this.state.cocktail.proportions.map(el =>
                                        <li>{el.ingredient_name} - {el.amount}</li>)
                                 ||

                                     <LoaderExample/>
                                 }
                            </ul>
                        </Card.Content>
                    </Card>

            )}} else {
            return <LoaderExample/>
        }
    }



    render () {
        return (
            <div>
                { this.loading() }
            </div>
        )
    }
}

export default CocktailShow

