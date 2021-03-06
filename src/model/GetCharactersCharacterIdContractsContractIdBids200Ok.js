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
    root.EveSwaggerInterface.GetCharactersCharacterIdContractsContractIdBids200Ok = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetCharactersCharacterIdContractsContractIdBids200Ok model module.
   * @module model/GetCharactersCharacterIdContractsContractIdBids200Ok
   * @version 0.5.0
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdContractsContractIdBids200Ok</code>.
   * 200 ok object
   * @alias module:model/GetCharactersCharacterIdContractsContractIdBids200Ok
   * @class
   * @param amount {Number} The ammount bid
   * @param bidId {Number} Unique ID for the bid
   * @param bidderId {Number} Character ID of the bidder
   * @param dateBid {Date} Datetime when the bid was placed
   */
  var exports = function(amount, bidId, bidderId, dateBid) {
    var _this = this;

    _this['amount'] = amount;
    _this['bid_id'] = bidId;
    _this['bidder_id'] = bidderId;
    _this['date_bid'] = dateBid;
  };

  /**
   * Constructs a <code>GetCharactersCharacterIdContractsContractIdBids200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdContractsContractIdBids200Ok} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdContractsContractIdBids200Ok} The populated <code>GetCharactersCharacterIdContractsContractIdBids200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
      }
      if (data.hasOwnProperty('bid_id')) {
        obj['bid_id'] = ApiClient.convertToType(data['bid_id'], 'Number');
      }
      if (data.hasOwnProperty('bidder_id')) {
        obj['bidder_id'] = ApiClient.convertToType(data['bidder_id'], 'Number');
      }
      if (data.hasOwnProperty('date_bid')) {
        obj['date_bid'] = ApiClient.convertToType(data['date_bid'], 'Date');
      }
    }
    return obj;
  }

  /**
   * The ammount bid
   * @member {Number} amount
   */
  exports.prototype['amount'] = undefined;
  /**
   * Unique ID for the bid
   * @member {Number} bid_id
   */
  exports.prototype['bid_id'] = undefined;
  /**
   * Character ID of the bidder
   * @member {Number} bidder_id
   */
  exports.prototype['bidder_id'] = undefined;
  /**
   * Datetime when the bid was placed
   * @member {Date} date_bid
   */
  exports.prototype['date_bid'] = undefined;



  return exports;
}));


