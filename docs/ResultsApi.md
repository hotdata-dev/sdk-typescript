# ResultsApi

All URIs are relative to *https://app.hotdata.dev*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getResult**](ResultsApi.md#getresult) | **GET** /v1/results/{id} | Get result |
| [**listResults**](ResultsApi.md#listresults) | **GET** /v1/results | List results |



## getResult

> GetResultResponse getResult(id)

Get result

Retrieve a persisted query result by ID. If the result is still being processed, only the status is returned. Once ready, the full column and row data is included in the response.

### Example

```ts
import {
  Configuration,
  ResultsApi,
} from '@hotdata/sdk';
import type { GetResultRequest } from '@hotdata/sdk';

async function example() {
  console.log("🚀 Testing @hotdata/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ResultsApi(config);

  const body = {
    // string | Result ID
    id: id_example,
  } satisfies GetResultRequest;

  try {
    const data = await api.getResult(body);
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
| **id** | `string` | Result ID | [Defaults to `undefined`] |

### Return type

[**GetResultResponse**](GetResultResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Result data |  -  |
| **404** | Result not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listResults

> ListResultsResponse listResults(limit, offset)

List results

### Example

```ts
import {
  Configuration,
  ResultsApi,
} from '@hotdata/sdk';
import type { ListResultsRequest } from '@hotdata/sdk';

async function example() {
  console.log("🚀 Testing @hotdata/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ResultsApi(config);

  const body = {
    // number | Maximum number of results (default: 100, max: 1000) (optional)
    limit: 56,
    // number | Pagination offset (default: 0) (optional)
    offset: 56,
  } satisfies ListResultsRequest;

  try {
    const data = await api.listResults(body);
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
| **limit** | `number` | Maximum number of results (default: 100, max: 1000) | [Optional] [Defaults to `undefined`] |
| **offset** | `number` | Pagination offset (default: 0) | [Optional] [Defaults to `undefined`] |

### Return type

[**ListResultsResponse**](ListResultsResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of results |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

