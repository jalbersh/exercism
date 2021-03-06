'use strict';

const Converter = require('./all-your-base');

const converter = new Converter();

describe('Converter', function () {

  it('single bit one to decimal', function () {
    expect(converter.convert([1], 2, 10)).toEqual([1]);
  });

  it('binary to single decimal', function () {
    expect(converter.convert([1, 0, 1], 2, 10)).toEqual([5]);
  });

  it('single decimal to binary', function () {
    expect(converter.convert([5], 10, 2)).toEqual([1, 0, 1]);
  });

  it('binary to multiple decimal', function () {
    expect(converter.convert([1, 0, 1, 0, 1, 0], 2, 10)).toEqual([4, 2]);
  });

  it('decimal to binary', function () {
    expect(converter.convert([4, 2], 10, 2)).toEqual([1, 0, 1, 0, 1, 0]);
  });

  it('trinary to hexadecimal', function () {
    expect(converter.convert([1, 1, 2, 0], 3, 16)).toEqual([2, 10]);
  });

  it('hexadecimal to trinary', function () {
    expect(converter.convert([2, 10], 16, 3)).toEqual([1, 1, 2, 0]);
  });

  xit('15-bit integer', function () {
    expect(converter.convert([3, 46, 60], 97, 73)).toEqual([6, 10, 45]);
  });

  it('empty list', function () {
    expect(function () {
      converter.convert([], 2, 10);
    }).toThrow(new Error('Input has wrong format'));
  });

  it('single zero', function () {
    expect(converter.convert([0], 10, 2)).toEqual([0]);
  });

  it('multiple zeros', function () {
    expect(function () {
      converter.convert([0, 0, 0], 10, 2);
    }).toThrow(new Error('Input has wrong format'));
  });

  it('leading zeros', function () {
    expect(function () {
      converter.convert([0, 6, 0], 7, 10);
    }).toThrow(new Error('Input has wrong format'));
  });

  it('negative digit', function () {
    expect(function () {
      converter.convert([1, -1, 1, 0, 1, 0], 2, 10);
    }).toThrow(new Error('Input has wrong format'));
  });

  it('invalid positive digit', function () {
    expect(function () {
      converter.convert([1, 2, 1, 0, 1, 0], 2, 10);
    }).toThrow(new Error('Input has wrong format'));
  });

  it('first base is one', function () {
    expect(function () {
      converter.convert([], 1, 10);
    }).toThrow(new Error('Wrong input base'));
  });

  it('second base is one', function () {
    expect(function () {
      converter.convert([1, 0, 1, 0, 1, 0], 2, 1);
    }).toThrow(new Error('Wrong output base'));
  });

  it('first base is zero', function () {
    expect(function () {
      converter.convert([], 0, 10);
    }).toThrow(new Error('Wrong input base'));
  });

  it('second base is zero', function () {
    expect(function () {
      converter.convert([7], 10, 0);
    }).toThrow(new Error('Wrong output base'));
  });

  it('first base is negative', function () {
    expect(function () {
      converter.convert([1], -2, 10);
    }).toThrow(new Error('Wrong input base'));
  });

  it('second base is negative', function () {
    expect(function () {
      converter.convert([1], 2, -7);
    }).toThrow(new Error('Wrong output base'));
  });

  it('both bases are negative', function () {
    expect(function () {
      converter.convert([1], -2, -7);
    }).toThrow(new Error('Wrong input base'));
  });

  it('missing input base throws an error', function () {
    expect(function () {
      converter.convert([0]);
    }).toThrow(new Error('Wrong input base'));
  });

  it('wrong input_base base not integer', function () {
    expect(function () {
      converter.convert([0], 2.5);
    }).toThrow(new Error('Wrong input base'));
  });

  it('missing output base throws an error', function () {
    expect(function () {
      converter.convert([0], 2);
    }).toThrow(new Error('Wrong output base'));
  });

  it('wrong output_base base not integer', function () {
    expect(function () {
      converter.convert([0], 3, 2.5);
    }).toThrow(new Error('Wrong output base'));
  });

});
