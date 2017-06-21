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
    instance = new EveSwaggerInterface.GetCharactersCharacterIdBookmarks200Ok();
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

  describe('GetCharactersCharacterIdBookmarks200Ok', function() {
    it('should create an instance of GetCharactersCharacterIdBookmarks200Ok', function() {
      // uncomment below and update the code to test GetCharactersCharacterIdBookmarks200Ok
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdBookmarks200Ok();
      //expect(instance).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdBookmarks200Ok);
    });

    it('should have the property bookmarkId (base name: "bookmark_id")', function() {
      // uncomment below and update the code to test the property bookmarkId
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdBookmarks200Ok();
      //expect(instance).to.be();
    });

    it('should have the property createDate (base name: "create_date")', function() {
      // uncomment below and update the code to test the property createDate
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdBookmarks200Ok();
      //expect(instance).to.be();
    });

    it('should have the property creatorId (base name: "creator_id")', function() {
      // uncomment below and update the code to test the property creatorId
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdBookmarks200Ok();
      //expect(instance).to.be();
    });

    it('should have the property folderId (base name: "folder_id")', function() {
      // uncomment below and update the code to test the property folderId
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdBookmarks200Ok();
      //expect(instance).to.be();
    });

    it('should have the property memo (base name: "memo")', function() {
      // uncomment below and update the code to test the property memo
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdBookmarks200Ok();
      //expect(instance).to.be();
    });

    it('should have the property note (base name: "note")', function() {
      // uncomment below and update the code to test the property note
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdBookmarks200Ok();
      //expect(instance).to.be();
    });

    it('should have the property ownerId (base name: "owner_id")', function() {
      // uncomment below and update the code to test the property ownerId
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdBookmarks200Ok();
      //expect(instance).to.be();
    });

    it('should have the property target (base name: "target")', function() {
      // uncomment below and update the code to test the property target
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdBookmarks200Ok();
      //expect(instance).to.be();
    });

  });

}));
