const React = require('react')
const ShowCard = require('./ShowCard')
const Header = require('./header')
const {object, string, arrayOf} = React.PropTypes
const {connector} = require('./store')

const Search = React.createClass({
  propTypes: {
    shows: arrayOf(object),
    searchTerm: string
  },
  render () {
    return (
      <div className='container'>
        <Header showSearch />
        <div className='shows'>
          {this.props.shows
            .filter((show) => `${show.title} ${show.description}`.toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >= 0)
            .map((show) => (
              <ShowCard show={show} key={show.imdbID} />
            ))
          }
        </div>
      </div>
    )
  }
})

module.exports = connector(Search)
