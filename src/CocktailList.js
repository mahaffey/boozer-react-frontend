import React from 'react'
import LoaderExample from './semantic/loader'
import { Container, Grid, Sidebar, Segment, Menu, List } from 'semantic-ui-react'
import Cocktail from './Cocktail'
import { Route } from 'react-router-dom'
import CocktailsContainer from './CocktailContainer'
import CocktailShow from './CocktailShow'


class CocktailList extends React.Component {

    index() {
        if (this.props && this.props.allCocktails) {


            const cocktailList =

                    <List divided relaxed ordered>
                        {this.props.allCocktails.map((el, idx) => {
                            return (
                                <List.Item key={idx}>
                                    <List.Content>
                                        <List.Header>
                                            <div>
                                                &nbsp;&nbsp;
                                                <Cocktail cocktail={el} key={idx}/>
                                            </div>
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


     render() {

        return (
            <div>
                <Grid celled>
                    <Grid.Row style={{height: window.innerHeight-135}}>
                        <Grid.Column width={4}>
                            <div className="dranks">
                                <span className="border">All The Dranks</span>
                            </div>
                            <Sidebar.Pushable as={Segment} style={{height: window.innerHeight-200}}>
                                <Sidebar as={Menu} animation='overlay' direction='bottom' inverted />
                                    <Sidebar.Pusher >
                                        <Segment textAlign='left'>
                                            {this.index()}
                                        </Segment>
                                    </Sidebar.Pusher>
                            </Sidebar.Pushable>
                        </Grid.Column>
                        <Grid.Column width={12} >
                            <Container textAlign='left' >
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
