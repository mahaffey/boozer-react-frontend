import React from 'react'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

const LoaderExample = () => (
    <div>
        <Segment>
            <Dimmer active inverted>
                <Loader indeterminate>Mixing Drinks</Loader>
            </Dimmer>

            <Image src='http://files.gamebanana.com/img/ss/guis/5921229addf4e.jpg' />
        </Segment>
    </div>
)

export default LoaderExample