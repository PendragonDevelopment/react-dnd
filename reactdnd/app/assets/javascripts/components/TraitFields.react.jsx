var TraitFields = React.createClass({
  getInitialState: function() {
  return {
          traits: this.props.character.traits,
          step: 2
         }
  },
  render: function() {
    return (
      <div className="trait-fields">
        <div className="form-group">
          <label>Traits</label>
          <textarea value={this.state.traits} className="form-control" onChange={this.handleChange} />
        </div>
        <button className="btn btn-default" onClick={this.previousStep}>Previous Step</button>
        <button className="btn btn-default" onClick={this.nextStep}>Next Step</button>
      </div>
    )
  },

  previousStep: function() {
    CharacterSheetActions.previousPage(this.state.step);
  },

  nextStep: function() {
    CharacterSheetActions.nextPage(this.state.step);
  },

  handleChange: function(event) {
    this.setState({traits: event.target.value});
  }

});