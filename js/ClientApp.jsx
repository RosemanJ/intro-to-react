const React = require('react')
const Landing = require('./landing')
const Search = require('./search')
const Layout = require('./layout')
const Details = require('./details')
const {Router, Route, IndexRoute, browserHistory} = require('react-router')
const {store} = require('./store')
const {Provider} = require('react-redux')

const myRoutes = () => (
  <Route path='/' component={Layout}>
    <IndexRoute component={Landing} />
    <Route path='/search' component={Search} />
    <Route path='/details/:id' component={Details} />
  </Route>
)

const App = React.createClass({
  render () {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          {myRoutes()}
        </Router>
      </Provider>
    )
  }
})

App.Routes = myRoutes

module.exports = App
