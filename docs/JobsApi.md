# JobsApi

All URIs are relative to *https://api.hotdata.dev*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getJob**](JobsApi.md#getjob) | **GET** /v1/jobs/{id} | Get job status |
| [**listJobs**](JobsApi.md#listjobs) | **GET** /v1/jobs | List jobs |



## getJob

> JobStatusResponse getJob(id)

Get job status

Get the current status of a background job. Poll this endpoint to track job progress.

### Example

```ts
import {
  Configuration,
  JobsApi,
} from '@hotdata/sdk';
import type { GetJobRequest } from '@hotdata/sdk';

async function example() {
  console.log("🚀 Testing @hotdata/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: WorkspaceId
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new JobsApi(config);

  const body = {
    // string | Job ID
    id: id_example,
  } satisfies GetJobRequest;

  try {
    const data = await api.getJob(body);
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
| **id** | `string` | Job ID | [Defaults to `undefined`] |

### Return type

[**JobStatusResponse**](JobStatusResponse.md)

### Authorization

[WorkspaceId](../README.md#WorkspaceId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Job status |  -  |
| **404** | Job not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listJobs

> ListJobsResponse listJobs(jobType, status, limit, offset)

List jobs

List background jobs with optional filters by type and status.

### Example

```ts
import {
  Configuration,
  JobsApi,
} from '@hotdata/sdk';
import type { ListJobsRequest } from '@hotdata/sdk';

async function example() {
  console.log("🚀 Testing @hotdata/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: WorkspaceId
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new JobsApi(config);

  const body = {
    // JobType | Filter by job type (optional)
    jobType: ...,
    // string | Filter by status (comma-separated, e.g. status=pending,running) (optional)
    status: status_example,
    // number | Max results (default 50) (optional)
    limit: 56,
    // number | Offset for pagination (optional)
    offset: 56,
  } satisfies ListJobsRequest;

  try {
    const data = await api.listJobs(body);
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
| **jobType** | `JobType` | Filter by job type | [Optional] [Defaults to `undefined`] [Enum: noop, data_refresh_table, data_refresh_connection, create_index] |
| **status** | `string` | Filter by status (comma-separated, e.g. status&#x3D;pending,running) | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Max results (default 50) | [Optional] [Defaults to `undefined`] |
| **offset** | `number` | Offset for pagination | [Optional] [Defaults to `undefined`] |

### Return type

[**ListJobsResponse**](ListJobsResponse.md)

### Authorization

[WorkspaceId](../README.md#WorkspaceId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of jobs |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

