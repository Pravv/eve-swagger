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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.PostFleetsFleetIdMembersUnprocessableEntity = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PostFleetsFleetIdMembersUnprocessableEntity model module.
   * @module model/PostFleetsFleetIdMembersUnprocessableEntity
   * @version 0.5.0
   */

  /**
   * Constructs a new <code>PostFleetsFleetIdMembersUnprocessableEntity</code>.
   * 422 unprocessable entity object
   * @alias module:model/PostFleetsFleetIdMembersUnprocessableEntity
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>PostFleetsFleetIdMembersUnprocessableEntity</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PostFleetsFleetIdMembersUnprocessableEntity} obj Optional instance to populate.
   * @return {module:model/PostFleetsFleetIdMembersUnprocessableEntity} The populated <code>PostFleetsFleetIdMembersUnprocessableEntity</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('error')) {
        obj['error'] = ApiClient.convertToType(data['error'], 'String');
      }
    }
    return obj;
  }

  /**
   * error message
   * @member {String} error
   */
  exports.prototype['error'] = undefined;



  return exports;
}));


