# IndexesApi

All URIs are relative to *https://app.hotdata.dev*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createIndex**](IndexesApi.md#createindexoperation) | **POST** /v1/connections/{connection_id}/tables/{schema}/{table}/indexes | Create an index on a table |
| [**deleteIndex**](IndexesApi.md#deleteindex) | **DELETE** /v1/connections/{connection_id}/tables/{schema}/{table}/indexes/{index_name} | Delete an index |
| [**listIndexes**](IndexesApi.md#listindexes) | **GET** /v1/connections/{connection_id}/tables/{schema}/{table}/indexes | List indexes on a table |



## createIndex

> IndexInfoResponse createIndex(connectionId, schema, table, createIndexRequest)

Create an index on a table

Create a sorted or full-text search index on a cached table.

### Example

```ts
import {
  Configuration,
  IndexesApi,
} from '@hotdata/sdk';
import type { CreateIndexOperationRequest } from '@hotdata/sdk';

async function example() {
  console.log("🚀 Testing @hotdata/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IndexesApi(config);

  const body = {
    // string | Connection identifier
    connectionId: connectionId_example,
    // string | Schema name
    schema: schema_example,
    // string | Table name
    table: table_example,
    // CreateIndexRequest
    createIndexRequest: ...,
  } satisfies CreateIndexOperationRequest;

  try {
    const data = await api.createIndex(body);
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
| **connectionId** | `string` | Connection identifier | [Defaults to `undefined`] |
| **schema** | `string` | Schema name | [Defaults to `undefined`] |
| **table** | `string` | Table name | [Defaults to `undefined`] |
| **createIndexRequest** | [CreateIndexRequest](CreateIndexRequest.md) |  | |

### Return type

[**IndexInfoResponse**](IndexInfoResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Index created |  -  |
| **400** | Invalid request |  -  |
| **404** | Table not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteIndex

> deleteIndex(connectionId, schema, table, indexName)

Delete an index

Delete a specific index from a cached table.

### Example

```ts
import {
  Configuration,
  IndexesApi,
} from '@hotdata/sdk';
import type { DeleteIndexRequest } from '@hotdata/sdk';

async function example() {
  console.log("🚀 Testing @hotdata/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IndexesApi(config);

  const body = {
    // string | Connection identifier
    connectionId: connectionId_example,
    // string | Schema name
    schema: schema_example,
    // string | Table name
    table: table_example,
    // string | Index name
    indexName: indexName_example,
  } satisfies DeleteIndexRequest;

  try {
    const data = await api.deleteIndex(body);
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
| **connectionId** | `string` | Connection identifier | [Defaults to `undefined`] |
| **schema** | `string` | Schema name | [Defaults to `undefined`] |
| **table** | `string` | Table name | [Defaults to `undefined`] |
| **indexName** | `string` | Index name | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Index deleted |  -  |
| **404** | Index not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listIndexes

> ListIndexesResponse listIndexes(connectionId, schema, table)

List indexes on a table

List all indexes created on a cached table.

### Example

```ts
import {
  Configuration,
  IndexesApi,
} from '@hotdata/sdk';
import type { ListIndexesRequest } from '@hotdata/sdk';

async function example() {
  console.log("🚀 Testing @hotdata/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IndexesApi(config);

  const body = {
    // string | Connection identifier
    connectionId: connectionId_example,
    // string | Schema name
    schema: schema_example,
    // string | Table name
    table: table_example,
  } satisfies ListIndexesRequest;

  try {
    const data = await api.listIndexes(body);
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
| **connectionId** | `string` | Connection identifier | [Defaults to `undefined`] |
| **schema** | `string` | Schema name | [Defaults to `undefined`] |
| **table** | `string` | Table name | [Defaults to `undefined`] |

### Return type

[**ListIndexesResponse**](ListIndexesResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Indexes listed |  -  |
| **404** | Table not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

