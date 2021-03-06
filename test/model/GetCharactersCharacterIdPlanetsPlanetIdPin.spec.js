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
    instance = new EveSwaggerInterface.GetCharactersCharacterIdPlanetsPlanetIdPin();
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

  describe('GetCharactersCharacterIdPlanetsPlanetIdPin', function() {
    it('should create an instance of GetCharactersCharacterIdPlanetsPlanetIdPin', function() {
      // uncomment below and update the code to test GetCharactersCharacterIdPlanetsPlanetIdPin
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdPlanetsPlanetIdPin();
      //expect(instance).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdPlanetsPlanetIdPin);
    });

    it('should have the property expiryTime (base name: "expiry_time")', function() {
      // uncomment below and update the code to test the property expiryTime
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdPlanetsPlanetIdPin();
      //expect(instance).to.be();
    });

    it('should have the property extractorDetails (base name: "extractor_details")', function() {
      // uncomment below and update the code to test the property extractorDetails
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdPlanetsPlanetIdPin();
      //expect(instance).to.be();
    });

    it('should have the property factoryDetails (base name: "factory_details")', function() {
      // uncomment below and update the code to test the property factoryDetails
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdPlanetsPlanetIdPin();
      //expect(instance).to.be();
    });

    it('should have the property installTime (base name: "install_time")', function() {
      // uncomment below and update the code to test the property installTime
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdPlanetsPlanetIdPin();
      //expect(instance).to.be();
    });

    it('should have the property lastCycleStart (base name: "last_cycle_start")', function() {
      // uncomment below and update the code to test the property lastCycleStart
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdPlanetsPlanetIdPin();
      //expect(instance).to.be();
    });

    it('should have the property latitude (base name: "latitude")', function() {
      // uncomment below and update the code to test the property latitude
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdPlanetsPlanetIdPin();
      //expect(instance).to.be();
    });

    it('should have the property longitude (base name: "longitude")', function() {
      // uncomment below and update the code to test the property longitude
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdPlanetsPlanetIdPin();
      //expect(instance).to.be();
    });

    it('should have the property pinId (base name: "pin_id")', function() {
      // uncomment below and update the code to test the property pinId
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdPlanetsPlanetIdPin();
      //expect(instance).to.be();
    });

    it('should have the property schematicId (base name: "schematic_id")', function() {
      // uncomment below and update the code to test the property schematicId
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdPlanetsPlanetIdPin();
      //expect(instance).to.be();
    });

    it('should have the property typeId (base name: "type_id")', function() {
      // uncomment below and update the code to test the property typeId
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdPlanetsPlanetIdPin();
      //expect(instance).to.be();
    });

  });

}));
