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
    root.EveSwaggerInterface.GetCharactersCharacterIdWalletsJournal200Ok = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetCharactersCharacterIdWalletsJournal200Ok model module.
   * @module model/GetCharactersCharacterIdWalletsJournal200Ok
   * @version 0.5.0
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdWalletsJournal200Ok</code>.
   * 200 ok object
   * @alias module:model/GetCharactersCharacterIdWalletsJournal200Ok
   * @class
   * @param _date {Date} Date and time of transaction
   * @param refId {Number} Unique journal reference ID
   * @param refTypeId {Number} Transaction type
   */
  var exports = function(_date, refId, refTypeId) {
    var _this = this;





    _this['date'] = _date;



    _this['ref_id'] = refId;
    _this['ref_type_id'] = refTypeId;




  };

  /**
   * Constructs a <code>GetCharactersCharacterIdWalletsJournal200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdWalletsJournal200Ok} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdWalletsJournal200Ok} The populated <code>GetCharactersCharacterIdWalletsJournal200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
      }
      if (data.hasOwnProperty('argument_name')) {
        obj['argument_name'] = ApiClient.convertToType(data['argument_name'], 'String');
      }
      if (data.hasOwnProperty('argument_value')) {
        obj['argument_value'] = ApiClient.convertToType(data['argument_value'], 'Number');
      }
      if (data.hasOwnProperty('balance')) {
        obj['balance'] = ApiClient.convertToType(data['balance'], 'Number');
      }
      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'Date');
      }
      if (data.hasOwnProperty('first_party_id')) {
        obj['first_party_id'] = ApiClient.convertToType(data['first_party_id'], 'Number');
      }
      if (data.hasOwnProperty('first_party_type')) {
        obj['first_party_type'] = ApiClient.convertToType(data['first_party_type'], 'String');
      }
      if (data.hasOwnProperty('reason')) {
        obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
      }
      if (data.hasOwnProperty('ref_id')) {
        obj['ref_id'] = ApiClient.convertToType(data['ref_id'], 'Number');
      }
      if (data.hasOwnProperty('ref_type_id')) {
        obj['ref_type_id'] = ApiClient.convertToType(data['ref_type_id'], 'Number');
      }
      if (data.hasOwnProperty('second_party_id')) {
        obj['second_party_id'] = ApiClient.convertToType(data['second_party_id'], 'Number');
      }
      if (data.hasOwnProperty('second_party_type')) {
        obj['second_party_type'] = ApiClient.convertToType(data['second_party_type'], 'String');
      }
      if (data.hasOwnProperty('tax_amount')) {
        obj['tax_amount'] = ApiClient.convertToType(data['tax_amount'], 'Number');
      }
      if (data.hasOwnProperty('tax_reciever_id')) {
        obj['tax_reciever_id'] = ApiClient.convertToType(data['tax_reciever_id'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Transaction amount. Positive when value transferred to the first party. Negative otherwise
   * @member {Number} amount
   */
  exports.prototype['amount'] = undefined;
  /**
   * argument_name string
   * @member {String} argument_name
   */
  exports.prototype['argument_name'] = undefined;
  /**
   * argument_value integer
   * @member {Number} argument_value
   */
  exports.prototype['argument_value'] = undefined;
  /**
   * Wallet balance after transaction occurred
   * @member {Number} balance
   */
  exports.prototype['balance'] = undefined;
  /**
   * Date and time of transaction
   * @member {Date} date
   */
  exports.prototype['date'] = undefined;
  /**
   * first_party_id integer
   * @member {Number} first_party_id
   */
  exports.prototype['first_party_id'] = undefined;
  /**
   * first_party_type string
   * @member {module:model/GetCharactersCharacterIdWalletsJournal200Ok.FirstPartyTypeEnum} first_party_type
   */
  exports.prototype['first_party_type'] = undefined;
  /**
   * reason string
   * @member {String} reason
   */
  exports.prototype['reason'] = undefined;
  /**
   * Unique journal reference ID
   * @member {Number} ref_id
   */
  exports.prototype['ref_id'] = undefined;
  /**
   * Transaction type
   * @member {Number} ref_type_id
   */
  exports.prototype['ref_type_id'] = undefined;
  /**
   * second_party_id integer
   * @member {Number} second_party_id
   */
  exports.prototype['second_party_id'] = undefined;
  /**
   * second_party_type string
   * @member {module:model/GetCharactersCharacterIdWalletsJournal200Ok.SecondPartyTypeEnum} second_party_type
   */
  exports.prototype['second_party_type'] = undefined;
  /**
   * Tax amount received for tax related transactions
   * @member {Number} tax_amount
   */
  exports.prototype['tax_amount'] = undefined;
  /**
   * For tax related transactions, gives the corporation ID of the entity receiving the tax
   * @member {Number} tax_reciever_id
   */
  exports.prototype['tax_reciever_id'] = undefined;


  /**
   * Allowed values for the <code>first_party_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.FirstPartyTypeEnum = {
    /**
     * value: "character"
     * @const
     */
    "character": "character",
    /**
     * value: "corporation"
     * @const
     */
    "corporation": "corporation",
    /**
     * value: "alliance"
     * @const
     */
    "alliance": "alliance",
    /**
     * value: "faction"
     * @const
     */
    "faction": "faction"  };

  /**
   * Allowed values for the <code>second_party_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SecondPartyTypeEnum = {
    /**
     * value: "character"
     * @const
     */
    "character": "character",
    /**
     * value: "corporation"
     * @const
     */
    "corporation": "corporation",
    /**
     * value: "alliance"
     * @const
     */
    "alliance": "alliance",
    /**
     * value: "faction"
     * @const
     */
    "faction": "faction"  };


  return exports;
}));


