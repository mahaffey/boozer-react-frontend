import React from 'react'
import LoaderExample from './semantic/loader'
import { Container, Grid } from 'semantic-ui-react'
import Cocktail from './Cocktail'
import {Switch, Route} from 'react-router-dom'
import CocktailsContainer from './CocktailContainer'
import CocktailShow from './CocktailShow'

class CocktailList extends React.Component {

    index() {
        if (this.props && this.props.allCocktails) {


            const cocktailList =
                <ol>
                    {this.props.allCocktails.map((el, idx) => {
                        return (
                            <li key={idx}>

                                <Cocktail cocktail={el} key={idx}/>
                            </li>
                            )
                        })
                    }
                </ol>
            return cocktailList
        } else {
            return (<LoaderExample/>)
        }
    }

     render() {
        return (
            <div>
                <Grid celled>
                    <Grid.Row>
                        <Grid.Column width={4}>
                            <Container textAlign='left'>
                                <h1>My Dranks</h1>
                                {this.index()}
                            </Container>
                        </Grid.Column>
                        <Grid.Column width={12}>
                            <Container textAlign='left'>
                                <Route path="/cocktails/:cocktailId" render={props => <CocktailShow {...props} />} />
                            </Container>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default CocktailsContainer(CocktailList)