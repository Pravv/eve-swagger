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
    instance = new EveSwaggerInterface.GetMarketsRegionIdHistory200Ok();
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

  describe('GetMarketsRegionIdHistory200Ok', function() {
    it('should create an instance of GetMarketsRegionIdHistory200Ok', function() {
      // uncomment below and update the code to test GetMarketsRegionIdHistory200Ok
      //var instane = new EveSwaggerInterface.GetMarketsRegionIdHistory200Ok();
      //expect(instance).to.be.a(EveSwaggerInterface.GetMarketsRegionIdHistory200Ok);
    });

    it('should have the property average (base name: "average")', function() {
      // uncomment below and update the code to test the property average
      //var instane = new EveSwaggerInterface.GetMarketsRegionIdHistory200Ok();
      //expect(instance).to.be();
    });

    it('should have the property _date (base name: "date")', function() {
      // uncomment below and update the code to test the property _date
      //var instane = new EveSwaggerInterface.GetMarketsRegionIdHistory200Ok();
      //expect(instance).to.be();
    });

    it('should have the property highest (base name: "highest")', function() {
      // uncomment below and update the code to test the property highest
      //var instane = new EveSwaggerInterface.GetMarketsRegionIdHistory200Ok();
      //expect(instance).to.be();
    });

    it('should have the property lowest (base name: "lowest")', function() {
      // uncomment below and update the code to test the property lowest
      //var instane = new EveSwaggerInterface.GetMarketsRegionIdHistory200Ok();
      //expect(instance).to.be();
    });

    it('should have the property orderCount (base name: "order_count")', function() {
      // uncomment below and update the code to test the property orderCount
      //var instane = new EveSwaggerInterface.GetMarketsRegionIdHistory200Ok();
      //expect(instance).to.be();
    });

    it('should have the property volume (base name: "volume")', function() {
      // uncomment below and update the code to test the property volume
      //var instane = new EveSwaggerInterface.GetMarketsRegionIdHistory200Ok();
      //expect(instance).to.be();
    });

  });

}));
