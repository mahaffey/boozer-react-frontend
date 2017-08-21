import React from 'react'
import { Route } from 'react-router-dom'
import CocktailList from '../cocktails/CocktailList'

export default class CocktailRouter extends React.Component{

    render() {
        return (
            <div>
                <Route path="/cocktails" render={() => <CocktailList query={this.props.query}/>}/>
            </div>
        )
    }

}

