# ConnectionsApi

All URIs are relative to *https://api.hotdata.dev*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**checkConnectionHealth**](ConnectionsApi.md#checkconnectionhealth) | **GET** /v1/connections/{connection_id}/health | Check connection health |
| [**createConnection**](ConnectionsApi.md#createconnectionoperation) | **POST** /v1/connections | Create connection |
| [**deleteConnection**](ConnectionsApi.md#deleteconnection) | **DELETE** /v1/connections/{connection_id} | Delete connection |
| [**getConnection**](ConnectionsApi.md#getconnection) | **GET** /v1/connections/{connection_id} | Get connection |
| [**getTableProfile**](ConnectionsApi.md#gettableprofile) | **GET** /v1/connections/{connection_id}/tables/{schema}/{table}/profile | Get table profile |
| [**listConnections**](ConnectionsApi.md#listconnections) | **GET** /v1/connections | List connections |
| [**purgeConnectionCache**](ConnectionsApi.md#purgeconnectioncache) | **DELETE** /v1/connections/{connection_id}/cache | Purge connection cache |
| [**purgeTableCache**](ConnectionsApi.md#purgetablecache) | **DELETE** /v1/connections/{connection_id}/tables/{schema}/{table}/cache | Purge table cache |



## checkConnectionHealth

> ConnectionHealthResponse checkConnectionHealth(connectionId)

Check connection health

Test connectivity to the remote database. Returns health status and latency.

### Example

```ts
import {
  Configuration,
  ConnectionsApi,
} from '@hotdata/sdk';
import type { CheckConnectionHealthRequest } from '@hotdata/sdk';

async function example() {
  console.log("🚀 Testing @hotdata/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: WorkspaceId
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ConnectionsApi(config);

  const body = {
    // string | Connection ID
    connectionId: connectionId_example,
  } satisfies CheckConnectionHealthRequest;

  try {
    const data = await api.checkConnectionHealth(body);
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
| **connectionId** | `string` | Connection ID | [Defaults to `undefined`] |

### Return type

[**ConnectionHealthResponse**](ConnectionHealthResponse.md)

### Authorization

[WorkspaceId](../README.md#WorkspaceId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Connection health status |  -  |
| **404** | Connection not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createConnection

> CreateConnectionResponse createConnection(createConnectionRequest)

Create connection

Register a new database connection. Provide the source type and connection config (host, port, database, etc.). Credentials can be supplied inline (password/token fields are auto-converted to secrets) or by referencing an existing secret by name or ID. Schema discovery runs automatically after registration.

### Example

```ts
import {
  Configuration,
  ConnectionsApi,
} from '@hotdata/sdk';
import type { CreateConnectionOperationRequest } from '@hotdata/sdk';

async function example() {
  console.log("🚀 Testing @hotdata/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: WorkspaceId
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ConnectionsApi(config);

  const body = {
    // CreateConnectionRequest
    createConnectionRequest: ...,
  } satisfies CreateConnectionOperationRequest;

  try {
    const data = await api.createConnection(body);
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
| **createConnectionRequest** | [CreateConnectionRequest](CreateConnectionRequest.md) |  | |

### Return type

[**CreateConnectionResponse**](CreateConnectionResponse.md)

### Authorization

[WorkspaceId](../README.md#WorkspaceId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Connection created |  -  |
| **400** | Invalid request |  -  |
| **409** | Connection already exists |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteConnection

> deleteConnection(connectionId)

Delete connection

Delete a connection and its cached data.

### Example

```ts
import {
  Configuration,
  ConnectionsApi,
} from '@hotdata/sdk';
import type { DeleteConnectionRequest } from '@hotdata/sdk';

async function example() {
  console.log("🚀 Testing @hotdata/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: WorkspaceId
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ConnectionsApi(config);

  const body = {
    // string | Connection ID
    connectionId: connectionId_example,
  } satisfies DeleteConnectionRequest;

  try {
    const data = await api.deleteConnection(body);
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
| **connectionId** | `string` | Connection ID | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[WorkspaceId](../README.md#WorkspaceId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Connection deleted |  -  |
| **404** | Connection not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getConnection

> GetConnectionResponse getConnection(connectionId)

Get connection

Get details for a specific connection, including table and sync counts.

### Example

```ts
import {
  Configuration,
  ConnectionsApi,
} from '@hotdata/sdk';
import type { GetConnectionRequest } from '@hotdata/sdk';

async function example() {
  console.log("🚀 Testing @hotdata/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: WorkspaceId
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ConnectionsApi(config);

  const body = {
    // string | Connection ID
    connectionId: connectionId_example,
  } satisfies GetConnectionRequest;

  try {
    const data = await api.getConnection(body);
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
| **connectionId** | `string` | Connection ID | [Defaults to `undefined`] |

### Return type

[**GetConnectionResponse**](GetConnectionResponse.md)

### Authorization

[WorkspaceId](../README.md#WorkspaceId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Connection details |  -  |
| **404** | Connection not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getTableProfile

> TableProfileResponse getTableProfile(connectionId, schema, table)

Get table profile

Get column-level statistics for a synced table. Returns per-column profiles including cardinality, null counts, and type-specific details (distinct values for categorical columns, min/max for temporal/numeric, length stats for text). Profiles are computed at sync time.

### Example

```ts
import {
  Configuration,
  ConnectionsApi,
} from '@hotdata/sdk';
import type { GetTableProfileRequest } from '@hotdata/sdk';

async function example() {
  console.log("🚀 Testing @hotdata/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: WorkspaceId
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ConnectionsApi(config);

  const body = {
    // string | Connection ID
    connectionId: connectionId_example,
    // string | Schema name
    schema: schema_example,
    // string | Table name
    table: table_example,
  } satisfies GetTableProfileRequest;

  try {
    const data = await api.getTableProfile(body);
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
| **connectionId** | `string` | Connection ID | [Defaults to `undefined`] |
| **schema** | `string` | Schema name | [Defaults to `undefined`] |
| **table** | `string` | Table name | [Defaults to `undefined`] |

### Return type

[**TableProfileResponse**](TableProfileResponse.md)

### Authorization

[WorkspaceId](../README.md#WorkspaceId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Column profile statistics |  -  |
| **404** | Table or profile not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listConnections

> ListConnectionsResponse listConnections()

List connections

List all registered database connections.

### Example

```ts
import {
  Configuration,
  ConnectionsApi,
} from '@hotdata/sdk';
import type { ListConnectionsRequest } from '@hotdata/sdk';

async function example() {
  console.log("🚀 Testing @hotdata/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: WorkspaceId
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ConnectionsApi(config);

  try {
    const data = await api.listConnections();
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

[**ListConnectionsResponse**](ListConnectionsResponse.md)

### Authorization

[WorkspaceId](../README.md#WorkspaceId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of connections |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## purgeConnectionCache

> purgeConnectionCache(connectionId)

Purge connection cache

Purge all cached data for a connection. The next query against these tables will trigger a fresh sync from the remote source.

### Example

```ts
import {
  Configuration,
  ConnectionsApi,
} from '@hotdata/sdk';
import type { PurgeConnectionCacheRequest } from '@hotdata/sdk';

async function example() {
  console.log("🚀 Testing @hotdata/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: WorkspaceId
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ConnectionsApi(config);

  const body = {
    // string | Connection ID
    connectionId: connectionId_example,
  } satisfies PurgeConnectionCacheRequest;

  try {
    const data = await api.purgeConnectionCache(body);
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
| **connectionId** | `string` | Connection ID | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[WorkspaceId](../README.md#WorkspaceId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Cache purged |  -  |
| **404** | Connection not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## purgeTableCache

> purgeTableCache(connectionId, schema, table)

Purge table cache

Purge the cached data for a single table. The next query will trigger a fresh sync.

### Example

```ts
import {
  Configuration,
  ConnectionsApi,
} from '@hotdata/sdk';
import type { PurgeTableCacheRequest } from '@hotdata/sdk';

async function example() {
  console.log("🚀 Testing @hotdata/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: WorkspaceId
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ConnectionsApi(config);

  const body = {
    // string | Connection ID
    connectionId: connectionId_example,
    // string | Schema name
    schema: schema_example,
    // string | Table name
    table: table_example,
  } satisfies PurgeTableCacheRequest;

  try {
    const data = await api.purgeTableCache(body);
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
| **connectionId** | `string` | Connection ID | [Defaults to `undefined`] |
| **schema** | `string` | Schema name | [Defaults to `undefined`] |
| **table** | `string` | Table name | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[WorkspaceId](../README.md#WorkspaceId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Table cache purged |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

