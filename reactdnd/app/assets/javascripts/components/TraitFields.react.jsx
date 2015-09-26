var TraitFields = React.createClass({
  render: function() {
    return (
      <div className="trait-fields">
        <div className="form-group">
          <label>Traits</label>
          <textarea value={this.props.character.traits} className="form-control" />
        </div>
        <button className="btn btn-default" onClick={this.previousStep}>Previous Step</button>
        <button className="btn btn-default" onClick={this.nextStep}>Next Step</button>
      </div>
    )
  },

  previousStep: function() {
    var step = 2;
    CharacterSheetActions.previousPage(step);
  },

  nextStep: function() {
    var step = 2;
    CharacterSheetActions.nextPage(step);
  }

});