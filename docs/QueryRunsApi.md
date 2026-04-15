# QueryRunsApi

All URIs are relative to *https://app.hotdata.dev*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getQueryRun**](QueryRunsApi.md#getqueryrun) | **GET** /v1/query-runs/{id} | Get query run |
| [**listQueryRuns**](QueryRunsApi.md#listqueryruns) | **GET** /v1/query-runs | List query runs |



## getQueryRun

> QueryRunInfo getQueryRun(id)

Get query run

Get the status and details of a specific query run by ID.

### Example

```ts
import {
  Configuration,
  QueryRunsApi,
} from '@hotdata/sdk';
import type { GetQueryRunRequest } from '@hotdata/sdk';

async function example() {
  console.log("🚀 Testing @hotdata/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new QueryRunsApi(config);

  const body = {
    // string | Query run ID
    id: id_example,
  } satisfies GetQueryRunRequest;

  try {
    const data = await api.getQueryRun(body);
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
| **id** | `string` | Query run ID | [Defaults to `undefined`] |

### Return type

[**QueryRunInfo**](QueryRunInfo.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Query run details |  -  |
| **404** | Query run not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listQueryRuns

> ListQueryRunsResponse listQueryRuns(limit, cursor, status, savedQueryId)

List query runs

### Example

```ts
import {
  Configuration,
  QueryRunsApi,
} from '@hotdata/sdk';
import type { ListQueryRunsRequest } from '@hotdata/sdk';

async function example() {
  console.log("🚀 Testing @hotdata/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new QueryRunsApi(config);

  const body = {
    // number | Maximum number of results (optional)
    limit: 56,
    // string | Pagination cursor (optional)
    cursor: cursor_example,
    // string | Filter by status (comma-separated, e.g. status=running,failed) (optional)
    status: status_example,
    // string | Filter by saved query ID (optional)
    savedQueryId: savedQueryId_example,
  } satisfies ListQueryRunsRequest;

  try {
    const data = await api.listQueryRuns(body);
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
| **cursor** | `string` | Pagination cursor | [Optional] [Defaults to `undefined`] |
| **status** | `string` | Filter by status (comma-separated, e.g. status&#x3D;running,failed) | [Optional] [Defaults to `undefined`] |
| **savedQueryId** | `string` | Filter by saved query ID | [Optional] [Defaults to `undefined`] |

### Return type

[**ListQueryRunsResponse**](ListQueryRunsResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of query runs |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

