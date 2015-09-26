function getCharacterState() {
  return {
    step: CharacterSheetStore.getStep(),
  }
}

var CharacterSheet = React.createClass({

  getInitialState: function() {
    return getCharacterState();
  },

  componentDidMount: function() {
    CharacterSheetStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    CharacterSheetStore.removeChangeListener(this._onChange);
  },

   showStep: function() {
    switch (this.state.step) {
      case 1:
        // references to props here should be changed to state
        return <BasicFields   character={this.props.character}
                              nextStep={this.nextStep}
                              previousStep={this.previousStep}
                              saveValues={this.saveValues} />
      case 2:
        return <TraitFields  character={this.props.character}
                             nextStep={this.nextStep}
                             previousStep={this.previousStep} />
      case 3:
        return <FeatFields   character={this.props.character}
                             nextStep={this.nextStep}
                             previousStep={this.previousStep} />
      case 4:
        return <Summary character={this.props.character}
                        previousStep={this.previousStep} />
    }
  },

  render: function() {
    return (
      <div className="character-sheet">
        {this.showStep()}
      </div>
    )

  },

  // Method to setState based upon Store changes
  _onChange: function() {
    this.setState(getCharacterState());
  }
})