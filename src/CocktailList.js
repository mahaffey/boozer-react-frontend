import React from 'react'
import LoaderExample from './semantic/loader'
import { Container, Grid, Sidebar, Segment, Menu } from 'semantic-ui-react'
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
                    <Grid.Row stretched='false'>
                        <Grid.Column width={4}>
                            <h1>My Dranks</h1>
                            <Sidebar.Pushable as={Segment}>
                                <Sidebar as={Menu} animation='overlay' direction='bottom' inverted>
                                </Sidebar>
                                    <Sidebar.Pusher>
                                        <Segment textAlign='left'>
                                            {this.index()}
                                        </Segment>
                                    </Sidebar.Pusher>
                            </Sidebar.Pushable>
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