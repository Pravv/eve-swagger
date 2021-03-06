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
    instance = new EveSwaggerInterface.GetCharactersCharacterIdContracts200Ok();
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

  describe('GetCharactersCharacterIdContracts200Ok', function() {
    it('should create an instance of GetCharactersCharacterIdContracts200Ok', function() {
      // uncomment below and update the code to test GetCharactersCharacterIdContracts200Ok
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdContracts200Ok();
      //expect(instance).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdContracts200Ok);
    });

    it('should have the property acceptorId (base name: "acceptor_id")', function() {
      // uncomment below and update the code to test the property acceptorId
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdContracts200Ok();
      //expect(instance).to.be();
    });

    it('should have the property assigneeId (base name: "assignee_id")', function() {
      // uncomment below and update the code to test the property assigneeId
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdContracts200Ok();
      //expect(instance).to.be();
    });

    it('should have the property availability (base name: "availability")', function() {
      // uncomment below and update the code to test the property availability
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdContracts200Ok();
      //expect(instance).to.be();
    });

    it('should have the property buyout (base name: "buyout")', function() {
      // uncomment below and update the code to test the property buyout
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdContracts200Ok();
      //expect(instance).to.be();
    });

    it('should have the property collateral (base name: "collateral")', function() {
      // uncomment below and update the code to test the property collateral
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdContracts200Ok();
      //expect(instance).to.be();
    });

    it('should have the property contractId (base name: "contract_id")', function() {
      // uncomment below and update the code to test the property contractId
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdContracts200Ok();
      //expect(instance).to.be();
    });

    it('should have the property dateAccepted (base name: "date_accepted")', function() {
      // uncomment below and update the code to test the property dateAccepted
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdContracts200Ok();
      //expect(instance).to.be();
    });

    it('should have the property dateCompleted (base name: "date_completed")', function() {
      // uncomment below and update the code to test the property dateCompleted
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdContracts200Ok();
      //expect(instance).to.be();
    });

    it('should have the property dateExpired (base name: "date_expired")', function() {
      // uncomment below and update the code to test the property dateExpired
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdContracts200Ok();
      //expect(instance).to.be();
    });

    it('should have the property dateIssued (base name: "date_issued")', function() {
      // uncomment below and update the code to test the property dateIssued
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdContracts200Ok();
      //expect(instance).to.be();
    });

    it('should have the property daysToComplete (base name: "days_to_complete")', function() {
      // uncomment below and update the code to test the property daysToComplete
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdContracts200Ok();
      //expect(instance).to.be();
    });

    it('should have the property endLocationId (base name: "end_location_id")', function() {
      // uncomment below and update the code to test the property endLocationId
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdContracts200Ok();
      //expect(instance).to.be();
    });

    it('should have the property forCorporation (base name: "for_corporation")', function() {
      // uncomment below and update the code to test the property forCorporation
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdContracts200Ok();
      //expect(instance).to.be();
    });

    it('should have the property issuerCorporationId (base name: "issuer_corporation_id")', function() {
      // uncomment below and update the code to test the property issuerCorporationId
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdContracts200Ok();
      //expect(instance).to.be();
    });

    it('should have the property issuerId (base name: "issuer_id")', function() {
      // uncomment below and update the code to test the property issuerId
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdContracts200Ok();
      //expect(instance).to.be();
    });

    it('should have the property price (base name: "price")', function() {
      // uncomment below and update the code to test the property price
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdContracts200Ok();
      //expect(instance).to.be();
    });

    it('should have the property reward (base name: "reward")', function() {
      // uncomment below and update the code to test the property reward
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdContracts200Ok();
      //expect(instance).to.be();
    });

    it('should have the property startLocationId (base name: "start_location_id")', function() {
      // uncomment below and update the code to test the property startLocationId
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdContracts200Ok();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdContracts200Ok();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdContracts200Ok();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdContracts200Ok();
      //expect(instance).to.be();
    });

    it('should have the property volume (base name: "volume")', function() {
      // uncomment below and update the code to test the property volume
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdContracts200Ok();
      //expect(instance).to.be();
    });

  });

}));
