import React from 'react'
import {Link} from 'react-router-dom'

const Navigation = () => {
    return (
        <div>
            <h3><Link to="/">Home</Link></h3>
            <h3><Link to="/cocktails">Cocktails</Link></h3>
        </div>
    )
}

export default Navigation
