
var _step = 1;
var _character = {}

function setNextStep(step) {
  _step += 1;
};

function setPreviousStep(step) {
  _step -= 1;
};

function setChar(newData) {
  _character = _.extend({}, _character, newData);
};

var CharacterSheetStore = _.extend({}, EventEmitter.prototype, {

  getStep: function() {
    return _step;
  },

  getChar: function() {
    return _character;
  },

  emitChange: function() {
    this.emit('change');
  },

  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }
});

AppDispatcher.register(function (payload) {
  var action = payload.action;

  switch(action.actionType) {

    case 'NEXT_PAGE':
      setNextStep(action.step);
      break;
    case 'PREV_PAGE':
      setPreviousStep(action.step);
      break;
    case 'SAVE_FORM':
      setChar(action.data);
      break;
    case 'SUBMIT_FORM':
      break;
    case 'UPLOAD_IMAGE':
      break;
    case 'RECEIVE_DATA':
      setChar(action.data);
      break;

    default:
      break;

  }

  CharacterSheetStore.emitChange();

  return true;

});
