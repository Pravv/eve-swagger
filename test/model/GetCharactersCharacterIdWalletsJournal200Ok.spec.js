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
    instance = new EveSwaggerInterface.GetCharactersCharacterIdWalletsJournal200Ok();
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

  describe('GetCharactersCharacterIdWalletsJournal200Ok', function() {
    it('should create an instance of GetCharactersCharacterIdWalletsJournal200Ok', function() {
      // uncomment below and update the code to test GetCharactersCharacterIdWalletsJournal200Ok
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdWalletsJournal200Ok();
      //expect(instance).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdWalletsJournal200Ok);
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdWalletsJournal200Ok();
      //expect(instance).to.be();
    });

    it('should have the property argumentName (base name: "argument_name")', function() {
      // uncomment below and update the code to test the property argumentName
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdWalletsJournal200Ok();
      //expect(instance).to.be();
    });

    it('should have the property argumentValue (base name: "argument_value")', function() {
      // uncomment below and update the code to test the property argumentValue
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdWalletsJournal200Ok();
      //expect(instance).to.be();
    });

    it('should have the property balance (base name: "balance")', function() {
      // uncomment below and update the code to test the property balance
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdWalletsJournal200Ok();
      //expect(instance).to.be();
    });

    it('should have the property _date (base name: "date")', function() {
      // uncomment below and update the code to test the property _date
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdWalletsJournal200Ok();
      //expect(instance).to.be();
    });

    it('should have the property firstPartyId (base name: "first_party_id")', function() {
      // uncomment below and update the code to test the property firstPartyId
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdWalletsJournal200Ok();
      //expect(instance).to.be();
    });

    it('should have the property firstPartyType (base name: "first_party_type")', function() {
      // uncomment below and update the code to test the property firstPartyType
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdWalletsJournal200Ok();
      //expect(instance).to.be();
    });

    it('should have the property reason (base name: "reason")', function() {
      // uncomment below and update the code to test the property reason
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdWalletsJournal200Ok();
      //expect(instance).to.be();
    });

    it('should have the property refId (base name: "ref_id")', function() {
      // uncomment below and update the code to test the property refId
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdWalletsJournal200Ok();
      //expect(instance).to.be();
    });

    it('should have the property refTypeId (base name: "ref_type_id")', function() {
      // uncomment below and update the code to test the property refTypeId
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdWalletsJournal200Ok();
      //expect(instance).to.be();
    });

    it('should have the property secondPartyId (base name: "second_party_id")', function() {
      // uncomment below and update the code to test the property secondPartyId
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdWalletsJournal200Ok();
      //expect(instance).to.be();
    });

    it('should have the property secondPartyType (base name: "second_party_type")', function() {
      // uncomment below and update the code to test the property secondPartyType
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdWalletsJournal200Ok();
      //expect(instance).to.be();
    });

    it('should have the property taxAmount (base name: "tax_amount")', function() {
      // uncomment below and update the code to test the property taxAmount
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdWalletsJournal200Ok();
      //expect(instance).to.be();
    });

    it('should have the property taxRecieverId (base name: "tax_reciever_id")', function() {
      // uncomment below and update the code to test the property taxRecieverId
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdWalletsJournal200Ok();
      //expect(instance).to.be();
    });

  });

}));
