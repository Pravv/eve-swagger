# EveSwaggerInterface.SearchApi

All URIs are relative to *https://esi.tech.ccp.is/latest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCharactersCharacterIdSearch**](SearchApi.md#getCharactersCharacterIdSearch) | **GET** /characters/{character_id}/search/ | Search on a string
[**getSearch**](SearchApi.md#getSearch) | **GET** /search/ | Search on a string


<a name="getCharactersCharacterIdSearch"></a>
# **getCharactersCharacterIdSearch**
> GetCharactersCharacterIdSearchOk getCharactersCharacterIdSearch(categories, characterId, search, opts)

Search on a string

Search for entities that match a given sub-string.  ---  Alternate route: &#x60;/v2/characters/{character_id}/search/&#x60;   ---  This route is cached for up to 3600 seconds

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');
var defaultClient = EveSwaggerInterface.ApiClient.default;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveSwaggerInterface.SearchApi();

var categories = ["categories_example"]; // [String] | Type of entities to search for

var characterId = 56; // Number | An EVE character ID

var search = "search_example"; // String | The string to search on

var opts = { 
  'datasource': "tranquility", // String | The server name you would like data from
  'language': "en-us", // String | Search locale
  'strict': false, // Boolean | Whether the search should be a strict match
  'token': "token_example", // String | Access token to use, if preferred over a header
  'userAgent': "userAgent_example", // String | Client identifier, takes precedence over headers
  'xUserAgent': "xUserAgent_example" // String | Client identifier, takes precedence over User-Agent
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCharactersCharacterIdSearch(categories, characterId, search, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categories** | [**[String]**](String.md)| Type of entities to search for | 
 **characterId** | **Number**| An EVE character ID | 
 **search** | **String**| The string to search on | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **language** | **String**| Search locale | [optional] [default to en-us]
 **strict** | **Boolean**| Whether the search should be a strict match | [optional] [default to false]
 **token** | **String**| Access token to use, if preferred over a header | [optional] 
 **userAgent** | **String**| Client identifier, takes precedence over headers | [optional] 
 **xUserAgent** | **String**| Client identifier, takes precedence over User-Agent | [optional] 

### Return type

[**GetCharactersCharacterIdSearchOk**](GetCharactersCharacterIdSearchOk.md)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSearch"></a>
# **getSearch**
> GetSearchOk getSearch(categories, search, opts)

Search on a string

Search for entities that match a given sub-string.  ---  Alternate route: &#x60;/v1/search/&#x60;  Alternate route: &#x60;/legacy/search/&#x60;   ---  This route is cached for up to 3600 seconds

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');

var apiInstance = new EveSwaggerInterface.SearchApi();

var categories = ["categories_example"]; // [String] | Type of entities to search for

var search = "search_example"; // String | The string to search on

var opts = { 
  'datasource': "tranquility", // String | The server name you would like data from
  'language': "en-us", // String | Search locale
  'strict': false, // Boolean | Whether the search should be a strict match
  'userAgent': "userAgent_example", // String | Client identifier, takes precedence over headers
  'xUserAgent': "xUserAgent_example" // String | Client identifier, takes precedence over User-Agent
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSearch(categories, search, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categories** | [**[String]**](String.md)| Type of entities to search for | 
 **search** | **String**| The string to search on | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **language** | **String**| Search locale | [optional] [default to en-us]
 **strict** | **Boolean**| Whether the search should be a strict match | [optional] [default to false]
 **userAgent** | **String**| Client identifier, takes precedence over headers | [optional] 
 **xUserAgent** | **String**| Client identifier, takes precedence over User-Agent | [optional] 

### Return type

[**GetSearchOk**](GetSearchOk.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

