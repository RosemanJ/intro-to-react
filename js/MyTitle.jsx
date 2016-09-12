const React = require('react') /* this will make sure React is not set as a global variable - pull it from NPM instead */
const div = React.DOM.div
const h1 = React.DOM.h1

/* composite component */
const MyTitle = React.createClass({
  render () {
    const style = {color: this.props.color}
    return (/* can only return one element, so maybe get in the habit of always using a wrapper? */
      <div>
        <h1 style={style}>
          {this.props.title}
        </h1>
      </div>
    )
  }
})

module.exports = MyTitle
