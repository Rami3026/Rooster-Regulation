const assert = require('assert');
const Rooster = require('../index');
describe('string', () => {
 describe('string', () => {
 it('string', () => {
 it('cock-a-doodle-doo!', () =>{

 });
    });
  });
});
Rooster.timeAtDawn = (hour) => {
  if (hour < 0 || hour > 23) {
    throw new RangeError;
  } else {
    return hour.toString();
  };