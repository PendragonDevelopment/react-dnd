function GetCharacterState() {
  return {

  }
}

var CharacterSheet = React.createClass({

  getInitialState: function() {

  },

  componentDidMount: function() {
    CharacterSheetStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    CharacterSheetStore.removeChangeListener(this._onChange);
  },

  render: function() {

  }

  _onChange: function() {

  }
})