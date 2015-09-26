var Summary = React.createClass({
  render: function() {
    return (
      <div className="character-summary">
        <ul>
          <li>{this.props.character.name}</li>
          <li>{this.props.character.bio}</li>
          <li>{this.props.character.traits}</li>
        </ul>
        <button className="btn btn-default" onClick={this.previousStep}>Go Back</button>
      </div>
    )
  },

  previousStep: function() {
    var step = 4;
    CharacterSheetActions.previousPage(step);
  }

});