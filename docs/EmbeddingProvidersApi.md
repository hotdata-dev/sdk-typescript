# EmbeddingProvidersApi

All URIs are relative to *https://app.hotdata.dev*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createEmbeddingProvider**](EmbeddingProvidersApi.md#createembeddingprovideroperation) | **POST** /v1/embedding-providers | Create embedding provider |
| [**deleteEmbeddingProvider**](EmbeddingProvidersApi.md#deleteembeddingprovider) | **DELETE** /v1/embedding-providers/{id} | Delete embedding provider |
| [**getEmbeddingProvider**](EmbeddingProvidersApi.md#getembeddingprovider) | **GET** /v1/embedding-providers/{id} | Get embedding provider |
| [**listEmbeddingProviders**](EmbeddingProvidersApi.md#listembeddingproviders) | **GET** /v1/embedding-providers | List embedding providers |
| [**updateEmbeddingProvider**](EmbeddingProvidersApi.md#updateembeddingprovideroperation) | **PUT** /v1/embedding-providers/{id} | Update embedding provider |



## createEmbeddingProvider

> CreateEmbeddingProviderResponse createEmbeddingProvider(createEmbeddingProviderRequest)

Create embedding provider

Register a new embedding provider that can be used to generate vector embeddings for text columns. Providers can be service-based (e.g., OpenAI) or local.

### Example

```ts
import {
  Configuration,
  EmbeddingProvidersApi,
} from '@hotdata/sdk';
import type { CreateEmbeddingProviderOperationRequest } from '@hotdata/sdk';

async function example() {
  console.log("🚀 Testing @hotdata/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EmbeddingProvidersApi(config);

  const body = {
    // CreateEmbeddingProviderRequest
    createEmbeddingProviderRequest: ...,
  } satisfies CreateEmbeddingProviderOperationRequest;

  try {
    const data = await api.createEmbeddingProvider(body);
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
| **createEmbeddingProviderRequest** | [CreateEmbeddingProviderRequest](CreateEmbeddingProviderRequest.md) |  | |

### Return type

[**CreateEmbeddingProviderResponse**](CreateEmbeddingProviderResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Embedding provider created |  -  |
| **400** | Invalid request |  -  |
| **409** | Provider with this name already exists |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteEmbeddingProvider

> deleteEmbeddingProvider(id)

Delete embedding provider

### Example

```ts
import {
  Configuration,
  EmbeddingProvidersApi,
} from '@hotdata/sdk';
import type { DeleteEmbeddingProviderRequest } from '@hotdata/sdk';

async function example() {
  console.log("🚀 Testing @hotdata/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EmbeddingProvidersApi(config);

  const body = {
    // string | Embedding provider ID
    id: id_example,
  } satisfies DeleteEmbeddingProviderRequest;

  try {
    const data = await api.deleteEmbeddingProvider(body);
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
| **id** | `string` | Embedding provider ID | [Defaults to `undefined`] |

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
| **204** | Embedding provider deleted |  -  |
| **404** | Provider not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getEmbeddingProvider

> EmbeddingProviderResponse getEmbeddingProvider(id)

Get embedding provider

### Example

```ts
import {
  Configuration,
  EmbeddingProvidersApi,
} from '@hotdata/sdk';
import type { GetEmbeddingProviderRequest } from '@hotdata/sdk';

async function example() {
  console.log("🚀 Testing @hotdata/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EmbeddingProvidersApi(config);

  const body = {
    // string | Embedding provider ID
    id: id_example,
  } satisfies GetEmbeddingProviderRequest;

  try {
    const data = await api.getEmbeddingProvider(body);
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
| **id** | `string` | Embedding provider ID | [Defaults to `undefined`] |

### Return type

[**EmbeddingProviderResponse**](EmbeddingProviderResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Embedding provider details |  -  |
| **404** | Provider not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listEmbeddingProviders

> ListEmbeddingProvidersResponse listEmbeddingProviders()

List embedding providers

List all registered embedding providers.

### Example

```ts
import {
  Configuration,
  EmbeddingProvidersApi,
} from '@hotdata/sdk';
import type { ListEmbeddingProvidersRequest } from '@hotdata/sdk';

async function example() {
  console.log("🚀 Testing @hotdata/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EmbeddingProvidersApi(config);

  try {
    const data = await api.listEmbeddingProviders();
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

[**ListEmbeddingProvidersResponse**](ListEmbeddingProvidersResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of embedding providers |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateEmbeddingProvider

> UpdateEmbeddingProviderResponse updateEmbeddingProvider(id, updateEmbeddingProviderRequest)

Update embedding provider

### Example

```ts
import {
  Configuration,
  EmbeddingProvidersApi,
} from '@hotdata/sdk';
import type { UpdateEmbeddingProviderOperationRequest } from '@hotdata/sdk';

async function example() {
  console.log("🚀 Testing @hotdata/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EmbeddingProvidersApi(config);

  const body = {
    // string | Embedding provider ID
    id: id_example,
    // UpdateEmbeddingProviderRequest
    updateEmbeddingProviderRequest: ...,
  } satisfies UpdateEmbeddingProviderOperationRequest;

  try {
    const data = await api.updateEmbeddingProvider(body);
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
| **id** | `string` | Embedding provider ID | [Defaults to `undefined`] |
| **updateEmbeddingProviderRequest** | [UpdateEmbeddingProviderRequest](UpdateEmbeddingProviderRequest.md) |  | |

### Return type

[**UpdateEmbeddingProviderResponse**](UpdateEmbeddingProviderResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Embedding provider updated |  -  |
| **404** | Provider not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

