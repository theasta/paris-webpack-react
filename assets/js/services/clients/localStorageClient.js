var _ = require('lodash');
require('es6-promise').polyfill();
var Promise = require('es6-promise').Promise;


var fixtures = require('../../../../tests/fixtures/attractions');

var getAll = function () {
  return JSON.parse(window.localStorage.getItem("attractions"));
};

var saveAll = function (wines) {
  window.localStorage.setItem("attractions", JSON.stringify(wines));
};

var generateId = function (item) {
  if (item.id) {
    throw new Error('Attraction already has an id');
  }
  return item.id = _.uniqueId('attraction_');
};

var initialize = function () {
  var attractionsObj = {};
  fixtures.forEach(function(wine) {
    generateId(wine);
    attractionsObj[wine.id] = wine;
  });
  saveAll(attractionsObj);
};

initialize();

module.exports = {
  loadAll: function () {
    return new Promise(function(resolve, reject) {
      _.defer(function () {
        var attractionsObj = getAll();
        var attractions = _.values(attractionsObj);
        if (_.isArray(attractions)) {
          resolve(attractions);
        } else {
          reject(new Error("We couldn't load the attractions."));
        }
      }, 3000);
    });
  },
  loadOne: function (attractionId) {
    return new Promise(function(resolve, reject) {
      _.defer(function () {
        var attractionsObj = getAll();
        var attraction = attractionsObj[attractionId];
        if (!attraction) {
          reject(new Error("We couldn't find any attraction with this id (" + attractionId + ")"));
        } else {
          resolve(attraction)
        }
      }, 3000);
    });
  }
};