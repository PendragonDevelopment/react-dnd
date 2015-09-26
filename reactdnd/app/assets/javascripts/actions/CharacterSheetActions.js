var CharacterSheetActions = {

  nextPage: function(step) {
    AppDispatcher.handleAction({
      actionType: CharacterSheetConstants.NEXT_PAGE,
      data: step
    })
  },

  previousPage: function(step) {
    AppDispatcher.handleAction({
      actionType: CharacterSheetConstants.PREV_PAGE,
      data: step
    })
  },

  saveForm: function(character) {
    AppDispatcher.handleAction({
      actionType: CharacterSheetConstants.SAVE_FORM,
      data: character
    })
  },

  submitForm: function(character) {
    AppDispatcher.handleAction({
      actionType: CharacterSheetConstants.SUBMIT_FORM,
      data: character
    })
  },

  uploadImage: function(image) {
    AppDispatcher.handleAction({
      actionType: CharacterSheetConstants.UPLOAD_IMAGE,
      data: image
    })
  }

};