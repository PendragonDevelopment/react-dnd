var FeatFields = React.createClass({
  getInitialState: function() {
  return {
          bio: this.props.character.bio,
          step: 3
         }
  },
  render: function() {
    return (
      <div className="feat-fields">
        <div className="form-group">
          <label>Bio</label>
          <textarea value={this.state.bio} className="form-control" onChange={this.handleChange} />
        </div>

        <button className="btn btn-default" onClick={this.previousStep}>Previous Step</button>
        <button className="btn btn-default" onClick={this.nextStep}>Save &amp; Continue</button>
      </div>
    )
  },

  previousStep: function() {
    CharacterSheetActions.previousPage(this.state.step);
  },

  nextStep: function() {
    var data = {
      bio: this.state.bio
    };

    CharacterSheetActions.saveForm(data);
    CharacterSheetActions.nextPage(this.state.step);
  },

  handleChange: function(event) {
    this.setState({bio: event.target.value});
  }

});