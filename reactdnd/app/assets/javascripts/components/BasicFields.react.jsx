var BasicFields = React.createClass({
  getInitialState: function() {
    return {
            name: this.props.character.name,
            profession: this.props.character.profession,
            race: this.props.character.race,
            gender: this.props.character.gender,
            step: 1,
           }
  },

  render: function() {
    return (
      <div className="basic-fields">
        <div className="form-group">
          <label>Name</label>
          <input type="text" value={this.state.name} className="form-control" onChange={this.handleChange} />
        </div>

        <div className="form-group">
          <label>Gender</label>
          <select className="form-control" value={this.state.gender} onChange={this.onGenderSelect}>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        <div className="form-group">
          <label>Race</label>
          <select className="form-control" value={this.state.race} onChange={this.onRaceSelect}>
            <option>Human</option>
            <option>Dwarf</option>
            <option>Elf</option>
            <option>Orc</option>
          </select>
        </div>

        <div className="form-group">
          <label>Class</label>
          <select className="form-control" value={this.state.profession} onChange={this.onProfessionSelect}>
            <option>Warrior</option>
            <option>Mage</option>
            <option>Thief</option>
            <option>Cleric</option>
          </select>
        </div>

        <button className="btn btn-default" onClick={this.nextStep}>Save &amp; Continue</button>
      </div>
    )
  },

  nextStep: function() {
    
    var data = {
      name: this.state.name,
      profession: this.state.profession,
      race: this.state.race,
      gender: this.state.gender,
    };

    CharacterSheetActions.saveForm(data);
    CharacterSheetActions.nextPage(this.state.step);
  },

  handleChange: function(event) {
    this.setState({name: event.target.value});
  },

  onGenderSelect: function(e) {
    this.setState({
      gender: e.target.value,
    })
  },

  onProfessionSelect: function(e) {
    this.setState({
      profession: e.target.value,
    })
  },

  onRaceSelect: function(e) {
    this.setState({
      race: e.target.value,
    })
  },

});