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
    instance = new EveSwaggerInterface.GetUniverseMoonsMoonIdOk();
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

  describe('GetUniverseMoonsMoonIdOk', function() {
    it('should create an instance of GetUniverseMoonsMoonIdOk', function() {
      // uncomment below and update the code to test GetUniverseMoonsMoonIdOk
      //var instane = new EveSwaggerInterface.GetUniverseMoonsMoonIdOk();
      //expect(instance).to.be.a(EveSwaggerInterface.GetUniverseMoonsMoonIdOk);
    });

    it('should have the property moonId (base name: "moon_id")', function() {
      // uncomment below and update the code to test the property moonId
      //var instane = new EveSwaggerInterface.GetUniverseMoonsMoonIdOk();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new EveSwaggerInterface.GetUniverseMoonsMoonIdOk();
      //expect(instance).to.be();
    });

    it('should have the property position (base name: "position")', function() {
      // uncomment below and update the code to test the property position
      //var instane = new EveSwaggerInterface.GetUniverseMoonsMoonIdOk();
      //expect(instance).to.be();
    });

    it('should have the property systemId (base name: "system_id")', function() {
      // uncomment below and update the code to test the property systemId
      //var instane = new EveSwaggerInterface.GetUniverseMoonsMoonIdOk();
      //expect(instance).to.be();
    });

  });

}));
