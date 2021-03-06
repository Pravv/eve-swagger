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
    instance = new EveSwaggerInterface.GetCharactersCharacterIdContractsContractIdItems200Ok();
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

  describe('GetCharactersCharacterIdContractsContractIdItems200Ok', function() {
    it('should create an instance of GetCharactersCharacterIdContractsContractIdItems200Ok', function() {
      // uncomment below and update the code to test GetCharactersCharacterIdContractsContractIdItems200Ok
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdContractsContractIdItems200Ok();
      //expect(instance).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdContractsContractIdItems200Ok);
    });

    it('should have the property isIncluded (base name: "is_included")', function() {
      // uncomment below and update the code to test the property isIncluded
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdContractsContractIdItems200Ok();
      //expect(instance).to.be();
    });

    it('should have the property isSingleton (base name: "is_singleton")', function() {
      // uncomment below and update the code to test the property isSingleton
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdContractsContractIdItems200Ok();
      //expect(instance).to.be();
    });

    it('should have the property quantity (base name: "quantity")', function() {
      // uncomment below and update the code to test the property quantity
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdContractsContractIdItems200Ok();
      //expect(instance).to.be();
    });

    it('should have the property rawQuantity (base name: "raw_quantity")', function() {
      // uncomment below and update the code to test the property rawQuantity
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdContractsContractIdItems200Ok();
      //expect(instance).to.be();
    });

    it('should have the property recordId (base name: "record_id")', function() {
      // uncomment below and update the code to test the property recordId
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdContractsContractIdItems200Ok();
      //expect(instance).to.be();
    });

    it('should have the property typeId (base name: "type_id")', function() {
      // uncomment below and update the code to test the property typeId
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdContractsContractIdItems200Ok();
      //expect(instance).to.be();
    });

  });

}));
