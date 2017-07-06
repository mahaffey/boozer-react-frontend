import React from 'react'
import {Link, Route} from 'react-router-dom'
import {Menu, Icon} from 'semantic-ui-react'
import NewCocktailModal from './NewCocktailModal'



class MenuInvert extends React.Component {
    state = {
        activeItem: 'home',
        visible: false
    }

    toggleVisibility = (event) => {
        debugger
        if (event.target.id !== "new") {
            this.setState({visible: false})
        } else {
            this.setState({visible: true})
            }
        }

    render() {
        const { activeItem } = this.state.activeItem

        return (
            <Menu inverted>
                <Link to="/">
                    <Menu.Item name='home' active={activeItem === 'home'}>
                        <Icon name='diamond' />
                        Home
                    </Menu.Item>
                </Link>
                <Link to="/cocktails">
                    <Menu.Item name='messages' active={activeItem === 'cocktails'}>
                        <Icon name='cocktail' />
                        Cocktails
                    </Menu.Item>
                </Link>

                <Menu.Item id='new' name='new' active={activeItem === 'new'} onClick={this.toggleVisibility}>
                    <Icon name='add square' />
                    Add Cocktail
                    <Link to={window.location.pathname}>
                        <Route component={() => <NewCocktailModal visible={this.state.visible}/>}/>
                    </Link>
                </Menu.Item>

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


