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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.EveSwaggerInterface);
  }
}(this, function(expect, EveSwaggerInterface) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new EveSwaggerInterface.GetKillmailsKillmailIdKillmailHashVictim();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('GetKillmailsKillmailIdKillmailHashVictim', function() {
    it('should create an instance of GetKillmailsKillmailIdKillmailHashVictim', function() {
      // uncomment below and update the code to test GetKillmailsKillmailIdKillmailHashVictim
      //var instane = new EveSwaggerInterface.GetKillmailsKillmailIdKillmailHashVictim();
      //expect(instance).to.be.a(EveSwaggerInterface.GetKillmailsKillmailIdKillmailHashVictim);
    });

    it('should have the property allianceId (base name: "alliance_id")', function() {
      // uncomment below and update the code to test the property allianceId
      //var instane = new EveSwaggerInterface.GetKillmailsKillmailIdKillmailHashVictim();
      //expect(instance).to.be();
    });

    it('should have the property characterId (base name: "character_id")', function() {
      // uncomment below and update the code to test the property characterId
      //var instane = new EveSwaggerInterface.GetKillmailsKillmailIdKillmailHashVictim();
      //expect(instance).to.be();
    });

    it('should have the property corporationId (base name: "corporation_id")', function() {
      // uncomment below and update the code to test the property corporationId
      //var instane = new EveSwaggerInterface.GetKillmailsKillmailIdKillmailHashVictim();
      //expect(instance).to.be();
    });

    it('should have the property damageTaken (base name: "damage_taken")', function() {
      // uncomment below and update the code to test the property damageTaken
      //var instane = new EveSwaggerInterface.GetKillmailsKillmailIdKillmailHashVictim();
      //expect(instance).to.be();
    });

    it('should have the property factionId (base name: "faction_id")', function() {
      // uncomment below and update the code to test the property factionId
      //var instane = new EveSwaggerInterface.GetKillmailsKillmailIdKillmailHashVictim();
      //expect(instance).to.be();
    });

    it('should have the property items (base name: "items")', function() {
      // uncomment below and update the code to test the property items
      //var instane = new EveSwaggerInterface.GetKillmailsKillmailIdKillmailHashVictim();
      //expect(instance).to.be();
    });

    it('should have the property position (base name: "position")', function() {
      // uncomment below and update the code to test the property position
      //var instane = new EveSwaggerInterface.GetKillmailsKillmailIdKillmailHashVictim();
      //expect(instance).to.be();
    });

    it('should have the property shipTypeId (base name: "ship_type_id")', function() {
      // uncomment below and update the code to test the property shipTypeId
      //var instane = new EveSwaggerInterface.GetKillmailsKillmailIdKillmailHashVictim();
      //expect(instance).to.be();
    });

  });

}));