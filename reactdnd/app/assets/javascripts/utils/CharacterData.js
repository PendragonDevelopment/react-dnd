var CharacterData = {
  init: function() {
    localStorage.clear();
    localStorage.setItem('character', JSON.stringify([
      {
        id: '1',
        name: 'Jeff',
        gender: 'Male',
        race: 'Orc',
        profession: 'Warrior',
        bio: 'The finest warrior money can buy. Hints of keyboard aerosol, with a whiff of iKlear wipes on the nose. If you pass out while drinking this beverage, Chris Sevilleja personally tucks you in.',       
      },
    ]));
  }

};