const React = require('react')
const {Link} = require('react-router')
const {func, bool, string} = React.PropTypes
const { connector } = require('./store')

const Header = React.createClass({
  propTypes: {
    setSearchTerm: func,
    showSearch: bool,
    searchTerm: string
  },
  handleSearchTermEvent (event) {
    this.props.setSearchTerm(event.target.value)
  },
  render () {
    let utilSpace
    if (this.props.showSearch) {
      utilSpace = <input value={this.props.searchTerm} className='search-input' type='text' placeholder='Search' onChange={this.handleSearchTermEvent} />
    } else {
      utilSpace = (
        <h2 className='header-back'>
          <Link to='/search'>Back</Link>
        </h2>
      )
    }
    return (
      <header className='header'>
        <h1 className='brand'>
          <Link to='/' className='brand-link'>React Fake App</Link>
        </h1>
        {utilSpace}
      </header>
    )
  }
})

module.exports = connector(Header)
