var appDispatcher = require('../dispatcher/appDispatcher');
var attractionConstants = require('../constants/attractionActions');
var attractionClient = require('../services/attractionClient');
var attractionStore = require('../stores/attractionStore');

module.exports = {
  loadAll: function () {
    appDispatcher.dispatch({
      type: attractionConstants.LOAD
    });
    attractionClient.loadAll()
      .then(
      function (data) {
        appDispatcher.dispatch({
          type: attractionConstants.LOAD_SUCCESS,
          response: data
        });
      },
      function (err) {
        appDispatcher.dispatch({
          type: attractionConstants.LOAD_ERROR,
          error: err
        });
      }
    );
  },
  loadOne: function (attractionId) {
    appDispatcher.dispatch({
      type: attractionConstants.LOAD_ATTRACTION,
      attractionId: attractionId
    });

    // Is it already in the store?
    var attraction = attractionStore.getById(attractionId);
    if (attraction) {
      this.handleLoadAttractionSuccess(attraction);
    } else {
      // otherwise request it
      attractionClient.loadOne(attractionId)
        .then(
        this.handleLoadAttractionSuccess.bind(this),
        function (err) {
          appDispatcher.dispatch({
            type: attractionConstants.LOAD_ATTRACTION_ERROR,
            error: err
          });
        }
      );
    }
  },
  handleLoadAttractionSuccess: function (data) {
    appDispatcher.dispatch({
      type: attractionConstants.LOAD_ATTRACTION_SUCCESS,
      response: data
    });
  }
};

