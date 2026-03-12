# DatasetsApi

All URIs are relative to *https://app.hotdata.dev*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createDataset**](DatasetsApi.md#createdatasetoperation) | **POST** /v1/datasets | Create dataset |
| [**deleteDataset**](DatasetsApi.md#deletedataset) | **DELETE** /v1/datasets/{id} | Delete dataset |
| [**getDataset**](DatasetsApi.md#getdataset) | **GET** /v1/datasets/{id} | Get dataset |
| [**listDatasets**](DatasetsApi.md#listdatasets) | **GET** /v1/datasets | List datasets |
| [**updateDataset**](DatasetsApi.md#updatedatasetoperation) | **PUT** /v1/datasets/{id} | Update dataset |



## createDataset

> CreateDatasetResponse createDataset(createDatasetRequest)

Create dataset

Create a new dataset from an uploaded file or inline data. The dataset becomes a queryable table under the &#x60;datasets&#x60; schema (e.g., &#x60;SELECT * FROM datasets.my_table&#x60;). Supports CSV, JSON, and Parquet formats. Optionally specify explicit column types.

### Example

```ts
import {
  Configuration,
  DatasetsApi,
} from '@hotdata/sdk';
import type { CreateDatasetOperationRequest } from '@hotdata/sdk';

async function example() {
  console.log("🚀 Testing @hotdata/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DatasetsApi(config);

  const body = {
    // CreateDatasetRequest
    createDatasetRequest: ...,
  } satisfies CreateDatasetOperationRequest;

  try {
    const data = await api.createDataset(body);
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
| **createDatasetRequest** | [CreateDatasetRequest](CreateDatasetRequest.md) |  | |

### Return type

[**CreateDatasetResponse**](CreateDatasetResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Dataset created |  -  |
| **400** | Invalid request |  -  |
| **409** | Dataset already exists |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteDataset

> deleteDataset(id)

Delete dataset

### Example

```ts
import {
  Configuration,
  DatasetsApi,
} from '@hotdata/sdk';
import type { DeleteDatasetRequest } from '@hotdata/sdk';

async function example() {
  console.log("🚀 Testing @hotdata/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DatasetsApi(config);

  const body = {
    // string | Dataset ID
    id: id_example,
  } satisfies DeleteDatasetRequest;

  try {
    const data = await api.deleteDataset(body);
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
| **id** | `string` | Dataset ID | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Dataset deleted |  -  |
| **404** | Dataset not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDataset

> GetDatasetResponse getDataset(id)

Get dataset

### Example

```ts
import {
  Configuration,
  DatasetsApi,
} from '@hotdata/sdk';
import type { GetDatasetRequest } from '@hotdata/sdk';

async function example() {
  console.log("🚀 Testing @hotdata/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DatasetsApi(config);

  const body = {
    // string | Dataset ID
    id: id_example,
  } satisfies GetDatasetRequest;

  try {
    const data = await api.getDataset(body);
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
| **id** | `string` | Dataset ID | [Defaults to `undefined`] |

### Return type

[**GetDatasetResponse**](GetDatasetResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Dataset details |  -  |
| **404** | Dataset not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listDatasets

> ListDatasetsResponse listDatasets(limit, offset)

List datasets

### Example

```ts
import {
  Configuration,
  DatasetsApi,
} from '@hotdata/sdk';
import type { ListDatasetsRequest } from '@hotdata/sdk';

async function example() {
  console.log("🚀 Testing @hotdata/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DatasetsApi(config);

  const body = {
    // number | Maximum number of datasets (default: 100, max: 1000) (optional)
    limit: 56,
    // number | Pagination offset (default: 0) (optional)
    offset: 56,
  } satisfies ListDatasetsRequest;

  try {
    const data = await api.listDatasets(body);
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
| **limit** | `number` | Maximum number of datasets (default: 100, max: 1000) | [Optional] [Defaults to `undefined`] |
| **offset** | `number` | Pagination offset (default: 0) | [Optional] [Defaults to `undefined`] |

### Return type

[**ListDatasetsResponse**](ListDatasetsResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of datasets |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateDataset

> UpdateDatasetResponse updateDataset(id, updateDatasetRequest)

Update dataset

### Example

```ts
import {
  Configuration,
  DatasetsApi,
} from '@hotdata/sdk';
import type { UpdateDatasetOperationRequest } from '@hotdata/sdk';

async function example() {
  console.log("🚀 Testing @hotdata/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DatasetsApi(config);

  const body = {
    // string | Dataset ID
    id: id_example,
    // UpdateDatasetRequest
    updateDatasetRequest: ...,
  } satisfies UpdateDatasetOperationRequest;

  try {
    const data = await api.updateDataset(body);
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
| **id** | `string` | Dataset ID | [Defaults to `undefined`] |
| **updateDatasetRequest** | [UpdateDatasetRequest](UpdateDatasetRequest.md) |  | |

### Return type

[**UpdateDatasetResponse**](UpdateDatasetResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Dataset updated |  -  |
| **404** | Dataset not found |  -  |
| **409** | Conflict |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

