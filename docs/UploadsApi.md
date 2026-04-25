# UploadsApi

All URIs are relative to *https://api.hotdata.dev*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**listUploads**](UploadsApi.md#listuploads) | **GET** /v1/files | List uploads |
| [**uploadFile**](UploadsApi.md#uploadfile) | **POST** /v1/files | Upload file |



## listUploads

> ListUploadsResponse listUploads(status)

List uploads

### Example

```ts
import {
  Configuration,
  UploadsApi,
} from '@hotdata/sdk';
import type { ListUploadsRequest } from '@hotdata/sdk';

async function example() {
  console.log("🚀 Testing @hotdata/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: WorkspaceId
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UploadsApi(config);

  const body = {
    // string | Filter by upload status (optional)
    status: status_example,
  } satisfies ListUploadsRequest;

  try {
    const data = await api.listUploads(body);
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
| **status** | `string` | Filter by upload status | [Optional] [Defaults to `undefined`] |

### Return type

[**ListUploadsResponse**](ListUploadsResponse.md)

### Authorization

[WorkspaceId](../README.md#WorkspaceId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of uploads |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## uploadFile

> UploadResponse uploadFile(body, streaming)

Upload file

Upload a file to be used as a dataset source. Send the raw file bytes as the request body with an appropriate Content-Type header (e.g., &#x60;text/csv&#x60;, &#x60;application/json&#x60;, &#x60;application/parquet&#x60;). The returned upload ID can be passed to POST /v1/datasets to create a queryable table. Add &#x60;?streaming&#x3D;true&#x60; for large files (up to 20GB) — streams to disk instead of loading into memory.

### Example

```ts
import {
  Configuration,
  UploadsApi,
} from '@hotdata/sdk';
import type { UploadFileRequest } from '@hotdata/sdk';

async function example() {
  console.log("🚀 Testing @hotdata/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: WorkspaceId
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UploadsApi(config);

  const body = {
    // Blob
    body: BINARY_DATA_HERE,
    // boolean | Stream upload to disk for large files (up to 20GB) (optional)
    streaming: true,
  } satisfies UploadFileRequest;

  try {
    const data = await api.uploadFile(body);
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
| **body** | `Blob` |  | |
| **streaming** | `boolean` | Stream upload to disk for large files (up to 20GB) | [Optional] [Defaults to `undefined`] |

### Return type

[**UploadResponse**](UploadResponse.md)

### Authorization

[WorkspaceId](../README.md#WorkspaceId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/octet-stream`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | File uploaded |  -  |
| **400** | Invalid request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

