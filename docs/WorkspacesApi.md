# WorkspacesApi

All URIs are relative to *https://api.hotdata.dev*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createWorkspace**](WorkspacesApi.md#createworkspaceoperation) | **POST** /v1/workspaces | Create a workspace |
| [**listWorkspaces**](WorkspacesApi.md#listworkspaces) | **GET** /v1/workspaces | List workspaces |



## createWorkspace

> CreateWorkspaceResponse createWorkspace(createWorkspaceRequest)

Create a workspace

Creates a new workspace in the specified organization.

### Example

```ts
import {
  Configuration,
  WorkspacesApi,
} from '@hotdata/sdk';
import type { CreateWorkspaceOperationRequest } from '@hotdata/sdk';

async function example() {
  console.log("🚀 Testing @hotdata/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WorkspacesApi(config);

  const body = {
    // CreateWorkspaceRequest
    createWorkspaceRequest: ...,
  } satisfies CreateWorkspaceOperationRequest;

  try {
    const data = await api.createWorkspace(body);
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
| **createWorkspaceRequest** | [CreateWorkspaceRequest](CreateWorkspaceRequest.md) |  | |

### Return type

[**CreateWorkspaceResponse**](CreateWorkspaceResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Workspace created |  -  |
| **400** | Invalid JSON body |  -  |
| **401** | Missing or invalid authorization |  -  |
| **403** | Forbidden |  -  |
| **404** | Organization not found |  -  |
| **422** | Validation error (e.g. name required) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listWorkspaces

> ListWorkspacesResponse listWorkspaces(organizationPublicId)

List workspaces

Lists all workspaces in the user\&#39;s organization.

### Example

```ts
import {
  Configuration,
  WorkspacesApi,
} from '@hotdata/sdk';
import type { ListWorkspacesRequest } from '@hotdata/sdk';

async function example() {
  console.log("🚀 Testing @hotdata/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WorkspacesApi(config);

  const body = {
    // string | Filter by organization. Defaults to the user\'s current organization. (optional)
    organizationPublicId: organizationPublicId_example,
  } satisfies ListWorkspacesRequest;

  try {
    const data = await api.listWorkspaces(body);
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
| **organizationPublicId** | `string` | Filter by organization. Defaults to the user\&#39;s current organization. | [Optional] [Defaults to `undefined`] |

### Return type

[**ListWorkspacesResponse**](ListWorkspacesResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |
| **401** | Missing or invalid authorization |  -  |
| **403** | Forbidden — not a member of the organization or workspace token used |  -  |
| **404** | Organization not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

