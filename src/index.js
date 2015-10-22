'use strict';

var pbp = require('@ce/pbp');
var mixin = require('@ce/mixin').mixin;
var Stringify = require('@ce/stringify').Stringify;

var value = pbp.value;
var enumerableValue = pbp.enumerableValue;

var Pair = function(x, y) {
  return mixin(Stringify, Object.create(null, {
    type: value('Pair'),
    args: value([x, y]),
    _1: enumerableValue(x),
    _2: enumerableValue(y),
  }));
};

function fst(pair) {
  return pair._1;
}

function snd(pair) {
  return pair._2;
}

module.exports = {
  fst: fst,
  Pair: Pair,
  snd: snd,
};
