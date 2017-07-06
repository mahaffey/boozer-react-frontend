import React from 'react'
import {Menu, Icon} from 'semantic-ui-react'
import NewCocktailModal from './NewCocktailModal'
import {BrowserRouter as Router, Route, Redirect, Link} from 'react-router-dom'
import Home from './Home'
import Auth from './AuthAdaptor'
import createBrowserHistory from 'history/createBrowserHistory'
import LoginForm from './LoginForm'
import CocktailsRouter from './CocktailsRouter'


class MenuInvert extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
          activeItem: 'home',
          visible: false,
          auth: {
            isLoggedIn: false,
            user: {}
          }
      }
    }

    componentWillMount() {
      if (localStorage.getItem('jwt')) {
        Auth.currentUser()
          .then(user => {
            if (!user.error) {
              this.setState({
                auth: {
                  isLoggedIn: true,
                  user: user
                }
              })
            }
          })
      }
    }

    logout(){
      localStorage.removeItem('jwt')
      this.setState({
        auth: {
          isLoggedIn: false,
          user:{}
        }
      })
    }

    login(loginParams){
      Auth.login(loginParams)
        .then( user => {
          if (!user.error) {
            this.setState({
              auth: {
                isLoggedIn: true,
                user: user
              }
            })
            localStorage.setItem('jwt', user.jwt)
          }
        })
    }

    toggleVisibility = () => {
            this.setState({visible: !this.state.visible})
        };


    render() {
        const { activeItem } = this.state.activeItem;
        return (
          <div>
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

                {this.state.loggedIn && <Menu.Item id='new' name='new' active={activeItem === 'new'} onClick={this.toggleVisibility}>
                    <Icon name='add square' />
                    Add Cocktail
                    <Link to={window.location.pathname}>
                        <Route component={() => <NewCocktailModal visible={this.state.visible}  toggle={this.toggleVisibility.bind(this)}/>}/>
                    </Link>
                </Menu.Item> }

                <Menu.Item name='login' active={this.state.activeItem === 'login'}><Link to='/login'>Login</Link></Menu.Item>

                <Menu.Item active={this.state.activeItem === 'logout'} onClick={this.logout.bind(this)}><Link to='/'>Logout</Link></Menu.Item>

            </Menu>
            <Route path='/cocktails' render={() => this.state.auth.isLoggedIn ? <CocktailsRouter /> : <Redirect to='/login' /> } />
            <Route path='/login' render={() => this.state.auth.isLoggedIn ? <Redirect to='/' /> : <LoginForm onSubmit={this.login.bind(this)}/>} />
          </div>
        )
    }
}

const Navigation = () => {
    return (
        <div>
            <MenuInvert />
        </div>
    )
};

export default Navigation
