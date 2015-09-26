var BasicFields = React.createClass({
  render: function() {
    return (
      <div className="basic-fields">
        <div className="form-group">
          <label>Name</label>
          <input type="text" value={this.props.character.name} className="form-control" />
        </div>

        <button className="btn btn-default" onClick={this.nextStep}>Next Step</button>
      </div>
    )
  },

  nextStep: function() {
    var step = 1;
    CharacterSheetActions.nextPage(step);
  }

});