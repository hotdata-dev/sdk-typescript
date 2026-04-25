# QueryApi

All URIs are relative to *https://api.hotdata.dev*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**query**](QueryApi.md#queryoperation) | **POST** /v1/query | Execute SQL query |



## query

> QueryResponse query(queryRequest)

Execute SQL query

Execute a SQL query against all registered connections and datasets. Use standard Postgres-compatible SQL to reference tables from any connection using the format &#x60;connection_name.schema.table&#x60;. Results are returned inline and a &#x60;result_id&#x60; is provided for later retrieval via the Results API.  Set &#x60;async: true&#x60; to execute asynchronously — returns a query run ID for polling. Optionally set &#x60;async_after_ms&#x60; to attempt synchronous execution first, falling back to async if the query exceeds the timeout.

### Example

```ts
import {
  Configuration,
  QueryApi,
} from '@hotdata/sdk';
import type { QueryOperationRequest } from '@hotdata/sdk';

async function example() {
  console.log("🚀 Testing @hotdata/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: WorkspaceId
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SessionId
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new QueryApi(config);

  const body = {
    // QueryRequest
    queryRequest: ...,
  } satisfies QueryOperationRequest;

  try {
    const data = await api.query(body);
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
| **queryRequest** | [QueryRequest](QueryRequest.md) |  | |

### Return type

[**QueryResponse**](QueryResponse.md)

### Authorization

[WorkspaceId](../README.md#WorkspaceId), [SessionId](../README.md#SessionId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Query executed successfully |  -  |
| **202** | Query submitted asynchronously |  -  |
| **400** | Invalid request |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

