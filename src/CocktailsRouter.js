import React from 'react'
import { Route } from 'react-router-dom'
import CocktailList from './CocktailList'

const CocktailRouter = () => {
    return (
        <div>
            <Route path="/cocktails" component={CocktailList} />
        </div>
    )
}

export default CocktailRouter
