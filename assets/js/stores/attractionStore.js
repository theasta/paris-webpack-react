var _ = require('lodash');
var EventEmitter = require('events').EventEmitter;
var appDispatcher = require('../dispatcher/appDispatcher');
var assign = require('object-assign');
var attractionConstants = require('../constants/attractionActions');
var conf = require('../constants/conf');


var _attractions = [];
var _attractionsById = [];

/* public functions */

var store = assign({}, EventEmitter.prototype, {

  getAll: function() {
    return _attractions;
  },

  getById: function (attractionId) {
    return _attractionsById[attractionId];
  },

  getId: function (attraction) {
    return attraction.id;
  },

  getTotalCount: function () {
    return _attractions.length;
  },

  indexOf: function (attraction) {
    for (var i = 0, l = _attractions.length; i < l; i++) {
      if (this.getId(attraction) == this.getId(_attractions[i])) {
        return i;
      }
    }
    return -1;
  },

  emitChange: function() {
    this.emit(conf.CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(conf.CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(conf.CHANGE_EVENT, callback);
  }
});

/* private functions */
var _add = function (attraction) {
  _attractions.push(attraction);
  _attractionsById[this.getId(attraction)] = attraction;
}.bind(store);

var _set = function (attractions) {
  if (!_.isArray(attractions)) {
    attractions = [attractions];
  }
  var existing;
  for (var i = 0, l = attractions.length; i < l; i++) {
    var attraction = attractions[i];
    var id = this.getId(attraction);
    if (existing = this.getById(id)) {
      _update(attraction);
    } else {
      _add(attraction);
    }
  }
}.bind(store);


var _update = function (attraction) {
  var index = this.indexOf(attraction);
  _attractions[index] = attraction;
  _attractionsById[this.getId(attraction)] = attraction;
}.bind(store);

/* App Dispatcher */

appDispatcher.register(function(action) {
  switch(action.type) {
    case attractionConstants.LOAD_SUCCESS:
    case attractionConstants.LOAD_ATTRACTION_SUCCESS:
      _set(action.response);
      store.emitChange();
      break;
    default:
    // no op
  }
});

module.exports = store;
