# SavedQueriesApi

All URIs are relative to *https://api.hotdata.dev*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createSavedQuery**](SavedQueriesApi.md#createsavedqueryoperation) | **POST** /v1/queries | Create saved query |
| [**deleteSavedQuery**](SavedQueriesApi.md#deletesavedquery) | **DELETE** /v1/queries/{id} | Delete saved query |
| [**executeSavedQuery**](SavedQueriesApi.md#executesavedqueryoperation) | **POST** /v1/queries/{id}/execute | Execute saved query |
| [**getSavedQuery**](SavedQueriesApi.md#getsavedquery) | **GET** /v1/queries/{id} | Get saved query |
| [**listSavedQueries**](SavedQueriesApi.md#listsavedqueries) | **GET** /v1/queries | List saved queries |
| [**listSavedQueryVersions**](SavedQueriesApi.md#listsavedqueryversions) | **GET** /v1/queries/{id}/versions | List saved query versions |
| [**updateSavedQuery**](SavedQueriesApi.md#updatesavedqueryoperation) | **PUT** /v1/queries/{id} | Update saved query |



## createSavedQuery

> SavedQueryDetail createSavedQuery(createSavedQueryRequest)

Create saved query

Save a named SQL query. The SQL is stored as version 1 and automatically analyzed for classification metadata (category, table count, predicate/join/aggregation flags).

### Example

```ts
import {
  Configuration,
  SavedQueriesApi,
} from '@hotdata/sdk';
import type { CreateSavedQueryOperationRequest } from '@hotdata/sdk';

async function example() {
  console.log("🚀 Testing @hotdata/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: WorkspaceId
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SavedQueriesApi(config);

  const body = {
    // CreateSavedQueryRequest
    createSavedQueryRequest: ...,
  } satisfies CreateSavedQueryOperationRequest;

  try {
    const data = await api.createSavedQuery(body);
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
| **createSavedQueryRequest** | [CreateSavedQueryRequest](CreateSavedQueryRequest.md) |  | |

### Return type

[**SavedQueryDetail**](SavedQueryDetail.md)

### Authorization

[WorkspaceId](../README.md#WorkspaceId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Saved query created |  -  |
| **400** | Invalid request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteSavedQuery

> deleteSavedQuery(id)

Delete saved query

### Example

```ts
import {
  Configuration,
  SavedQueriesApi,
} from '@hotdata/sdk';
import type { DeleteSavedQueryRequest } from '@hotdata/sdk';

async function example() {
  console.log("🚀 Testing @hotdata/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: WorkspaceId
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SavedQueriesApi(config);

  const body = {
    // string | Saved query ID
    id: id_example,
  } satisfies DeleteSavedQueryRequest;

  try {
    const data = await api.deleteSavedQuery(body);
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
| **id** | `string` | Saved query ID | [Defaults to `undefined`] |

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
| **204** | Saved query deleted |  -  |
| **404** | Saved query not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## executeSavedQuery

> QueryResponse executeSavedQuery(id, executeSavedQueryRequest)

Execute saved query

Execute a saved query. By default runs the latest version. Optionally specify a version number to execute a previous version. Returns the same response format as POST /v1/query.

### Example

```ts
import {
  Configuration,
  SavedQueriesApi,
} from '@hotdata/sdk';
import type { ExecuteSavedQueryOperationRequest } from '@hotdata/sdk';

async function example() {
  console.log("🚀 Testing @hotdata/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: WorkspaceId
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SavedQueriesApi(config);

  const body = {
    // string | Saved query ID
    id: id_example,
    // ExecuteSavedQueryRequest | Optional version to execute (optional)
    executeSavedQueryRequest: ...,
  } satisfies ExecuteSavedQueryOperationRequest;

  try {
    const data = await api.executeSavedQuery(body);
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
| **id** | `string` | Saved query ID | [Defaults to `undefined`] |
| **executeSavedQueryRequest** | [ExecuteSavedQueryRequest](ExecuteSavedQueryRequest.md) | Optional version to execute | [Optional] |

### Return type

[**QueryResponse**](QueryResponse.md)

### Authorization

[WorkspaceId](../README.md#WorkspaceId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Query executed |  -  |
| **404** | Saved query not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSavedQuery

> SavedQueryDetail getSavedQuery(id)

Get saved query

### Example

```ts
import {
  Configuration,
  SavedQueriesApi,
} from '@hotdata/sdk';
import type { GetSavedQueryRequest } from '@hotdata/sdk';

async function example() {
  console.log("🚀 Testing @hotdata/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: WorkspaceId
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SavedQueriesApi(config);

  const body = {
    // string | Saved query ID
    id: id_example,
  } satisfies GetSavedQueryRequest;

  try {
    const data = await api.getSavedQuery(body);
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
| **id** | `string` | Saved query ID | [Defaults to `undefined`] |

### Return type

[**SavedQueryDetail**](SavedQueryDetail.md)

### Authorization

[WorkspaceId](../README.md#WorkspaceId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Saved query details |  -  |
| **404** | Saved query not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listSavedQueries

> ListSavedQueriesResponse listSavedQueries(limit, offset)

List saved queries

### Example

```ts
import {
  Configuration,
  SavedQueriesApi,
} from '@hotdata/sdk';
import type { ListSavedQueriesRequest } from '@hotdata/sdk';

async function example() {
  console.log("🚀 Testing @hotdata/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: WorkspaceId
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SavedQueriesApi(config);

  const body = {
    // number | Maximum number of results (optional)
    limit: 56,
    // number | Pagination offset (optional)
    offset: 56,
  } satisfies ListSavedQueriesRequest;

  try {
    const data = await api.listSavedQueries(body);
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
| **limit** | `number` | Maximum number of results | [Optional] [Defaults to `undefined`] |
| **offset** | `number` | Pagination offset | [Optional] [Defaults to `undefined`] |

### Return type

[**ListSavedQueriesResponse**](ListSavedQueriesResponse.md)

### Authorization

[WorkspaceId](../README.md#WorkspaceId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of saved queries |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listSavedQueryVersions

> ListSavedQueryVersionsResponse listSavedQueryVersions(id, limit, offset)

List saved query versions

### Example

```ts
import {
  Configuration,
  SavedQueriesApi,
} from '@hotdata/sdk';
import type { ListSavedQueryVersionsRequest } from '@hotdata/sdk';

async function example() {
  console.log("🚀 Testing @hotdata/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: WorkspaceId
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SavedQueriesApi(config);

  const body = {
    // string | Saved query ID
    id: id_example,
    // number | Maximum number of versions (optional)
    limit: 56,
    // number | Pagination offset (optional)
    offset: 56,
  } satisfies ListSavedQueryVersionsRequest;

  try {
    const data = await api.listSavedQueryVersions(body);
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
| **id** | `string` | Saved query ID | [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of versions | [Optional] [Defaults to `undefined`] |
| **offset** | `number` | Pagination offset | [Optional] [Defaults to `undefined`] |

### Return type

[**ListSavedQueryVersionsResponse**](ListSavedQueryVersionsResponse.md)

### Authorization

[WorkspaceId](../README.md#WorkspaceId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of versions |  -  |
| **404** | Saved query not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateSavedQuery

> SavedQueryDetail updateSavedQuery(id, updateSavedQueryRequest)

Update saved query

Update a saved query. If the SQL changes, a new version is created (previous versions are preserved). Name, tags, description, and classification overrides can also be updated.

### Example

```ts
import {
  Configuration,
  SavedQueriesApi,
} from '@hotdata/sdk';
import type { UpdateSavedQueryOperationRequest } from '@hotdata/sdk';

async function example() {
  console.log("🚀 Testing @hotdata/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: WorkspaceId
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SavedQueriesApi(config);

  const body = {
    // string | Saved query ID
    id: id_example,
    // UpdateSavedQueryRequest
    updateSavedQueryRequest: ...,
  } satisfies UpdateSavedQueryOperationRequest;

  try {
    const data = await api.updateSavedQuery(body);
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
| **id** | `string` | Saved query ID | [Defaults to `undefined`] |
| **updateSavedQueryRequest** | [UpdateSavedQueryRequest](UpdateSavedQueryRequest.md) |  | |

### Return type

[**SavedQueryDetail**](SavedQueryDetail.md)

### Authorization

[WorkspaceId](../README.md#WorkspaceId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Saved query updated |  -  |
| **400** | Invalid request |  -  |
| **404** | Saved query not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

