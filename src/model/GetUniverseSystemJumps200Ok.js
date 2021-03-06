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
    root.EveSwaggerInterface.GetUniverseSystemJumps200Ok = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetUniverseSystemJumps200Ok model module.
   * @module model/GetUniverseSystemJumps200Ok
   * @version 0.5.0
   */

  /**
   * Constructs a new <code>GetUniverseSystemJumps200Ok</code>.
   * 200 ok object
   * @alias module:model/GetUniverseSystemJumps200Ok
   * @class
   * @param shipJumps {Number} ship_jumps integer
   * @param systemId {Number} system_id integer
   */
  var exports = function(shipJumps, systemId) {
    var _this = this;

    _this['ship_jumps'] = shipJumps;
    _this['system_id'] = systemId;
  };

  /**
   * Constructs a <code>GetUniverseSystemJumps200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetUniverseSystemJumps200Ok} obj Optional instance to populate.
   * @return {module:model/GetUniverseSystemJumps200Ok} The populated <code>GetUniverseSystemJumps200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ship_jumps')) {
        obj['ship_jumps'] = ApiClient.convertToType(data['ship_jumps'], 'Number');
      }
      if (data.hasOwnProperty('system_id')) {
        obj['system_id'] = ApiClient.convertToType(data['system_id'], 'Number');
      }
    }
    return obj;
  }

  /**
   * ship_jumps integer
   * @member {Number} ship_jumps
   */
  exports.prototype['ship_jumps'] = undefined;
  /**
   * system_id integer
   * @member {Number} system_id
   */
  exports.prototype['system_id'] = undefined;



  return exports;
}));


