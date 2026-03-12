# QueryRunsApi

All URIs are relative to *https://app.hotdata.dev*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**listQueryRuns**](QueryRunsApi.md#listqueryruns) | **GET** /v1/query-runs | List query runs |



## listQueryRuns

> ListQueryRunsResponse listQueryRuns(limit, cursor)

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

