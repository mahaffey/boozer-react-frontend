import React from 'react'
import {Menu, Icon} from 'semantic-ui-react'
import NewCocktailModal from '../cocktails/cocktailInput/NewCocktailModal'
import {BrowserRouter as Router, Route, Redirect, Link} from 'react-router-dom'
import Home from '../Home'
import Auth from '../auth/AuthAdaptor'
import createBrowserHistory from 'history/createBrowserHistory'
import LoginForm from '../auth/LoginForm'
import CocktailsRouter from './CocktailsRouter'
import Search from '../cocktails/cocktailInput/CocktailSearch'


class MenuInvert extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
          activeItem: 'home',
          visible: false,
          auth: {
            isLoggedIn: false,
            user: {}
          },
          query: ''
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

    passqueryToCocktailList(el) {
        this.setState({query: el})
    }


    render() {
        const { activeItem } = this.state.activeItem;
        return (
          <div>
            <Menu inverted>
                <Menu.Menu>
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

                    { this.state.auth.isLoggedIn && <Menu.Item id='new' name='new' active={activeItem === 'new'} onClick={this.toggleVisibility}>
                        <Icon name='add square' />
                        Add Cocktail
                        <Link to={window.location.pathname}>
                            <Route component={() => <NewCocktailModal visible={this.state.visible}  toggle={this.toggleVisibility.bind(this)}/>}/>
                        </Link>
                    </Menu.Item> }

                </Menu.Menu>

                <Menu.Menu position='right'>

                    <Menu.Item>
                        <Search handleSearch={this.passqueryToCocktailList.bind(this)} />
                    </Menu.Item>

                    { !this.state.auth.isLoggedIn && <Menu.Item name='login' active={this.state.activeItem === 'login'}><Link to='/login'>Login</Link></Menu.Item> }

                    { this.state.auth.isLoggedIn && <Menu.Item active={this.state.activeItem === 'logout'} onClick={this.logout.bind(this)}><Link to='/'>Logout</Link></Menu.Item> }
                </Menu.Menu>

            </Menu>


            <Route path='/cocktails' render={() => this.state.auth.isLoggedIn ? <CocktailsRouter query={this.state.query}/> : <Redirect to='/login' /> } />
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
