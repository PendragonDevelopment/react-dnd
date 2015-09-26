/*function GetCharacterState() {
  return {

  }
}*/

var CharacterSheet = React.createClass({

  getInitialState: function() {
    return {
      step : 1
    }
  },

  /*componentDidMount: function() {
    CharacterSheetStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    CharacterSheetStore.removeChangeListener(this._onChange);
  },*/

   showStep: function() {
    switch (this.state.step) {
      case 1:
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

  nextStep: function() {
    this.setState({
      step : this.state.step + 1
    })
  },

  previousStep: function() {
    this.setState({
      step : this.state.step - 1
    })
  },

  render: function() {
    return (
      <div className="character-sheet">
        {this.showStep()}
      </div>
    )

  }

  /*_onChange: function() {

  }*/
})