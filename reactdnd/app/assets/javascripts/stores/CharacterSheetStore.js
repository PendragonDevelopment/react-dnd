var CharacterSheetStore = _.extend({}, EventEmitter.prototype, {

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
      CharacterSheetStore.emit('change');
      break;
    case 'PREV_PAGE':
      CharacterSheetStore.emit('change');
      break;
    case 'SAVE_FORM':
      CharacterSheetStore.emit('change');
      break;
    case 'SUBMIT_FORM':
      CharacterSheetStore.emit('change');
      break;
    case 'UPLOAD_IMAGE':
      CharacterSheetStore.emit('change');
      break;

    default:
      // do nothing

  }
}