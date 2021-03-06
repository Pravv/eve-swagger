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
    instance = new EveSwaggerInterface.GetCharactersCharacterIdMedals200Ok();
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

  describe('GetCharactersCharacterIdMedals200Ok', function() {
    it('should create an instance of GetCharactersCharacterIdMedals200Ok', function() {
      // uncomment below and update the code to test GetCharactersCharacterIdMedals200Ok
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdMedals200Ok();
      //expect(instance).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdMedals200Ok);
    });

    it('should have the property corporationId (base name: "corporation_id")', function() {
      // uncomment below and update the code to test the property corporationId
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdMedals200Ok();
      //expect(instance).to.be();
    });

    it('should have the property _date (base name: "date")', function() {
      // uncomment below and update the code to test the property _date
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdMedals200Ok();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdMedals200Ok();
      //expect(instance).to.be();
    });

    it('should have the property graphics (base name: "graphics")', function() {
      // uncomment below and update the code to test the property graphics
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdMedals200Ok();
      //expect(instance).to.be();
    });

    it('should have the property issuerId (base name: "issuer_id")', function() {
      // uncomment below and update the code to test the property issuerId
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdMedals200Ok();
      //expect(instance).to.be();
    });

    it('should have the property medalId (base name: "medal_id")', function() {
      // uncomment below and update the code to test the property medalId
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdMedals200Ok();
      //expect(instance).to.be();
    });

    it('should have the property reason (base name: "reason")', function() {
      // uncomment below and update the code to test the property reason
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdMedals200Ok();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdMedals200Ok();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdMedals200Ok();
      //expect(instance).to.be();
    });

  });

}));
