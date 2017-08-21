import React from 'react'
import LoaderExample from '../semantic/loader'
import { Container, Grid, Sidebar, Segment, Menu, List } from 'semantic-ui-react'
import Cocktail from './Cocktail'
import { Route } from 'react-router-dom'
import CocktailsContainer from './CocktailContainer'
import CocktailShow from './CocktailShow'
import { unique } from '../arrayUnique'

class CocktailList extends React.Component {

    componentWillReceiveProps (nextProps) {
        this.state = {
            cocktails: nextProps.cocktails,
            query: nextProps.query,
        }
    }

    filteredNames () {
        return this.state.query === '' ? this.state.cocktails :
            this.state.cocktails.filter((el) =>
              el.name.toLowerCase().includes(this.state.query.toLowerCase()
            ))
    }

    filteredIngredients() {
      const cocktails = this.state.cocktails
      const ingredientCocktails = []

      if (this.state.query === '') {
        return cocktails
      } else {
          for (let i = 0; i < cocktails.length; i ++) {
            cocktails[i].proportions.map((el) => {
              if (el.ingredient_name.toLowerCase().includes(
                this.state.query.toLowerCase())) {
                  ingredientCocktails.push(cocktails[i])
                }
              }
          )}
        }
        return ingredientCocktails.unique()
      }

    filtered() {
      let cocktailNames = this.filteredNames()
      let cocktailIngredients = this.filteredIngredients()
      let combined = cocktailNames.concat(cocktailIngredients).unique()

      return combined
    }

    index () {
        if (this.props && this.props.cocktails) {
            const cocktailList =
                    <List divided relaxed>
                        {this.filtered().map((el, idx) => {
                            return (
                                <List.Item key={idx}>
                                    <List.Icon name='cocktail' />
                                    <List.Content>
                                        <List.Header>
                                            <Cocktail
                                              cocktail={el}
                                              key={idx}
                                            />
                                        </List.Header>
                                    </List.Content>
                                </List.Item>
                                )
                            })
                        }
                    </List>
            return cocktailList
        } else {
            return (<LoaderExample/>)
        }
    }

     render () {
        return (
            <div>
                <Grid celled>
                    <Grid.Row style={{height: window.innerHeight-135}}>
                        <Grid.Column width={4}>
                            <div className="dranks">
                                <span className="border">
                                  All The Dranks
                                </span>
                            </div>
                            <Sidebar.Pushable
                              as={Segment}
                              style={{height: window.innerHeight-200}}>
                                <Sidebar
                                  as={Menu}
                                  animation='overlay'
                                  direction='bottom'
                                  inverted
                                />
                                    <Sidebar.Pusher >
                                        <Segment textAlign='left'>
                                            {this.index()}
                                        </Segment>
                                    </Sidebar.Pusher>
                            </Sidebar.Pushable>
                        </Grid.Column>
                        <Grid.Column width={12} >
                            <br/>
                            <Container textAlign='left' >
                                <Route path="/cocktails/:cocktailId" render={props => <CocktailShow {...props} />}
                                />
                            </Container>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default CocktailsContainer(CocktailList)


Array.prototype.unique = function() {
    let a = this.concat()
    for(let i = 0; i < a.length; ++i) {
        for(let j = i + 1; j < a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a
}
