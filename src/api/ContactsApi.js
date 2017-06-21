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
    define(['ApiClient', 'model/DeleteCharactersCharacterIdContactsForbidden', 'model/DeleteCharactersCharacterIdContactsInternalServerError', 'model/GetCharactersCharacterIdContacts200Ok', 'model/GetCharactersCharacterIdContactsForbidden', 'model/GetCharactersCharacterIdContactsInternalServerError', 'model/GetCharactersCharacterIdContactsLabels200Ok', 'model/GetCharactersCharacterIdContactsLabelsForbidden', 'model/GetCharactersCharacterIdContactsLabelsInternalServerError', 'model/PostCharactersCharacterIdContactsForbidden', 'model/PostCharactersCharacterIdContactsInternalServerError', 'model/PutCharactersCharacterIdContactsForbidden', 'model/PutCharactersCharacterIdContactsInternalServerError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DeleteCharactersCharacterIdContactsForbidden'), require('../model/DeleteCharactersCharacterIdContactsInternalServerError'), require('../model/GetCharactersCharacterIdContacts200Ok'), require('../model/GetCharactersCharacterIdContactsForbidden'), require('../model/GetCharactersCharacterIdContactsInternalServerError'), require('../model/GetCharactersCharacterIdContactsLabels200Ok'), require('../model/GetCharactersCharacterIdContactsLabelsForbidden'), require('../model/GetCharactersCharacterIdContactsLabelsInternalServerError'), require('../model/PostCharactersCharacterIdContactsForbidden'), require('../model/PostCharactersCharacterIdContactsInternalServerError'), require('../model/PutCharactersCharacterIdContactsForbidden'), require('../model/PutCharactersCharacterIdContactsInternalServerError'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.ContactsApi = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.DeleteCharactersCharacterIdContactsForbidden, root.EveSwaggerInterface.DeleteCharactersCharacterIdContactsInternalServerError, root.EveSwaggerInterface.GetCharactersCharacterIdContacts200Ok, root.EveSwaggerInterface.GetCharactersCharacterIdContactsForbidden, root.EveSwaggerInterface.GetCharactersCharacterIdContactsInternalServerError, root.EveSwaggerInterface.GetCharactersCharacterIdContactsLabels200Ok, root.EveSwaggerInterface.GetCharactersCharacterIdContactsLabelsForbidden, root.EveSwaggerInterface.GetCharactersCharacterIdContactsLabelsInternalServerError, root.EveSwaggerInterface.PostCharactersCharacterIdContactsForbidden, root.EveSwaggerInterface.PostCharactersCharacterIdContactsInternalServerError, root.EveSwaggerInterface.PutCharactersCharacterIdContactsForbidden, root.EveSwaggerInterface.PutCharactersCharacterIdContactsInternalServerError);
  }
}(this, function(ApiClient, DeleteCharactersCharacterIdContactsForbidden, DeleteCharactersCharacterIdContactsInternalServerError, GetCharactersCharacterIdContacts200Ok, GetCharactersCharacterIdContactsForbidden, GetCharactersCharacterIdContactsInternalServerError, GetCharactersCharacterIdContactsLabels200Ok, GetCharactersCharacterIdContactsLabelsForbidden, GetCharactersCharacterIdContactsLabelsInternalServerError, PostCharactersCharacterIdContactsForbidden, PostCharactersCharacterIdContactsInternalServerError, PutCharactersCharacterIdContactsForbidden, PutCharactersCharacterIdContactsInternalServerError) {
  'use strict';

  /**
   * Contacts service.
   * @module api/ContactsApi
   * @version 0.5.0
   */

  /**
   * Constructs a new ContactsApi. 
   * @alias module:api/ContactsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the deleteCharactersCharacterIdContacts operation.
     * @callback module:api/ContactsApi~deleteCharactersCharacterIdContactsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete contacts
     * Bulk delete contacts  ---  Alternate route: &#x60;/v1/characters/{character_id}/contacts/&#x60;  Alternate route: &#x60;/legacy/characters/{character_id}/contacts/&#x60; 
     * @param {Number} characterId ID for a character
     * @param {Array.<module:model/Number>} contactIds A list of contacts to delete
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.token Access token to use, if preferred over a header
     * @param {String} opts.userAgent Client identifier, takes precedence over headers
     * @param {String} opts.xUserAgent Client identifier, takes precedence over User-Agent
     * @param {module:api/ContactsApi~deleteCharactersCharacterIdContactsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteCharactersCharacterIdContacts = function(characterId, contactIds, opts, callback) {
      opts = opts || {};
      var postBody = contactIds;

      // verify the required parameter 'characterId' is set
      if (characterId == undefined || characterId == null) {
        throw new Error("Missing the required parameter 'characterId' when calling deleteCharactersCharacterIdContacts");
      }

      // verify the required parameter 'contactIds' is set
      if (contactIds == undefined || contactIds == null) {
        throw new Error("Missing the required parameter 'contactIds' when calling deleteCharactersCharacterIdContacts");
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
      var returnType = null;

      return this.apiClient.callApi(
        '/characters/{character_id}/contacts/', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCharactersCharacterIdContacts operation.
     * @callback module:api/ContactsApi~getCharactersCharacterIdContactsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetCharactersCharacterIdContacts200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get contacts
     * Return contacts of a character  ---  Alternate route: &#x60;/v1/characters/{character_id}/contacts/&#x60;  Alternate route: &#x60;/legacy/characters/{character_id}/contacts/&#x60;  Alternate route: &#x60;/dev/characters/{character_id}/contacts/&#x60;   ---  This route is cached for up to 300 seconds
     * @param {Number} characterId ID for a character
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {Number} opts.page page integer (default to 1)
     * @param {String} opts.token Access token to use, if preferred over a header
     * @param {String} opts.userAgent Client identifier, takes precedence over headers
     * @param {String} opts.xUserAgent Client identifier, takes precedence over User-Agent
     * @param {module:api/ContactsApi~getCharactersCharacterIdContactsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetCharactersCharacterIdContacts200Ok>}
     */
    this.getCharactersCharacterIdContacts = function(characterId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'characterId' is set
      if (characterId == undefined || characterId == null) {
        throw new Error("Missing the required parameter 'characterId' when calling getCharactersCharacterIdContacts");
      }


      var pathParams = {
        'character_id': characterId
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'page': opts['page'],
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
      var returnType = [GetCharactersCharacterIdContacts200Ok];

      return this.apiClient.callApi(
        '/characters/{character_id}/contacts/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCharactersCharacterIdContactsLabels operation.
     * @callback module:api/ContactsApi~getCharactersCharacterIdContactsLabelsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetCharactersCharacterIdContactsLabels200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get contact labels
     * Return custom labels for contacts the character defined  ---  Alternate route: &#x60;/v1/characters/{character_id}/contacts/labels/&#x60;  Alternate route: &#x60;/legacy/characters/{character_id}/contacts/labels/&#x60;  Alternate route: &#x60;/dev/characters/{character_id}/contacts/labels/&#x60;   ---  This route is cached for up to 300 seconds
     * @param {Number} characterId ID for a character
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.token Access token to use, if preferred over a header
     * @param {String} opts.userAgent Client identifier, takes precedence over headers
     * @param {String} opts.xUserAgent Client identifier, takes precedence over User-Agent
     * @param {module:api/ContactsApi~getCharactersCharacterIdContactsLabelsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetCharactersCharacterIdContactsLabels200Ok>}
     */
    this.getCharactersCharacterIdContactsLabels = function(characterId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'characterId' is set
      if (characterId == undefined || characterId == null) {
        throw new Error("Missing the required parameter 'characterId' when calling getCharactersCharacterIdContactsLabels");
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
      var returnType = [GetCharactersCharacterIdContactsLabels200Ok];

      return this.apiClient.callApi(
        '/characters/{character_id}/contacts/labels/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postCharactersCharacterIdContacts operation.
     * @callback module:api/ContactsApi~postCharactersCharacterIdContactsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<'Number'>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add contacts
     * Bulk add contacts with same settings  ---  Alternate route: &#x60;/v1/characters/{character_id}/contacts/&#x60;  Alternate route: &#x60;/legacy/characters/{character_id}/contacts/&#x60;  Alternate route: &#x60;/dev/characters/{character_id}/contacts/&#x60; 
     * @param {Number} characterId ID for a character
     * @param {Array.<module:model/Number>} contactIds A list of contacts to add
     * @param {Number} standing Standing for the new contact
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {Number} opts.labelId Add a custom label to the new contact (default to 0)
     * @param {String} opts.token Access token to use, if preferred over a header
     * @param {String} opts.userAgent Client identifier, takes precedence over headers
     * @param {Boolean} opts.watched Whether the new contact should be watched, note this is only effective on characters (default to false)
     * @param {String} opts.xUserAgent Client identifier, takes precedence over User-Agent
     * @param {module:api/ContactsApi~postCharactersCharacterIdContactsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<'Number'>}
     */
    this.postCharactersCharacterIdContacts = function(characterId, contactIds, standing, opts, callback) {
      opts = opts || {};
      var postBody = contactIds;

      // verify the required parameter 'characterId' is set
      if (characterId == undefined || characterId == null) {
        throw new Error("Missing the required parameter 'characterId' when calling postCharactersCharacterIdContacts");
      }

      // verify the required parameter 'contactIds' is set
      if (contactIds == undefined || contactIds == null) {
        throw new Error("Missing the required parameter 'contactIds' when calling postCharactersCharacterIdContacts");
      }

      // verify the required parameter 'standing' is set
      if (standing == undefined || standing == null) {
        throw new Error("Missing the required parameter 'standing' when calling postCharactersCharacterIdContacts");
      }


      var pathParams = {
        'character_id': characterId
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'label_id': opts['labelId'],
        'standing': standing,
        'token': opts['token'],
        'user_agent': opts['userAgent'],
        'watched': opts['watched']
      };
      var headerParams = {
        'X-User-Agent': opts['xUserAgent']
      };
      var formParams = {
      };

      var authNames = ['evesso'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ['Number'];

      return this.apiClient.callApi(
        '/characters/{character_id}/contacts/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the putCharactersCharacterIdContacts operation.
     * @callback module:api/ContactsApi~putCharactersCharacterIdContactsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit contacts
     * Bulk edit contacts with same settings  ---  Alternate route: &#x60;/v1/characters/{character_id}/contacts/&#x60;  Alternate route: &#x60;/legacy/characters/{character_id}/contacts/&#x60;  Alternate route: &#x60;/dev/characters/{character_id}/contacts/&#x60; 
     * @param {Number} characterId ID for a character
     * @param {Array.<module:model/Number>} contactIds A list of contacts to edit
     * @param {Number} standing Standing for the contact
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {Number} opts.labelId Add a custom label to the contact, use 0 for clearing label (default to 0)
     * @param {String} opts.token Access token to use, if preferred over a header
     * @param {String} opts.userAgent Client identifier, takes precedence over headers
     * @param {Boolean} opts.watched Whether the contact should be watched, note this is only effective on characters (default to false)
     * @param {String} opts.xUserAgent Client identifier, takes precedence over User-Agent
     * @param {module:api/ContactsApi~putCharactersCharacterIdContactsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.putCharactersCharacterIdContacts = function(characterId, contactIds, standing, opts, callback) {
      opts = opts || {};
      var postBody = contactIds;

      // verify the required parameter 'characterId' is set
      if (characterId == undefined || characterId == null) {
        throw new Error("Missing the required parameter 'characterId' when calling putCharactersCharacterIdContacts");
      }

      // verify the required parameter 'contactIds' is set
      if (contactIds == undefined || contactIds == null) {
        throw new Error("Missing the required parameter 'contactIds' when calling putCharactersCharacterIdContacts");
      }

      // verify the required parameter 'standing' is set
      if (standing == undefined || standing == null) {
        throw new Error("Missing the required parameter 'standing' when calling putCharactersCharacterIdContacts");
      }


      var pathParams = {
        'character_id': characterId
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'label_id': opts['labelId'],
        'standing': standing,
        'token': opts['token'],
        'user_agent': opts['userAgent'],
        'watched': opts['watched']
      };
      var headerParams = {
        'X-User-Agent': opts['xUserAgent']
      };
      var formParams = {
      };

      var authNames = ['evesso'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/characters/{character_id}/contacts/', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));