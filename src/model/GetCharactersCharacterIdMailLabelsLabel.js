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
    root.EveSwaggerInterface.GetCharactersCharacterIdMailLabelsLabel = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetCharactersCharacterIdMailLabelsLabel model module.
   * @module model/GetCharactersCharacterIdMailLabelsLabel
   * @version 0.5.0
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdMailLabelsLabel</code>.
   * label object
   * @alias module:model/GetCharactersCharacterIdMailLabelsLabel
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>GetCharactersCharacterIdMailLabelsLabel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdMailLabelsLabel} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdMailLabelsLabel} The populated <code>GetCharactersCharacterIdMailLabelsLabel</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('color')) {
        obj['color'] = ApiClient.convertToType(data['color'], 'String');
      }
      if (data.hasOwnProperty('label_id')) {
        obj['label_id'] = ApiClient.convertToType(data['label_id'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('unread_count')) {
        obj['unread_count'] = ApiClient.convertToType(data['unread_count'], 'Number');
      }
    }
    return obj;
  }

  /**
   * color string
   * @member {module:model/GetCharactersCharacterIdMailLabelsLabel.ColorEnum} color
   * @default '#ffffff'
   */
  exports.prototype['color'] = '#ffffff';
  /**
   * label_id integer
   * @member {Number} label_id
   */
  exports.prototype['label_id'] = undefined;
  /**
   * name string
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * unread_count integer
   * @member {Number} unread_count
   */
  exports.prototype['unread_count'] = undefined;


  /**
   * Allowed values for the <code>color</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ColorEnum = {
    /**
     * value: "#ffffff"
     * @const
     */
    "ffffff": "#ffffff",
    /**
     * value: "#ffff01"
     * @const
     */
    "ffff01": "#ffff01",
    /**
     * value: "#ff6600"
     * @const
     */
    "ff6600": "#ff6600",
    /**
     * value: "#fe0000"
     * @const
     */
    "fe0000": "#fe0000",
    /**
     * value: "#9a0000"
     * @const
     */
    "9a0000": "#9a0000",
    /**
     * value: "#660066"
     * @const
     */
    "660066": "#660066",
    /**
     * value: "#0000fe"
     * @const
     */
    "0000fe": "#0000fe",
    /**
     * value: "#0099ff"
     * @const
     */
    "0099ff": "#0099ff",
    /**
     * value: "#01ffff"
     * @const
     */
    "01ffff": "#01ffff",
    /**
     * value: "#00ff33"
     * @const
     */
    "00ff33": "#00ff33",
    /**
     * value: "#349800"
     * @const
     */
    "349800": "#349800",
    /**
     * value: "#006634"
     * @const
     */
    "006634": "#006634",
    /**
     * value: "#666666"
     * @const
     */
    "666666": "#666666",
    /**
     * value: "#999999"
     * @const
     */
    "999999": "#999999",
    /**
     * value: "#e6e6e6"
     * @const
     */
    "e6e6e6": "#e6e6e6",
    /**
     * value: "#ffffcd"
     * @const
     */
    "ffffcd": "#ffffcd",
    /**
     * value: "#99ffff"
     * @const
     */
    "99ffff": "#99ffff",
    /**
     * value: "#ccff9a"
     * @const
     */
    "ccff9a": "#ccff9a"  };


  return exports;
}));


