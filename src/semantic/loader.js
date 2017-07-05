import React from 'react'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

const LoaderExample = () => (
    <div>
        <Segment>
            <Dimmer active inverted>
                <Loader indeterminate>Mixing Drinks</Loader>
            </Dimmer>

            <Image src='http://1.bp.blogspot.com/_coILCAwJ1tg/Sb8IRdv-xfI/AAAAAAAAD30/Ol_qSPwJqLQ/s1600/BeachBar2.jpg' />
        </Segment>
    </div>
)

export default LoaderExample