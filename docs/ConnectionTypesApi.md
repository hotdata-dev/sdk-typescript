# ConnectionTypesApi

All URIs are relative to *https://app.hotdata.dev*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getConnectionType**](ConnectionTypesApi.md#getconnectiontype) | **GET** /v1/connection-types/{name} | Get connection type details |
| [**listConnectionTypes**](ConnectionTypesApi.md#listconnectiontypes) | **GET** /v1/connection-types | List connection types |



## getConnectionType

> ConnectionTypeDetail getConnectionType(name)

Get connection type details

Get configuration schema and authentication requirements for a specific connection type.

### Example

```ts
import {
  Configuration,
  ConnectionTypesApi,
} from '@hotdata/sdk';
import type { GetConnectionTypeRequest } from '@hotdata/sdk';

async function example() {
  console.log("🚀 Testing @hotdata/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ConnectionTypesApi(config);

  const body = {
    // string | Connection type name (e.g. postgres, mysql, snowflake)
    name: name_example,
  } satisfies GetConnectionTypeRequest;

  try {
    const data = await api.getConnectionType(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **name** | `string` | Connection type name (e.g. postgres, mysql, snowflake) | [Defaults to `undefined`] |

### Return type

[**ConnectionTypeDetail**](ConnectionTypeDetail.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Connection type details |  -  |
| **404** | Unknown connection type |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listConnectionTypes

> ListConnectionTypesResponse listConnectionTypes()

List connection types

List all available connection types, including native sources and FlightDLT services.

### Example

```ts
import {
  Configuration,
  ConnectionTypesApi,
} from '@hotdata/sdk';
import type { ListConnectionTypesRequest } from '@hotdata/sdk';

async function example() {
  console.log("🚀 Testing @hotdata/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ConnectionTypesApi(config);

  try {
    const data = await api.listConnectionTypes();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ListConnectionTypesResponse**](ListConnectionTypesResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Available connection types |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

