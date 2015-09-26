var Summary = React.createClass({
  render: function() {
    return (
      <div className="character-summary">
        <ul>
          <li>{this.props.character.name}</li>
          <li>{this.props.character.bio}</li>
          <li>{this.props.character.traits}</li>
        </ul>
      </div>
    )
  }

});