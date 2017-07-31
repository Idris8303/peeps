const characters = require('./model/names');

// console.log('testing', characters);

test('Filtering to find character info', function(){
  expect(characters.starWars().length).toBe(2)
});
