var FeatFields = React.createClass({
  render: function() {
    return (
      <div className="feat-fields">
        <div className="form-group">
          <label>Bio</label>
          <textarea value={this.props.character.bio} className="form-control" />
        </div>

        <button className="btn btn-default" onClick={this.previousStep}>Previous Step</button>
        <button className="btn btn-default" onClick={this.nextStep}>Next Step</button>
      </div>
    )
  },

  previousStep: function() {
    var step = 3;
    CharacterSheetActions.previousPage(step);
  },

  nextStep: function() {
    var step = 3;
    CharacterSheetActions.nextPage(step);
  }

});