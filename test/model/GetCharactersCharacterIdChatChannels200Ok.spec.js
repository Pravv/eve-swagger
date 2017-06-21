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
    instance = new EveSwaggerInterface.GetCharactersCharacterIdChatChannels200Ok();
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

  describe('GetCharactersCharacterIdChatChannels200Ok', function() {
    it('should create an instance of GetCharactersCharacterIdChatChannels200Ok', function() {
      // uncomment below and update the code to test GetCharactersCharacterIdChatChannels200Ok
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdChatChannels200Ok();
      //expect(instance).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdChatChannels200Ok);
    });

    it('should have the property allowed (base name: "allowed")', function() {
      // uncomment below and update the code to test the property allowed
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdChatChannels200Ok();
      //expect(instance).to.be();
    });

    it('should have the property blocked (base name: "blocked")', function() {
      // uncomment below and update the code to test the property blocked
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdChatChannels200Ok();
      //expect(instance).to.be();
    });

    it('should have the property channelId (base name: "channel_id")', function() {
      // uncomment below and update the code to test the property channelId
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdChatChannels200Ok();
      //expect(instance).to.be();
    });

    it('should have the property comparisonKey (base name: "comparison_key")', function() {
      // uncomment below and update the code to test the property comparisonKey
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdChatChannels200Ok();
      //expect(instance).to.be();
    });

    it('should have the property hasPassword (base name: "has_password")', function() {
      // uncomment below and update the code to test the property hasPassword
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdChatChannels200Ok();
      //expect(instance).to.be();
    });

    it('should have the property motd (base name: "motd")', function() {
      // uncomment below and update the code to test the property motd
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdChatChannels200Ok();
      //expect(instance).to.be();
    });

    it('should have the property muted (base name: "muted")', function() {
      // uncomment below and update the code to test the property muted
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdChatChannels200Ok();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdChatChannels200Ok();
      //expect(instance).to.be();
    });

    it('should have the property operators (base name: "operators")', function() {
      // uncomment below and update the code to test the property operators
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdChatChannels200Ok();
      //expect(instance).to.be();
    });

    it('should have the property ownerId (base name: "owner_id")', function() {
      // uncomment below and update the code to test the property ownerId
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdChatChannels200Ok();
      //expect(instance).to.be();
    });

  });

}));
