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
    define(['ApiClient', 'model/GetCharactersCharacterIdBookmarks200Ok', 'model/GetCharactersCharacterIdBookmarksFolders200Ok', 'model/GetCharactersCharacterIdBookmarksFoldersForbidden', 'model/GetCharactersCharacterIdBookmarksFoldersInternalServerError', 'model/GetCharactersCharacterIdBookmarksForbidden', 'model/GetCharactersCharacterIdBookmarksInternalServerError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/GetCharactersCharacterIdBookmarks200Ok'), require('../model/GetCharactersCharacterIdBookmarksFolders200Ok'), require('../model/GetCharactersCharacterIdBookmarksFoldersForbidden'), require('../model/GetCharactersCharacterIdBookmarksFoldersInternalServerError'), require('../model/GetCharactersCharacterIdBookmarksForbidden'), require('../model/GetCharactersCharacterIdBookmarksInternalServerError'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.BookmarksApi = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.GetCharactersCharacterIdBookmarks200Ok, root.EveSwaggerInterface.GetCharactersCharacterIdBookmarksFolders200Ok, root.EveSwaggerInterface.GetCharactersCharacterIdBookmarksFoldersForbidden, root.EveSwaggerInterface.GetCharactersCharacterIdBookmarksFoldersInternalServerError, root.EveSwaggerInterface.GetCharactersCharacterIdBookmarksForbidden, root.EveSwaggerInterface.GetCharactersCharacterIdBookmarksInternalServerError);
  }
}(this, function(ApiClient, GetCharactersCharacterIdBookmarks200Ok, GetCharactersCharacterIdBookmarksFolders200Ok, GetCharactersCharacterIdBookmarksFoldersForbidden, GetCharactersCharacterIdBookmarksFoldersInternalServerError, GetCharactersCharacterIdBookmarksForbidden, GetCharactersCharacterIdBookmarksInternalServerError) {
  'use strict';

  /**
   * Bookmarks service.
   * @module api/BookmarksApi
   * @version 0.5.0
   */

  /**
   * Constructs a new BookmarksApi. 
   * @alias module:api/BookmarksApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getCharactersCharacterIdBookmarks operation.
     * @callback module:api/BookmarksApi~getCharactersCharacterIdBookmarksCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetCharactersCharacterIdBookmarks200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List bookmarks
     * List your character&#39;s personal bookmarks  ---  Alternate route: &#x60;/v1/characters/{character_id}/bookmarks/&#x60;  Alternate route: &#x60;/legacy/characters/{character_id}/bookmarks/&#x60;  Alternate route: &#x60;/dev/characters/{character_id}/bookmarks/&#x60;   ---  This route is cached for up to 3600 seconds
     * @param {Number} characterId An EVE character ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.token Access token to use, if preferred over a header
     * @param {String} opts.userAgent Client identifier, takes precedence over headers
     * @param {String} opts.xUserAgent Client identifier, takes precedence over User-Agent
     * @param {module:api/BookmarksApi~getCharactersCharacterIdBookmarksCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetCharactersCharacterIdBookmarks200Ok>}
     */
    this.getCharactersCharacterIdBookmarks = function(characterId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'characterId' is set
      if (characterId == undefined || characterId == null) {
        throw new Error("Missing the required parameter 'characterId' when calling getCharactersCharacterIdBookmarks");
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
      var returnType = [GetCharactersCharacterIdBookmarks200Ok];

      return this.apiClient.callApi(
        '/characters/{character_id}/bookmarks/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCharactersCharacterIdBookmarksFolders operation.
     * @callback module:api/BookmarksApi~getCharactersCharacterIdBookmarksFoldersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetCharactersCharacterIdBookmarksFolders200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List bookmark folders
     * List your character&#39;s personal bookmark folders  ---  Alternate route: &#x60;/v1/characters/{character_id}/bookmarks/folders/&#x60;  Alternate route: &#x60;/legacy/characters/{character_id}/bookmarks/folders/&#x60;  Alternate route: &#x60;/dev/characters/{character_id}/bookmarks/folders/&#x60;   ---  This route is cached for up to 3600 seconds
     * @param {Number} characterId An EVE character ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.token Access token to use, if preferred over a header
     * @param {String} opts.userAgent Client identifier, takes precedence over headers
     * @param {String} opts.xUserAgent Client identifier, takes precedence over User-Agent
     * @param {module:api/BookmarksApi~getCharactersCharacterIdBookmarksFoldersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetCharactersCharacterIdBookmarksFolders200Ok>}
     */
    this.getCharactersCharacterIdBookmarksFolders = function(characterId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'characterId' is set
      if (characterId == undefined || characterId == null) {
        throw new Error("Missing the required parameter 'characterId' when calling getCharactersCharacterIdBookmarksFolders");
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
      var returnType = [GetCharactersCharacterIdBookmarksFolders200Ok];

      return this.apiClient.callApi(
        '/characters/{character_id}/bookmarks/folders/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
