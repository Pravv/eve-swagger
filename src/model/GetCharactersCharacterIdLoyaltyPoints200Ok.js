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
    root.EveSwaggerInterface.GetCharactersCharacterIdLoyaltyPoints200Ok = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetCharactersCharacterIdLoyaltyPoints200Ok model module.
   * @module model/GetCharactersCharacterIdLoyaltyPoints200Ok
   * @version 0.5.0
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdLoyaltyPoints200Ok</code>.
   * 200 ok object
   * @alias module:model/GetCharactersCharacterIdLoyaltyPoints200Ok
   * @class
   * @param corporationId {Number} corporation_id integer
   * @param loyaltyPoints {Number} loyalty_points integer
   */
  var exports = function(corporationId, loyaltyPoints) {
    var _this = this;

    _this['corporation_id'] = corporationId;
    _this['loyalty_points'] = loyaltyPoints;
  };

  /**
   * Constructs a <code>GetCharactersCharacterIdLoyaltyPoints200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdLoyaltyPoints200Ok} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdLoyaltyPoints200Ok} The populated <code>GetCharactersCharacterIdLoyaltyPoints200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('corporation_id')) {
        obj['corporation_id'] = ApiClient.convertToType(data['corporation_id'], 'Number');
      }
      if (data.hasOwnProperty('loyalty_points')) {
        obj['loyalty_points'] = ApiClient.convertToType(data['loyalty_points'], 'Number');
      }
    }
    return obj;
  }

  /**
   * corporation_id integer
   * @member {Number} corporation_id
   */
  exports.prototype['corporation_id'] = undefined;
  /**
   * loyalty_points integer
   * @member {Number} loyalty_points
   */
  exports.prototype['loyalty_points'] = undefined;



  return exports;
}));


