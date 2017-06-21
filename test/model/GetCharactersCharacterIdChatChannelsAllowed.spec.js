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
    instance = new EveSwaggerInterface.GetCharactersCharacterIdChatChannelsAllowed();
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

  describe('GetCharactersCharacterIdChatChannelsAllowed', function() {
    it('should create an instance of GetCharactersCharacterIdChatChannelsAllowed', function() {
      // uncomment below and update the code to test GetCharactersCharacterIdChatChannelsAllowed
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdChatChannelsAllowed();
      //expect(instance).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdChatChannelsAllowed);
    });

    it('should have the property accessorId (base name: "accessor_id")', function() {
      // uncomment below and update the code to test the property accessorId
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdChatChannelsAllowed();
      //expect(instance).to.be();
    });

    it('should have the property accessorType (base name: "accessor_type")', function() {
      // uncomment below and update the code to test the property accessorType
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdChatChannelsAllowed();
      //expect(instance).to.be();
    });

  });

}));