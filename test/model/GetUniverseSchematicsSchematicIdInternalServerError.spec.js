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
    instance = new EveSwaggerInterface.GetUniverseSchematicsSchematicIdInternalServerError();
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

  describe('GetUniverseSchematicsSchematicIdInternalServerError', function() {
    it('should create an instance of GetUniverseSchematicsSchematicIdInternalServerError', function() {
      // uncomment below and update the code to test GetUniverseSchematicsSchematicIdInternalServerError
      //var instane = new EveSwaggerInterface.GetUniverseSchematicsSchematicIdInternalServerError();
      //expect(instance).to.be.a(EveSwaggerInterface.GetUniverseSchematicsSchematicIdInternalServerError);
    });

    it('should have the property error (base name: "error")', function() {
      // uncomment below and update the code to test the property error
      //var instane = new EveSwaggerInterface.GetUniverseSchematicsSchematicIdInternalServerError();
      //expect(instance).to.be();
    });

  });

}));
