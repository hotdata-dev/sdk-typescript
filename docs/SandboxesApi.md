# SandboxesApi

All URIs are relative to *https://api.hotdata.dev*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createSandbox**](SandboxesApi.md#createsandboxoperation) | **POST** /v1/sandboxes | Create a sandbox |
| [**deleteSandbox**](SandboxesApi.md#deletesandbox) | **DELETE** /v1/sandboxes/{public_id} | Delete sandbox |
| [**getSandbox**](SandboxesApi.md#getsandbox) | **GET** /v1/sandboxes/{public_id} | Get sandbox |
| [**listSandboxes**](SandboxesApi.md#listsandboxes) | **GET** /v1/sandboxes | List sandboxes |
| [**updateSandbox**](SandboxesApi.md#updatesandboxoperation) | **PATCH** /v1/sandboxes/{public_id} | Update sandbox |



## createSandbox

> SandboxResponse createSandbox(createSandboxRequest)

Create a sandbox

Creates a sandbox in the requested workspace. The returned &#x60;public_id&#x60; is the value to pass as &#x60;X-Session-Id&#x60; on scoped ops.

### Example

```ts
import {
  Configuration,
  SandboxesApi,
} from '@hotdata/sdk';
import type { CreateSandboxOperationRequest } from '@hotdata/sdk';

async function example() {
  console.log("🚀 Testing @hotdata/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: WorkspaceId
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SandboxesApi(config);

  const body = {
    // CreateSandboxRequest
    createSandboxRequest: ...,
  } satisfies CreateSandboxOperationRequest;

  try {
    const data = await api.createSandbox(body);
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
| **createSandboxRequest** | [CreateSandboxRequest](CreateSandboxRequest.md) |  | |

### Return type

[**SandboxResponse**](SandboxResponse.md)

### Authorization

[WorkspaceId](../README.md#WorkspaceId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Sandbox created |  -  |
| **400** | Invalid JSON body or missing X-Workspace-Id header |  -  |
| **401** | Missing or invalid authorization |  -  |
| **403** | Not a member of the target workspace\&#39;s organization |  -  |
| **404** | Workspace not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteSandbox

> DeleteSandboxResponse deleteSandbox(publicId)

Delete sandbox

### Example

```ts
import {
  Configuration,
  SandboxesApi,
} from '@hotdata/sdk';
import type { DeleteSandboxRequest } from '@hotdata/sdk';

async function example() {
  console.log("🚀 Testing @hotdata/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: WorkspaceId
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SandboxesApi(config);

  const body = {
    // string | Public id of the sandbox.
    publicId: publicId_example,
  } satisfies DeleteSandboxRequest;

  try {
    const data = await api.deleteSandbox(body);
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
| **publicId** | `string` | Public id of the sandbox. | [Defaults to `undefined`] |

### Return type

[**DeleteSandboxResponse**](DeleteSandboxResponse.md)

### Authorization

[WorkspaceId](../README.md#WorkspaceId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Sandbox deleted |  -  |
| **401** | Missing or invalid authorization |  -  |
| **403** | Not a member of the target workspace\&#39;s organization |  -  |
| **404** | Sandbox not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSandbox

> SandboxResponse getSandbox(publicId)

Get sandbox

### Example

```ts
import {
  Configuration,
  SandboxesApi,
} from '@hotdata/sdk';
import type { GetSandboxRequest } from '@hotdata/sdk';

async function example() {
  console.log("🚀 Testing @hotdata/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: WorkspaceId
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SandboxesApi(config);

  const body = {
    // string | Public id of the sandbox.
    publicId: publicId_example,
  } satisfies GetSandboxRequest;

  try {
    const data = await api.getSandbox(body);
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
| **publicId** | `string` | Public id of the sandbox. | [Defaults to `undefined`] |

### Return type

[**SandboxResponse**](SandboxResponse.md)

### Authorization

[WorkspaceId](../README.md#WorkspaceId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |
| **401** | Missing or invalid authorization |  -  |
| **403** | Not a member of the target workspace\&#39;s organization |  -  |
| **404** | Sandbox not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listSandboxes

> ListSandboxesResponse listSandboxes()

List sandboxes

Lists sandboxes for the caller in the requested workspace.

### Example

```ts
import {
  Configuration,
  SandboxesApi,
} from '@hotdata/sdk';
import type { ListSandboxesRequest } from '@hotdata/sdk';

async function example() {
  console.log("🚀 Testing @hotdata/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: WorkspaceId
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SandboxesApi(config);

  try {
    const data = await api.listSandboxes();
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

[**ListSandboxesResponse**](ListSandboxesResponse.md)

### Authorization

[WorkspaceId](../README.md#WorkspaceId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |
| **400** | Missing or invalid X-Workspace-Id header |  -  |
| **401** | Missing or invalid authorization |  -  |
| **403** | Not a member of the target workspace\&#39;s organization |  -  |
| **404** | Workspace not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateSandbox

> SandboxResponse updateSandbox(publicId, updateSandboxRequest)

Update sandbox

Partial update. Only the provided fields are changed.

### Example

```ts
import {
  Configuration,
  SandboxesApi,
} from '@hotdata/sdk';
import type { UpdateSandboxOperationRequest } from '@hotdata/sdk';

async function example() {
  console.log("🚀 Testing @hotdata/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: WorkspaceId
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SandboxesApi(config);

  const body = {
    // string | Public id of the sandbox.
    publicId: publicId_example,
    // UpdateSandboxRequest
    updateSandboxRequest: ...,
  } satisfies UpdateSandboxOperationRequest;

  try {
    const data = await api.updateSandbox(body);
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
| **publicId** | `string` | Public id of the sandbox. | [Defaults to `undefined`] |
| **updateSandboxRequest** | [UpdateSandboxRequest](UpdateSandboxRequest.md) |  | |

### Return type

[**SandboxResponse**](SandboxResponse.md)

### Authorization

[WorkspaceId](../README.md#WorkspaceId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Sandbox updated |  -  |
| **400** | Invalid JSON body |  -  |
| **401** | Missing or invalid authorization |  -  |
| **403** | Not a member of the target workspace\&#39;s organization |  -  |
| **404** | Sandbox not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

