# RefreshApi

All URIs are relative to *https://api.hotdata.dev*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**refresh**](RefreshApi.md#refreshoperation) | **POST** /v1/refresh | Refresh connection data |



## refresh

> RefreshResponse refresh(refreshRequest)

Refresh connection data

Refresh schema metadata or table data. The behavior depends on the request fields:  - **Schema refresh (all)**: omit all fields — re-discovers tables for every connection. - **Schema refresh (single)**: set &#x60;connection_id&#x60; — re-discovers tables for one connection. - **Data refresh (single table)**: set &#x60;connection_id&#x60;, &#x60;schema_name&#x60;, &#x60;table_name&#x60;, and &#x60;data: true&#x60;. - **Data refresh (connection)**: set &#x60;connection_id&#x60; and &#x60;data: true&#x60; — refreshes all cached tables. Set &#x60;include_uncached: true&#x60; to also sync tables that haven\&#39;t been cached yet.  Set &#x60;async: true&#x60; on data refresh operations to run in the background and return a job ID for polling.

### Example

```ts
import {
  Configuration,
  RefreshApi,
} from '@hotdata/sdk';
import type { RefreshOperationRequest } from '@hotdata/sdk';

async function example() {
  console.log("🚀 Testing @hotdata/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: WorkspaceId
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RefreshApi(config);

  const body = {
    // RefreshRequest
    refreshRequest: ...,
  } satisfies RefreshOperationRequest;

  try {
    const data = await api.refresh(body);
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
| **refreshRequest** | [RefreshRequest](RefreshRequest.md) |  | |

### Return type

[**RefreshResponse**](RefreshResponse.md)

### Authorization

[WorkspaceId](../README.md#WorkspaceId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Refresh completed |  -  |
| **400** | Invalid request |  -  |
| **404** | Connection not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

