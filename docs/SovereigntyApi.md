# EveSwaggerInterface.SovereigntyApi

All URIs are relative to *https://esi.tech.ccp.is/latest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSovereigntyCampaigns**](SovereigntyApi.md#getSovereigntyCampaigns) | **GET** /sovereignty/campaigns/ | List sovereignty campaigns
[**getSovereigntyMap**](SovereigntyApi.md#getSovereigntyMap) | **GET** /sovereignty/map/ | List sovereignty of systems
[**getSovereigntyStructures**](SovereigntyApi.md#getSovereigntyStructures) | **GET** /sovereignty/structures/ | List sovereignty structures


<a name="getSovereigntyCampaigns"></a>
# **getSovereigntyCampaigns**
> [GetSovereigntyCampaigns200Ok] getSovereigntyCampaigns(opts)

List sovereignty campaigns

Shows sovereignty data for campaigns.  ---  Alternate route: &#x60;/v1/sovereignty/campaigns/&#x60;  Alternate route: &#x60;/legacy/sovereignty/campaigns/&#x60;  Alternate route: &#x60;/dev/sovereignty/campaigns/&#x60;   ---  This route is cached for up to 5 seconds

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');

var apiInstance = new EveSwaggerInterface.SovereigntyApi();

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
apiInstance.getSovereigntyCampaigns(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **userAgent** | **String**| Client identifier, takes precedence over headers | [optional] 
 **xUserAgent** | **String**| Client identifier, takes precedence over User-Agent | [optional] 

### Return type

[**[GetSovereigntyCampaigns200Ok]**](GetSovereigntyCampaigns200Ok.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSovereigntyMap"></a>
# **getSovereigntyMap**
> [GetSovereigntyMap200Ok] getSovereigntyMap(opts)

List sovereignty of systems

Shows sovereignty information for solar systems  ---  Alternate route: &#x60;/v1/sovereignty/map/&#x60;  Alternate route: &#x60;/legacy/sovereignty/map/&#x60;  Alternate route: &#x60;/dev/sovereignty/map/&#x60;   ---  This route is cached for up to 3600 seconds

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');

var apiInstance = new EveSwaggerInterface.SovereigntyApi();

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
apiInstance.getSovereigntyMap(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **userAgent** | **String**| Client identifier, takes precedence over headers | [optional] 
 **xUserAgent** | **String**| Client identifier, takes precedence over User-Agent | [optional] 

### Return type

[**[GetSovereigntyMap200Ok]**](GetSovereigntyMap200Ok.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSovereigntyStructures"></a>
# **getSovereigntyStructures**
> [GetSovereigntyStructures200Ok] getSovereigntyStructures(opts)

List sovereignty structures

Shows sovereignty data for structures.  ---  Alternate route: &#x60;/v1/sovereignty/structures/&#x60;  Alternate route: &#x60;/legacy/sovereignty/structures/&#x60;  Alternate route: &#x60;/dev/sovereignty/structures/&#x60;   ---  This route is cached for up to 120 seconds

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');

var apiInstance = new EveSwaggerInterface.SovereigntyApi();

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
apiInstance.getSovereigntyStructures(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **userAgent** | **String**| Client identifier, takes precedence over headers | [optional] 
 **xUserAgent** | **String**| Client identifier, takes precedence over User-Agent | [optional] 

### Return type

[**[GetSovereigntyStructures200Ok]**](GetSovereigntyStructures200Ok.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

