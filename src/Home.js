import React from 'react'

let imgurl = 'http://www.joesateast.com/sites/default/files/cocktails-at-joes-at-east.jpg'

const Home = () => {
    return (
    <div>
        <div>
            <h2>Welcome to the Cocktail Wiki</h2>
            <img src={imgurl} alt="cocktails">


            </img>
        </div>

    </div>
    )
}

export default Home