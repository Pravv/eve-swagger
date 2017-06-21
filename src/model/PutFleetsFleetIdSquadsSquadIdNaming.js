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
    root.EveSwaggerInterface.PutFleetsFleetIdSquadsSquadIdNaming = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PutFleetsFleetIdSquadsSquadIdNaming model module.
   * @module model/PutFleetsFleetIdSquadsSquadIdNaming
   * @version 0.5.0
   */

  /**
   * Constructs a new <code>PutFleetsFleetIdSquadsSquadIdNaming</code>.
   * naming object
   * @alias module:model/PutFleetsFleetIdSquadsSquadIdNaming
   * @class
   * @param name {String} name string
   */
  var exports = function(name) {
    var _this = this;

    _this['name'] = name;
  };

  /**
   * Constructs a <code>PutFleetsFleetIdSquadsSquadIdNaming</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PutFleetsFleetIdSquadsSquadIdNaming} obj Optional instance to populate.
   * @return {module:model/PutFleetsFleetIdSquadsSquadIdNaming} The populated <code>PutFleetsFleetIdSquadsSquadIdNaming</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }

  /**
   * name string
   * @member {String} name
   */
  exports.prototype['name'] = undefined;



  return exports;
}));


