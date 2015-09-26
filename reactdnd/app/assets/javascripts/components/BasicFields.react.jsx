var BasicFields = React.createClass({
  getInitialState: function() {
    return {
            name: this.props.character.name,
            step: 1
           }
  },

  render: function() {
    return (
      <div className="basic-fields">
        <div className="form-group">
          <label>Name</label>
          <input type="text" value={this.state.name} className="form-control" onChange={this.handleChange} />
        </div>

        <button className="btn btn-default" onClick={this.nextStep}>Save &amp; Continue</button>
      </div>
    )
  },

  nextStep: function() {
    
    var data = {
      name: this.state.name
    };

    CharacterSheetActions.saveForm(data);
    CharacterSheetActions.nextPage(this.state.step);
  },

  handleChange: function(event) {
    this.setState({name: event.target.value});
  }

});