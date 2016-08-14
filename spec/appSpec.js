var app = require('../app');

describe('checks getDuplicate test function', function() {
  it('returns valid array if duplicates', function() {
    expect(app.getDuplicates([1,2,3,3,4])).toEqual([3]);
  });
  it('returns valid array if no duplicates', function(){
    expect(app.getDuplicates([1,2,3,4,8])).toEqual([]);
  });
  it('returns sorted array if duplicates', function(){
    expect(app.getDuplicates([4,5,5,3,2,8,2])).toEqual([2,5]);
  });
  it('returns zero sized array if empty array', function(){
    expect(app.getDuplicates([])).toEqual([]);
  });
  it('does not allow non arrays', function(){
    expect(function(){app.getDuplicates(2);}).toThrow("Type Error");
  });
  it('does not allow non integers in array', function(){
    expect(function(){app.getDuplicates([1,"#",2]);}).toThrow("Invalid Array");
  });
  it('returns duplicate values once only', function(){
    expect(app.getDuplicates([1,3,3,3,2,2])).toEqual([2,3]);
  });
});
