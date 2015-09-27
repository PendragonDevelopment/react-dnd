
var CharacterAPI = {

  getCharData: function() {
    CharacterData.init();
    var data = JSON.parse(localStorage.getItem('character'));
    CharacterSheetActions.receiveData(data);
  }

};