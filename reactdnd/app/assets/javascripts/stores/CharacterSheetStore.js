
var _step = 1;

function setNextStep(step) {
  _step += 1;
};

function setPreviousStep(step) {
  _step -= 1;
};

var CharacterSheetStore = _.extend({}, EventEmitter.prototype, {

  getStep: function() {
    return _step;
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
      break;
    case 'SUBMIT_FORM':
      break;
    case 'UPLOAD_IMAGE':
      break;

    default:
      break;

  }

  CharacterSheetStore.emitChange();

  return true;

});
