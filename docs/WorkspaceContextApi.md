# WorkspaceContextApi

All URIs are relative to *https://app.hotdata.dev*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getWorkspaceContext**](WorkspaceContextApi.md#getworkspacecontext) | **GET** /v1/context/{name} | Get one workspace context |
| [**listWorkspaceContexts**](WorkspaceContextApi.md#listworkspacecontexts) | **GET** /v1/context | List workspace contexts |
| [**upsertWorkspaceContext**](WorkspaceContextApi.md#upsertworkspacecontextoperation) | **POST** /v1/context | Create or update workspace context |



## getWorkspaceContext

> GetWorkspaceContextResponse getWorkspaceContext(name)

Get one workspace context

### Example

```ts
import {
  Configuration,
  WorkspaceContextApi,
} from '@hotdata/sdk';
import type { GetWorkspaceContextRequest } from '@hotdata/sdk';

async function example() {
  console.log("🚀 Testing @hotdata/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WorkspaceContextApi(config);

  const body = {
    // string | Name of the context (unique within the catalog)
    name: name_example,
  } satisfies GetWorkspaceContextRequest;

  try {
    const data = await api.getWorkspaceContext(body);
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
| **name** | `string` | Name of the context (unique within the catalog) | [Defaults to `undefined`] |

### Return type

[**GetWorkspaceContextResponse**](GetWorkspaceContextResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Context found |  -  |
| **400** | Invalid request |  -  |
| **404** | Context not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listWorkspaceContexts

> ListWorkspaceContextsResponse listWorkspaceContexts()

List workspace contexts

### Example

```ts
import {
  Configuration,
  WorkspaceContextApi,
} from '@hotdata/sdk';
import type { ListWorkspaceContextsRequest } from '@hotdata/sdk';

async function example() {
  console.log("🚀 Testing @hotdata/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WorkspaceContextApi(config);

  try {
    const data = await api.listWorkspaceContexts();
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

[**ListWorkspaceContextsResponse**](ListWorkspaceContextsResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Contexts |  -  |
| **400** | Invalid request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## upsertWorkspaceContext

> UpsertWorkspaceContextResponse upsertWorkspaceContext(upsertWorkspaceContextRequest)

Create or update workspace context

Stores a named document (for example Markdown). Reuses the same name to replace content. Scoped to the deployment catalog like other metadata (connections, secrets, etc.).

### Example

```ts
import {
  Configuration,
  WorkspaceContextApi,
} from '@hotdata/sdk';
import type { UpsertWorkspaceContextOperationRequest } from '@hotdata/sdk';

async function example() {
  console.log("🚀 Testing @hotdata/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WorkspaceContextApi(config);

  const body = {
    // UpsertWorkspaceContextRequest
    upsertWorkspaceContextRequest: ...,
  } satisfies UpsertWorkspaceContextOperationRequest;

  try {
    const data = await api.upsertWorkspaceContext(body);
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
| **upsertWorkspaceContextRequest** | [UpsertWorkspaceContextRequest](UpsertWorkspaceContextRequest.md) |  | |

### Return type

[**UpsertWorkspaceContextResponse**](UpsertWorkspaceContextResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Context saved |  -  |
| **400** | Invalid request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

