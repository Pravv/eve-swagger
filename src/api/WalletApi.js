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
    define(['ApiClient', 'model/GetCharactersCharacterIdWallets200Ok', 'model/GetCharactersCharacterIdWalletsForbidden', 'model/GetCharactersCharacterIdWalletsInternalServerError', 'model/GetCharactersCharacterIdWalletsJournal200Ok', 'model/GetCharactersCharacterIdWalletsJournalForbidden', 'model/GetCharactersCharacterIdWalletsJournalInternalServerError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/GetCharactersCharacterIdWallets200Ok'), require('../model/GetCharactersCharacterIdWalletsForbidden'), require('../model/GetCharactersCharacterIdWalletsInternalServerError'), require('../model/GetCharactersCharacterIdWalletsJournal200Ok'), require('../model/GetCharactersCharacterIdWalletsJournalForbidden'), require('../model/GetCharactersCharacterIdWalletsJournalInternalServerError'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.WalletApi = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.GetCharactersCharacterIdWallets200Ok, root.EveSwaggerInterface.GetCharactersCharacterIdWalletsForbidden, root.EveSwaggerInterface.GetCharactersCharacterIdWalletsInternalServerError, root.EveSwaggerInterface.GetCharactersCharacterIdWalletsJournal200Ok, root.EveSwaggerInterface.GetCharactersCharacterIdWalletsJournalForbidden, root.EveSwaggerInterface.GetCharactersCharacterIdWalletsJournalInternalServerError);
  }
}(this, function(ApiClient, GetCharactersCharacterIdWallets200Ok, GetCharactersCharacterIdWalletsForbidden, GetCharactersCharacterIdWalletsInternalServerError, GetCharactersCharacterIdWalletsJournal200Ok, GetCharactersCharacterIdWalletsJournalForbidden, GetCharactersCharacterIdWalletsJournalInternalServerError) {
  'use strict';

  /**
   * Wallet service.
   * @module api/WalletApi
   * @version 0.5.0
   */

  /**
   * Constructs a new WalletApi. 
   * @alias module:api/WalletApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getCharactersCharacterIdWallets operation.
     * @callback module:api/WalletApi~getCharactersCharacterIdWalletsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetCharactersCharacterIdWallets200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List wallets and balances
     * List your wallets and their balances. Characters typically have only one wallet, with wallet_id 1000 being the master wallet.  ---  Alternate route: &#x60;/v1/characters/{character_id}/wallets/&#x60;  Alternate route: &#x60;/legacy/characters/{character_id}/wallets/&#x60;  Alternate route: &#x60;/dev/characters/{character_id}/wallets/&#x60;   ---  This route is cached for up to 120 seconds
     * @param {Number} characterId An EVE character ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.token Access token to use, if preferred over a header
     * @param {String} opts.userAgent Client identifier, takes precedence over headers
     * @param {String} opts.xUserAgent Client identifier, takes precedence over User-Agent
     * @param {module:api/WalletApi~getCharactersCharacterIdWalletsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetCharactersCharacterIdWallets200Ok>}
     */
    this.getCharactersCharacterIdWallets = function(characterId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'characterId' is set
      if (characterId == undefined || characterId == null) {
        throw new Error("Missing the required parameter 'characterId' when calling getCharactersCharacterIdWallets");
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
      var returnType = [GetCharactersCharacterIdWallets200Ok];

      return this.apiClient.callApi(
        '/characters/{character_id}/wallets/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCharactersCharacterIdWalletsJournal operation.
     * @callback module:api/WalletApi~getCharactersCharacterIdWalletsJournalCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetCharactersCharacterIdWalletsJournal200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get character wallet journal
     * Retrieve character wallet journal  ---  Alternate route: &#x60;/v1/characters/{character_id}/wallets/journal/&#x60;  Alternate route: &#x60;/legacy/characters/{character_id}/wallets/journal/&#x60;  Alternate route: &#x60;/dev/characters/{character_id}/wallets/journal/&#x60;   ---  This route is cached for up to 3600 seconds
     * @param {Number} characterId An EVE character ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {Number} opts.fromId Only show journal entries happened before the transaction referenced by this id
     * @param {String} opts.token Access token to use, if preferred over a header
     * @param {String} opts.userAgent Client identifier, takes precedence over headers
     * @param {String} opts.xUserAgent Client identifier, takes precedence over User-Agent
     * @param {module:api/WalletApi~getCharactersCharacterIdWalletsJournalCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetCharactersCharacterIdWalletsJournal200Ok>}
     */
    this.getCharactersCharacterIdWalletsJournal = function(characterId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'characterId' is set
      if (characterId == undefined || characterId == null) {
        throw new Error("Missing the required parameter 'characterId' when calling getCharactersCharacterIdWalletsJournal");
      }


      var pathParams = {
        'character_id': characterId
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'from_id': opts['fromId'],
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
      var returnType = [GetCharactersCharacterIdWalletsJournal200Ok];

      return this.apiClient.callApi(
        '/characters/{character_id}/wallets/journal/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
