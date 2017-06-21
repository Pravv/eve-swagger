/**
 * EVE Swagger Interface
 * An OpenAPI for EVE Online
 *
 * OpenAPI spec version: 0.5.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/GetCharactersCharacterIdLoyaltyPoints200Ok', 'model/GetCharactersCharacterIdLoyaltyPointsForbidden', 'model/GetCharactersCharacterIdLoyaltyPointsInternalServerError', 'model/GetLoyaltyStoresCorporationIdOffers200Ok', 'model/GetLoyaltyStoresCorporationIdOffersInternalServerError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/GetCharactersCharacterIdLoyaltyPoints200Ok'), require('../model/GetCharactersCharacterIdLoyaltyPointsForbidden'), require('../model/GetCharactersCharacterIdLoyaltyPointsInternalServerError'), require('../model/GetLoyaltyStoresCorporationIdOffers200Ok'), require('../model/GetLoyaltyStoresCorporationIdOffersInternalServerError'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.LoyaltyApi = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.GetCharactersCharacterIdLoyaltyPoints200Ok, root.EveSwaggerInterface.GetCharactersCharacterIdLoyaltyPointsForbidden, root.EveSwaggerInterface.GetCharactersCharacterIdLoyaltyPointsInternalServerError, root.EveSwaggerInterface.GetLoyaltyStoresCorporationIdOffers200Ok, root.EveSwaggerInterface.GetLoyaltyStoresCorporationIdOffersInternalServerError);
  }
}(this, function(ApiClient, GetCharactersCharacterIdLoyaltyPoints200Ok, GetCharactersCharacterIdLoyaltyPointsForbidden, GetCharactersCharacterIdLoyaltyPointsInternalServerError, GetLoyaltyStoresCorporationIdOffers200Ok, GetLoyaltyStoresCorporationIdOffersInternalServerError) {
  'use strict';

  /**
   * Loyalty service.
   * @module api/LoyaltyApi
   * @version 0.5.0
   */

  /**
   * Constructs a new LoyaltyApi. 
   * @alias module:api/LoyaltyApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getCharactersCharacterIdLoyaltyPoints operation.
     * @callback module:api/LoyaltyApi~getCharactersCharacterIdLoyaltyPointsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetCharactersCharacterIdLoyaltyPoints200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get loyalty points
     * Return a list of loyalty points for all corporations the character has worked for  ---  Alternate route: &#x60;/v1/characters/{character_id}/loyalty/points/&#x60;  Alternate route: &#x60;/legacy/characters/{character_id}/loyalty/points/&#x60;  Alternate route: &#x60;/dev/characters/{character_id}/loyalty/points/&#x60; 
     * @param {Number} characterId ID for a character
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.token Access token to use, if preferred over a header
     * @param {String} opts.userAgent Client identifier, takes precedence over headers
     * @param {String} opts.xUserAgent Client identifier, takes precedence over User-Agent
     * @param {module:api/LoyaltyApi~getCharactersCharacterIdLoyaltyPointsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetCharactersCharacterIdLoyaltyPoints200Ok>}
     */
    this.getCharactersCharacterIdLoyaltyPoints = function(characterId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'characterId' is set
      if (characterId == undefined || characterId == null) {
        throw new Error("Missing the required parameter 'characterId' when calling getCharactersCharacterIdLoyaltyPoints");
      }


      var pathParams = {
        'character_id': characterId
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'token': opts['token'],
        'user_agent': opts['userAgent']
      };
      var headerParams = {
        'X-User-Agent': opts['xUserAgent']
      };
      var formParams = {
      };

      var authNames = ['evesso'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [GetCharactersCharacterIdLoyaltyPoints200Ok];

      return this.apiClient.callApi(
        '/characters/{character_id}/loyalty/points/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getLoyaltyStoresCorporationIdOffers operation.
     * @callback module:api/LoyaltyApi~getLoyaltyStoresCorporationIdOffersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetLoyaltyStoresCorporationIdOffers200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List loyalty store offers
     * Return a list of offers from a specific corporation&#39;s loyalty store  ---  Alternate route: &#x60;/v1/loyalty/stores/{corporation_id}/offers/&#x60;  Alternate route: &#x60;/legacy/loyalty/stores/{corporation_id}/offers/&#x60;  Alternate route: &#x60;/dev/loyalty/stores/{corporation_id}/offers/&#x60;   ---  This route expires daily at 11:05
     * @param {Number} corporationId ID of a corporation
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.userAgent Client identifier, takes precedence over headers
     * @param {String} opts.xUserAgent Client identifier, takes precedence over User-Agent
     * @param {module:api/LoyaltyApi~getLoyaltyStoresCorporationIdOffersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetLoyaltyStoresCorporationIdOffers200Ok>}
     */
    this.getLoyaltyStoresCorporationIdOffers = function(corporationId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'corporationId' is set
      if (corporationId == undefined || corporationId == null) {
        throw new Error("Missing the required parameter 'corporationId' when calling getLoyaltyStoresCorporationIdOffers");
      }


      var pathParams = {
        'corporation_id': corporationId
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'user_agent': opts['userAgent']
      };
      var headerParams = {
        'X-User-Agent': opts['xUserAgent']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [GetLoyaltyStoresCorporationIdOffers200Ok];

      return this.apiClient.callApi(
        '/loyalty/stores/{corporation_id}/offers/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));