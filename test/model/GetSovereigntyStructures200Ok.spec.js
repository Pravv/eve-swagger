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
    instance = new EveSwaggerInterface.GetSovereigntyStructures200Ok();
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

  describe('GetSovereigntyStructures200Ok', function() {
    it('should create an instance of GetSovereigntyStructures200Ok', function() {
      // uncomment below and update the code to test GetSovereigntyStructures200Ok
      //var instane = new EveSwaggerInterface.GetSovereigntyStructures200Ok();
      //expect(instance).to.be.a(EveSwaggerInterface.GetSovereigntyStructures200Ok);
    });

    it('should have the property allianceId (base name: "alliance_id")', function() {
      // uncomment below and update the code to test the property allianceId
      //var instane = new EveSwaggerInterface.GetSovereigntyStructures200Ok();
      //expect(instance).to.be();
    });

    it('should have the property solarSystemId (base name: "solar_system_id")', function() {
      // uncomment below and update the code to test the property solarSystemId
      //var instane = new EveSwaggerInterface.GetSovereigntyStructures200Ok();
      //expect(instance).to.be();
    });

    it('should have the property structureId (base name: "structure_id")', function() {
      // uncomment below and update the code to test the property structureId
      //var instane = new EveSwaggerInterface.GetSovereigntyStructures200Ok();
      //expect(instance).to.be();
    });

    it('should have the property structureTypeId (base name: "structure_type_id")', function() {
      // uncomment below and update the code to test the property structureTypeId
      //var instane = new EveSwaggerInterface.GetSovereigntyStructures200Ok();
      //expect(instance).to.be();
    });

    it('should have the property vulnerabilityOccupancyLevel (base name: "vulnerability_occupancy_level")', function() {
      // uncomment below and update the code to test the property vulnerabilityOccupancyLevel
      //var instane = new EveSwaggerInterface.GetSovereigntyStructures200Ok();
      //expect(instance).to.be();
    });

    it('should have the property vulnerableEndTime (base name: "vulnerable_end_time")', function() {
      // uncomment below and update the code to test the property vulnerableEndTime
      //var instane = new EveSwaggerInterface.GetSovereigntyStructures200Ok();
      //expect(instance).to.be();
    });

    it('should have the property vulnerableStartTime (base name: "vulnerable_start_time")', function() {
      // uncomment below and update the code to test the property vulnerableStartTime
      //var instane = new EveSwaggerInterface.GetSovereigntyStructures200Ok();
      //expect(instance).to.be();
    });

  });

}));
