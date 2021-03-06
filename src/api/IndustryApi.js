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
    define(['ApiClient', 'model/GetCharactersCharacterIdIndustryJobs200Ok', 'model/GetCharactersCharacterIdIndustryJobsForbidden', 'model/GetCharactersCharacterIdIndustryJobsInternalServerError', 'model/GetIndustryFacilities200Ok', 'model/GetIndustryFacilitiesInternalServerError', 'model/GetIndustrySystems200Ok', 'model/GetIndustrySystemsInternalServerError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/GetCharactersCharacterIdIndustryJobs200Ok'), require('../model/GetCharactersCharacterIdIndustryJobsForbidden'), require('../model/GetCharactersCharacterIdIndustryJobsInternalServerError'), require('../model/GetIndustryFacilities200Ok'), require('../model/GetIndustryFacilitiesInternalServerError'), require('../model/GetIndustrySystems200Ok'), require('../model/GetIndustrySystemsInternalServerError'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.IndustryApi = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.GetCharactersCharacterIdIndustryJobs200Ok, root.EveSwaggerInterface.GetCharactersCharacterIdIndustryJobsForbidden, root.EveSwaggerInterface.GetCharactersCharacterIdIndustryJobsInternalServerError, root.EveSwaggerInterface.GetIndustryFacilities200Ok, root.EveSwaggerInterface.GetIndustryFacilitiesInternalServerError, root.EveSwaggerInterface.GetIndustrySystems200Ok, root.EveSwaggerInterface.GetIndustrySystemsInternalServerError);
  }
}(this, function(ApiClient, GetCharactersCharacterIdIndustryJobs200Ok, GetCharactersCharacterIdIndustryJobsForbidden, GetCharactersCharacterIdIndustryJobsInternalServerError, GetIndustryFacilities200Ok, GetIndustryFacilitiesInternalServerError, GetIndustrySystems200Ok, GetIndustrySystemsInternalServerError) {
  'use strict';

  /**
   * Industry service.
   * @module api/IndustryApi
   * @version 0.5.0
   */

  /**
   * Constructs a new IndustryApi. 
   * @alias module:api/IndustryApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getCharactersCharacterIdIndustryJobs operation.
     * @callback module:api/IndustryApi~getCharactersCharacterIdIndustryJobsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetCharactersCharacterIdIndustryJobs200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List character industry jobs
     * List industry jobs placed by a character  ---  Alternate route: &#x60;/v1/characters/{character_id}/industry/jobs/&#x60;  Alternate route: &#x60;/legacy/characters/{character_id}/industry/jobs/&#x60;  Alternate route: &#x60;/dev/characters/{character_id}/industry/jobs/&#x60;   ---  This route is cached for up to 300 seconds
     * @param {Number} characterId An EVE character ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {Boolean} opts.includeCompleted Whether retrieve completed character industry jobs as well
     * @param {String} opts.token Access token to use, if preferred over a header
     * @param {String} opts.userAgent Client identifier, takes precedence over headers
     * @param {String} opts.xUserAgent Client identifier, takes precedence over User-Agent
     * @param {module:api/IndustryApi~getCharactersCharacterIdIndustryJobsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetCharactersCharacterIdIndustryJobs200Ok>}
     */
    this.getCharactersCharacterIdIndustryJobs = function(characterId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'characterId' is set
      if (characterId == undefined || characterId == null) {
        throw new Error("Missing the required parameter 'characterId' when calling getCharactersCharacterIdIndustryJobs");
      }


      var pathParams = {
        'character_id': characterId
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'include_completed': opts['includeCompleted'],
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
      var returnType = [GetCharactersCharacterIdIndustryJobs200Ok];

      return this.apiClient.callApi(
        '/characters/{character_id}/industry/jobs/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getIndustryFacilities operation.
     * @callback module:api/IndustryApi~getIndustryFacilitiesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetIndustryFacilities200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List industry facilities
     * Return a list of industry facilities  ---  Alternate route: &#x60;/v1/industry/facilities/&#x60;  Alternate route: &#x60;/legacy/industry/facilities/&#x60;  Alternate route: &#x60;/dev/industry/facilities/&#x60;   ---  This route is cached for up to 3600 seconds
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.userAgent Client identifier, takes precedence over headers
     * @param {String} opts.xUserAgent Client identifier, takes precedence over User-Agent
     * @param {module:api/IndustryApi~getIndustryFacilitiesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetIndustryFacilities200Ok>}
     */
    this.getIndustryFacilities = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
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
      var returnType = [GetIndustryFacilities200Ok];

      return this.apiClient.callApi(
        '/industry/facilities/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getIndustrySystems operation.
     * @callback module:api/IndustryApi~getIndustrySystemsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetIndustrySystems200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List solar system cost indices
     * Return cost indices for solar systems  ---  Alternate route: &#x60;/v1/industry/systems/&#x60;  Alternate route: &#x60;/legacy/industry/systems/&#x60;  Alternate route: &#x60;/dev/industry/systems/&#x60;   ---  This route is cached for up to 3600 seconds
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.userAgent Client identifier, takes precedence over headers
     * @param {String} opts.xUserAgent Client identifier, takes precedence over User-Agent
     * @param {module:api/IndustryApi~getIndustrySystemsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetIndustrySystems200Ok>}
     */
    this.getIndustrySystems = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
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
      var returnType = [GetIndustrySystems200Ok];

      return this.apiClient.callApi(
        '/industry/systems/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
