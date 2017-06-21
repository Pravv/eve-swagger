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
    root.EveSwaggerInterface.GetCharactersCharacterIdSkillqueue200Ok = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetCharactersCharacterIdSkillqueue200Ok model module.
   * @module model/GetCharactersCharacterIdSkillqueue200Ok
   * @version 0.5.0
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdSkillqueue200Ok</code>.
   * 200 ok object
   * @alias module:model/GetCharactersCharacterIdSkillqueue200Ok
   * @class
   * @param finishedLevel {Number} finished_level integer
   * @param queuePosition {Number} queue_position integer
   * @param skillId {Number} skill_id integer
   */
  var exports = function(finishedLevel, queuePosition, skillId) {
    var _this = this;


    _this['finished_level'] = finishedLevel;


    _this['queue_position'] = queuePosition;
    _this['skill_id'] = skillId;


  };

  /**
   * Constructs a <code>GetCharactersCharacterIdSkillqueue200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdSkillqueue200Ok} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdSkillqueue200Ok} The populated <code>GetCharactersCharacterIdSkillqueue200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('finish_date')) {
        obj['finish_date'] = ApiClient.convertToType(data['finish_date'], 'Date');
      }
      if (data.hasOwnProperty('finished_level')) {
        obj['finished_level'] = ApiClient.convertToType(data['finished_level'], 'Number');
      }
      if (data.hasOwnProperty('level_end_sp')) {
        obj['level_end_sp'] = ApiClient.convertToType(data['level_end_sp'], 'Number');
      }
      if (data.hasOwnProperty('level_start_sp')) {
        obj['level_start_sp'] = ApiClient.convertToType(data['level_start_sp'], 'Number');
      }
      if (data.hasOwnProperty('queue_position')) {
        obj['queue_position'] = ApiClient.convertToType(data['queue_position'], 'Number');
      }
      if (data.hasOwnProperty('skill_id')) {
        obj['skill_id'] = ApiClient.convertToType(data['skill_id'], 'Number');
      }
      if (data.hasOwnProperty('start_date')) {
        obj['start_date'] = ApiClient.convertToType(data['start_date'], 'Date');
      }
      if (data.hasOwnProperty('training_start_sp')) {
        obj['training_start_sp'] = ApiClient.convertToType(data['training_start_sp'], 'Number');
      }
    }
    return obj;
  }

  /**
   * finish_date string
   * @member {Date} finish_date
   */
  exports.prototype['finish_date'] = undefined;
  /**
   * finished_level integer
   * @member {Number} finished_level
   */
  exports.prototype['finished_level'] = undefined;
  /**
   * level_end_sp integer
   * @member {Number} level_end_sp
   */
  exports.prototype['level_end_sp'] = undefined;
  /**
   * Amount of SP that was in the skill when it started training it's current level. Used to calculate % of current level complete.
   * @member {Number} level_start_sp
   */
  exports.prototype['level_start_sp'] = undefined;
  /**
   * queue_position integer
   * @member {Number} queue_position
   */
  exports.prototype['queue_position'] = undefined;
  /**
   * skill_id integer
   * @member {Number} skill_id
   */
  exports.prototype['skill_id'] = undefined;
  /**
   * start_date string
   * @member {Date} start_date
   */
  exports.prototype['start_date'] = undefined;
  /**
   * training_start_sp integer
   * @member {Number} training_start_sp
   */
  exports.prototype['training_start_sp'] = undefined;



  return exports;
}));


