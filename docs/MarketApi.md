# EveSwaggerInterface.MarketApi

All URIs are relative to *https://esi.tech.ccp.is/latest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCharactersCharacterIdOrders**](MarketApi.md#getCharactersCharacterIdOrders) | **GET** /characters/{character_id}/orders/ | List orders from a character
[**getMarketsGroups**](MarketApi.md#getMarketsGroups) | **GET** /markets/groups/ | Get item groups
[**getMarketsGroupsMarketGroupId**](MarketApi.md#getMarketsGroupsMarketGroupId) | **GET** /markets/groups/{market_group_id}/ | Get item group information
[**getMarketsPrices**](MarketApi.md#getMarketsPrices) | **GET** /markets/prices/ | List market prices
[**getMarketsRegionIdHistory**](MarketApi.md#getMarketsRegionIdHistory) | **GET** /markets/{region_id}/history/ | List historical market statistics in a region
[**getMarketsRegionIdOrders**](MarketApi.md#getMarketsRegionIdOrders) | **GET** /markets/{region_id}/orders/ | List orders in a region
[**getMarketsStructuresStructureId**](MarketApi.md#getMarketsStructuresStructureId) | **GET** /markets/structures/{structure_id}/ | List orders in a structure


<a name="getCharactersCharacterIdOrders"></a>
# **getCharactersCharacterIdOrders**
> [GetCharactersCharacterIdOrders200Ok] getCharactersCharacterIdOrders(characterId, opts)

List orders from a character

List market orders placed by a character  ---  Alternate route: &#x60;/v1/characters/{character_id}/orders/&#x60;  Alternate route: &#x60;/legacy/characters/{character_id}/orders/&#x60;  Alternate route: &#x60;/dev/characters/{character_id}/orders/&#x60;   ---  This route is cached for up to 3600 seconds

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');
var defaultClient = EveSwaggerInterface.ApiClient.default;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveSwaggerInterface.MarketApi();

var characterId = 56; // Number | An EVE character ID

var opts = { 
  'datasource': "tranquility", // String | The server name you would like data from
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
apiInstance.getCharactersCharacterIdOrders(characterId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **characterId** | **Number**| An EVE character ID | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **token** | **String**| Access token to use, if preferred over a header | [optional] 
 **userAgent** | **String**| Client identifier, takes precedence over headers | [optional] 
 **xUserAgent** | **String**| Client identifier, takes precedence over User-Agent | [optional] 

### Return type

[**[GetCharactersCharacterIdOrders200Ok]**](GetCharactersCharacterIdOrders200Ok.md)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getMarketsGroups"></a>
# **getMarketsGroups**
> [&#39;Number&#39;] getMarketsGroups(opts)

Get item groups

Get a list of item groups  ---  Alternate route: &#x60;/v1/markets/groups/&#x60;  Alternate route: &#x60;/legacy/markets/groups/&#x60;  Alternate route: &#x60;/dev/markets/groups/&#x60;   ---  This route expires daily at 11:05

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');

var apiInstance = new EveSwaggerInterface.MarketApi();

var opts = { 
  'datasource': "tranquility", // String | The server name you would like data from
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
apiInstance.getMarketsGroups(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **userAgent** | **String**| Client identifier, takes precedence over headers | [optional] 
 **xUserAgent** | **String**| Client identifier, takes precedence over User-Agent | [optional] 

### Return type

**[&#39;Number&#39;]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getMarketsGroupsMarketGroupId"></a>
# **getMarketsGroupsMarketGroupId**
> GetMarketsGroupsMarketGroupIdOk getMarketsGroupsMarketGroupId(marketGroupId, opts)

Get item group information

Get information on an item group  ---  Alternate route: &#x60;/v1/markets/groups/{market_group_id}/&#x60;  Alternate route: &#x60;/legacy/markets/groups/{market_group_id}/&#x60;  Alternate route: &#x60;/dev/markets/groups/{market_group_id}/&#x60;   ---  This route expires daily at 11:05

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');

var apiInstance = new EveSwaggerInterface.MarketApi();

var marketGroupId = 56; // Number | An Eve item group ID

var opts = { 
  'datasource': "tranquility", // String | The server name you would like data from
  'language': "en-us", // String | Language to use in the response
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
apiInstance.getMarketsGroupsMarketGroupId(marketGroupId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketGroupId** | **Number**| An Eve item group ID | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **language** | **String**| Language to use in the response | [optional] [default to en-us]
 **userAgent** | **String**| Client identifier, takes precedence over headers | [optional] 
 **xUserAgent** | **String**| Client identifier, takes precedence over User-Agent | [optional] 

### Return type

[**GetMarketsGroupsMarketGroupIdOk**](GetMarketsGroupsMarketGroupIdOk.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getMarketsPrices"></a>
# **getMarketsPrices**
> [GetMarketsPrices200Ok] getMarketsPrices(opts)

List market prices

Return a list of prices  ---  Alternate route: &#x60;/v1/markets/prices/&#x60;  Alternate route: &#x60;/legacy/markets/prices/&#x60;  Alternate route: &#x60;/dev/markets/prices/&#x60;   ---  This route is cached for up to 3600 seconds

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');

var apiInstance = new EveSwaggerInterface.MarketApi();

var opts = { 
  'datasource': "tranquility", // String | The server name you would like data from
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
apiInstance.getMarketsPrices(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **userAgent** | **String**| Client identifier, takes precedence over headers | [optional] 
 **xUserAgent** | **String**| Client identifier, takes precedence over User-Agent | [optional] 

### Return type

[**[GetMarketsPrices200Ok]**](GetMarketsPrices200Ok.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getMarketsRegionIdHistory"></a>
# **getMarketsRegionIdHistory**
> [GetMarketsRegionIdHistory200Ok] getMarketsRegionIdHistory(regionId, typeId, opts)

List historical market statistics in a region

Return a list of historical market statistics for the specified type in a region  ---  Alternate route: &#x60;/v1/markets/{region_id}/history/&#x60;  Alternate route: &#x60;/legacy/markets/{region_id}/history/&#x60;  Alternate route: &#x60;/dev/markets/{region_id}/history/&#x60;   ---  This route is cached for up to 3600 seconds

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');

var apiInstance = new EveSwaggerInterface.MarketApi();

var regionId = 56; // Number | Return statistics in this region

var typeId = 56; // Number | Return statistics for this type

var opts = { 
  'datasource': "tranquility", // String | The server name you would like data from
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
apiInstance.getMarketsRegionIdHistory(regionId, typeId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **regionId** | **Number**| Return statistics in this region | 
 **typeId** | **Number**| Return statistics for this type | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **userAgent** | **String**| Client identifier, takes precedence over headers | [optional] 
 **xUserAgent** | **String**| Client identifier, takes precedence over User-Agent | [optional] 

### Return type

[**[GetMarketsRegionIdHistory200Ok]**](GetMarketsRegionIdHistory200Ok.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getMarketsRegionIdOrders"></a>
# **getMarketsRegionIdOrders**
> [GetMarketsRegionIdOrders200Ok] getMarketsRegionIdOrders(orderType, regionId, opts)

List orders in a region

Return a list of orders in a region  ---  Alternate route: &#x60;/v1/markets/{region_id}/orders/&#x60;  Alternate route: &#x60;/legacy/markets/{region_id}/orders/&#x60;  Alternate route: &#x60;/dev/markets/{region_id}/orders/&#x60;   ---  This route is cached for up to 300 seconds

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');

var apiInstance = new EveSwaggerInterface.MarketApi();

var orderType = "all"; // String | Filter buy/sell orders, return all orders by default. If you query without type_id, we always return both buy and sell orders. 

var regionId = 56; // Number | Return orders in this region

var opts = { 
  'datasource': "tranquility", // String | The server name you would like data from
  'page': 1, // Number | Which page to query, only used for querying without type_id. Starting at 1 
  'typeId': 56, // Number | Return orders only for this type
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
apiInstance.getMarketsRegionIdOrders(orderType, regionId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderType** | **String**| Filter buy/sell orders, return all orders by default. If you query without type_id, we always return both buy and sell orders.  | [default to all]
 **regionId** | **Number**| Return orders in this region | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **page** | **Number**| Which page to query, only used for querying without type_id. Starting at 1  | [optional] [default to 1]
 **typeId** | **Number**| Return orders only for this type | [optional] 
 **userAgent** | **String**| Client identifier, takes precedence over headers | [optional] 
 **xUserAgent** | **String**| Client identifier, takes precedence over User-Agent | [optional] 

### Return type

[**[GetMarketsRegionIdOrders200Ok]**](GetMarketsRegionIdOrders200Ok.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getMarketsStructuresStructureId"></a>
# **getMarketsStructuresStructureId**
> [GetMarketsStructuresStructureId200Ok] getMarketsStructuresStructureId(structureId, opts)

List orders in a structure

Return all orders in a structure  ---  Alternate route: &#x60;/v1/markets/structures/{structure_id}/&#x60;  Alternate route: &#x60;/legacy/markets/structures/{structure_id}/&#x60;  Alternate route: &#x60;/dev/markets/structures/{structure_id}/&#x60;   ---  This route is cached for up to 300 seconds

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');
var defaultClient = EveSwaggerInterface.ApiClient.default;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveSwaggerInterface.MarketApi();

var structureId = 789; // Number | Return orders in this structure

var opts = { 
  'datasource': "tranquility", // String | The server name you would like data from
  'page': 1, // Number | Which page to query, starting at 1
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
apiInstance.getMarketsStructuresStructureId(structureId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **structureId** | **Number**| Return orders in this structure | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **page** | **Number**| Which page to query, starting at 1 | [optional] [default to 1]
 **token** | **String**| Access token to use, if preferred over a header | [optional] 
 **userAgent** | **String**| Client identifier, takes precedence over headers | [optional] 
 **xUserAgent** | **String**| Client identifier, takes precedence over User-Agent | [optional] 

### Return type

[**[GetMarketsStructuresStructureId200Ok]**](GetMarketsStructuresStructureId200Ok.md)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

