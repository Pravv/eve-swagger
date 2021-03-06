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
    instance = new EveSwaggerInterface.GetUniverseTypesTypeIdDogmaEffect();
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

  describe('GetUniverseTypesTypeIdDogmaEffect', function() {
    it('should create an instance of GetUniverseTypesTypeIdDogmaEffect', function() {
      // uncomment below and update the code to test GetUniverseTypesTypeIdDogmaEffect
      //var instane = new EveSwaggerInterface.GetUniverseTypesTypeIdDogmaEffect();
      //expect(instance).to.be.a(EveSwaggerInterface.GetUniverseTypesTypeIdDogmaEffect);
    });

    it('should have the property effectId (base name: "effect_id")', function() {
      // uncomment below and update the code to test the property effectId
      //var instane = new EveSwaggerInterface.GetUniverseTypesTypeIdDogmaEffect();
      //expect(instance).to.be();
    });

    it('should have the property isDefault (base name: "is_default")', function() {
      // uncomment below and update the code to test the property isDefault
      //var instane = new EveSwaggerInterface.GetUniverseTypesTypeIdDogmaEffect();
      //expect(instance).to.be();
    });

  });

}));
