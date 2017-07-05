import React from 'react'
import {Link} from 'react-router-dom'
import {Menu, Icon} from 'semantic-ui-react'


class MenuInvert extends React.Component {
    state = { activeItem: 'home' }

    render() {
        const { activeItem } = this.state

        return (
            <Menu inverted>
                <Menu.Item name='home' active={activeItem === 'home'}>
                    <Icon name='diamond icon' />
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item name='messages' active={activeItem === 'cocktails'}>
                    <Icon name='cocktail icon' />
                    <Link to="/cocktails">Cocktails</Link></Menu.Item>
            </Menu>
        )
    }
}

const Navigation = () => {
    return (
        <div>
            <MenuInvert />
        </div>
    )
}

export default Navigation
