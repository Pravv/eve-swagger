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
    define(['ApiClient', 'model/GetUniverseStructuresStructureIdPosition'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetUniverseStructuresStructureIdPosition'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.GetUniverseStructuresStructureIdOk = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.GetUniverseStructuresStructureIdPosition);
  }
}(this, function(ApiClient, GetUniverseStructuresStructureIdPosition) {
  'use strict';




  /**
   * The GetUniverseStructuresStructureIdOk model module.
   * @module model/GetUniverseStructuresStructureIdOk
   * @version 0.5.0
   */

  /**
   * Constructs a new <code>GetUniverseStructuresStructureIdOk</code>.
   * 200 ok object
   * @alias module:model/GetUniverseStructuresStructureIdOk
   * @class
   * @param name {String} The full name of the structure
   * @param solarSystemId {Number} solar_system_id integer
   */
  var exports = function(name, solarSystemId) {
    var _this = this;

    _this['name'] = name;

    _this['solar_system_id'] = solarSystemId;

  };

  /**
   * Constructs a <code>GetUniverseStructuresStructureIdOk</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetUniverseStructuresStructureIdOk} obj Optional instance to populate.
   * @return {module:model/GetUniverseStructuresStructureIdOk} The populated <code>GetUniverseStructuresStructureIdOk</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('position')) {
        obj['position'] = GetUniverseStructuresStructureIdPosition.constructFromObject(data['position']);
      }
      if (data.hasOwnProperty('solar_system_id')) {
        obj['solar_system_id'] = ApiClient.convertToType(data['solar_system_id'], 'Number');
      }
      if (data.hasOwnProperty('type_id')) {
        obj['type_id'] = ApiClient.convertToType(data['type_id'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The full name of the structure
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {module:model/GetUniverseStructuresStructureIdPosition} position
   */
  exports.prototype['position'] = undefined;
  /**
   * solar_system_id integer
   * @member {Number} solar_system_id
   */
  exports.prototype['solar_system_id'] = undefined;
  /**
   * type_id integer
   * @member {Number} type_id
   */
  exports.prototype['type_id'] = undefined;



  return exports;
}));


