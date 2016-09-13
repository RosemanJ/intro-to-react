const React = require('react')
const Landing = require('./landing')
const Search = require('./search')
const Layout = require('./layout')
const Details = require('./details')
const {Router, Route, IndexRoute, hashHistory} = require('react-router')
const {store} = require('./store')
const {Provider} = require('react-redux')

const App = React.createClass({
  render () {
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path='/' component={Layout}>
            <IndexRoute component={Landing} />
            <Route path='/search' component={Search} />
            <Route path='/details/:id' component={Details} />
          </Route>
        </Router>
      </Provider>
    )
  }
})

module.exports = App