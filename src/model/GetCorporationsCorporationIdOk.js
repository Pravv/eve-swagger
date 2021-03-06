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
    root.EveSwaggerInterface.GetCorporationsCorporationIdOk = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetCorporationsCorporationIdOk model module.
   * @module model/GetCorporationsCorporationIdOk
   * @version 0.5.0
   */

  /**
   * Constructs a new <code>GetCorporationsCorporationIdOk</code>.
   * 200 ok object
   * @alias module:model/GetCorporationsCorporationIdOk
   * @class
   * @param ceoId {Number} ceo_id integer
   * @param corporationDescription {String} corporation_description string
   * @param corporationName {String} the full name of the corporation
   * @param creatorId {Number} creator_id integer
   * @param memberCount {Number} member_count integer
   * @param taxRate {Number} tax_rate number
   * @param ticker {String} the short name of the corporation
   * @param url {String} url string
   */
  var exports = function(ceoId, corporationDescription, corporationName, creatorId, memberCount, taxRate, ticker, url) {
    var _this = this;


    _this['ceo_id'] = ceoId;
    _this['corporation_description'] = corporationDescription;
    _this['corporation_name'] = corporationName;

    _this['creator_id'] = creatorId;

    _this['member_count'] = memberCount;
    _this['tax_rate'] = taxRate;
    _this['ticker'] = ticker;
    _this['url'] = url;
  };

  /**
   * Constructs a <code>GetCorporationsCorporationIdOk</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCorporationsCorporationIdOk} obj Optional instance to populate.
   * @return {module:model/GetCorporationsCorporationIdOk} The populated <code>GetCorporationsCorporationIdOk</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('alliance_id')) {
        obj['alliance_id'] = ApiClient.convertToType(data['alliance_id'], 'Number');
      }
      if (data.hasOwnProperty('ceo_id')) {
        obj['ceo_id'] = ApiClient.convertToType(data['ceo_id'], 'Number');
      }
      if (data.hasOwnProperty('corporation_description')) {
        obj['corporation_description'] = ApiClient.convertToType(data['corporation_description'], 'String');
      }
      if (data.hasOwnProperty('corporation_name')) {
        obj['corporation_name'] = ApiClient.convertToType(data['corporation_name'], 'String');
      }
      if (data.hasOwnProperty('creation_date')) {
        obj['creation_date'] = ApiClient.convertToType(data['creation_date'], 'Date');
      }
      if (data.hasOwnProperty('creator_id')) {
        obj['creator_id'] = ApiClient.convertToType(data['creator_id'], 'Number');
      }
      if (data.hasOwnProperty('faction')) {
        obj['faction'] = ApiClient.convertToType(data['faction'], 'String');
      }
      if (data.hasOwnProperty('member_count')) {
        obj['member_count'] = ApiClient.convertToType(data['member_count'], 'Number');
      }
      if (data.hasOwnProperty('tax_rate')) {
        obj['tax_rate'] = ApiClient.convertToType(data['tax_rate'], 'Number');
      }
      if (data.hasOwnProperty('ticker')) {
        obj['ticker'] = ApiClient.convertToType(data['ticker'], 'String');
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
    }
    return obj;
  }

  /**
   * id of alliance that corporation is a member of, if any
   * @member {Number} alliance_id
   */
  exports.prototype['alliance_id'] = undefined;
  /**
   * ceo_id integer
   * @member {Number} ceo_id
   */
  exports.prototype['ceo_id'] = undefined;
  /**
   * corporation_description string
   * @member {String} corporation_description
   */
  exports.prototype['corporation_description'] = undefined;
  /**
   * the full name of the corporation
   * @member {String} corporation_name
   */
  exports.prototype['corporation_name'] = undefined;
  /**
   * creation_date string
   * @member {Date} creation_date
   */
  exports.prototype['creation_date'] = undefined;
  /**
   * creator_id integer
   * @member {Number} creator_id
   */
  exports.prototype['creator_id'] = undefined;
  /**
   * faction string
   * @member {module:model/GetCorporationsCorporationIdOk.FactionEnum} faction
   */
  exports.prototype['faction'] = undefined;
  /**
   * member_count integer
   * @member {Number} member_count
   */
  exports.prototype['member_count'] = undefined;
  /**
   * tax_rate number
   * @member {Number} tax_rate
   */
  exports.prototype['tax_rate'] = undefined;
  /**
   * the short name of the corporation
   * @member {String} ticker
   */
  exports.prototype['ticker'] = undefined;
  /**
   * url string
   * @member {String} url
   */
  exports.prototype['url'] = undefined;


  /**
   * Allowed values for the <code>faction</code> property.
   * @enum {String}
   * @readonly
   */
  exports.FactionEnum = {
    /**
     * value: "Minmatar"
     * @const
     */
    "Minmatar": "Minmatar",
    /**
     * value: "Gallente"
     * @const
     */
    "Gallente": "Gallente",
    /**
     * value: "Caldari"
     * @const
     */
    "Caldari": "Caldari",
    /**
     * value: "Amarr"
     * @const
     */
    "Amarr": "Amarr"  };


  return exports;
}));


