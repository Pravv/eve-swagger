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
    instance = new EveSwaggerInterface.GetIndustryFacilities200Ok();
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

  describe('GetIndustryFacilities200Ok', function() {
    it('should create an instance of GetIndustryFacilities200Ok', function() {
      // uncomment below and update the code to test GetIndustryFacilities200Ok
      //var instane = new EveSwaggerInterface.GetIndustryFacilities200Ok();
      //expect(instance).to.be.a(EveSwaggerInterface.GetIndustryFacilities200Ok);
    });

    it('should have the property facilityId (base name: "facility_id")', function() {
      // uncomment below and update the code to test the property facilityId
      //var instane = new EveSwaggerInterface.GetIndustryFacilities200Ok();
      //expect(instance).to.be();
    });

    it('should have the property ownerId (base name: "owner_id")', function() {
      // uncomment below and update the code to test the property ownerId
      //var instane = new EveSwaggerInterface.GetIndustryFacilities200Ok();
      //expect(instance).to.be();
    });

    it('should have the property regionId (base name: "region_id")', function() {
      // uncomment below and update the code to test the property regionId
      //var instane = new EveSwaggerInterface.GetIndustryFacilities200Ok();
      //expect(instance).to.be();
    });

    it('should have the property solarSystemId (base name: "solar_system_id")', function() {
      // uncomment below and update the code to test the property solarSystemId
      //var instane = new EveSwaggerInterface.GetIndustryFacilities200Ok();
      //expect(instance).to.be();
    });

    it('should have the property tax (base name: "tax")', function() {
      // uncomment below and update the code to test the property tax
      //var instane = new EveSwaggerInterface.GetIndustryFacilities200Ok();
      //expect(instance).to.be();
    });

    it('should have the property typeId (base name: "type_id")', function() {
      // uncomment below and update the code to test the property typeId
      //var instane = new EveSwaggerInterface.GetIndustryFacilities200Ok();
      //expect(instance).to.be();
    });

  });

}));
