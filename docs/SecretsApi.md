# SecretsApi

All URIs are relative to *https://app.hotdata.dev*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createSecret**](SecretsApi.md#createsecretoperation) | **POST** /v1/secrets | Create secret |
| [**deleteSecret**](SecretsApi.md#deletesecret) | **DELETE** /v1/secrets/{name} | Delete secret |
| [**getSecret**](SecretsApi.md#getsecret) | **GET** /v1/secrets/{name} | Get secret |
| [**listSecrets**](SecretsApi.md#listsecrets) | **GET** /v1/secrets | List secrets |
| [**updateSecret**](SecretsApi.md#updatesecretoperation) | **PUT** /v1/secrets/{name} | Update secret |



## createSecret

> CreateSecretResponse createSecret(createSecretRequest)

Create secret

Store a new named secret. The value is encrypted at rest and can be referenced by connections for authentication. Secret names must be unique.

### Example

```ts
import {
  Configuration,
  SecretsApi,
} from '@hotdata/sdk';
import type { CreateSecretOperationRequest } from '@hotdata/sdk';

async function example() {
  console.log("🚀 Testing @hotdata/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SecretsApi(config);

  const body = {
    // CreateSecretRequest
    createSecretRequest: ...,
  } satisfies CreateSecretOperationRequest;

  try {
    const data = await api.createSecret(body);
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
| **createSecretRequest** | [CreateSecretRequest](CreateSecretRequest.md) |  | |

### Return type

[**CreateSecretResponse**](CreateSecretResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Secret created |  -  |
| **409** | Secret already exists |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteSecret

> deleteSecret(name)

Delete secret

### Example

```ts
import {
  Configuration,
  SecretsApi,
} from '@hotdata/sdk';
import type { DeleteSecretRequest } from '@hotdata/sdk';

async function example() {
  console.log("🚀 Testing @hotdata/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SecretsApi(config);

  const body = {
    // string | Secret name
    name: name_example,
  } satisfies DeleteSecretRequest;

  try {
    const data = await api.deleteSecret(body);
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
| **name** | `string` | Secret name | [Defaults to `undefined`] |

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
| **204** | Secret deleted |  -  |
| **404** | Secret not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSecret

> GetSecretResponse getSecret(name)

Get secret

Get metadata for a secret. The secret value is never returned.

### Example

```ts
import {
  Configuration,
  SecretsApi,
} from '@hotdata/sdk';
import type { GetSecretRequest } from '@hotdata/sdk';

async function example() {
  console.log("🚀 Testing @hotdata/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SecretsApi(config);

  const body = {
    // string | Secret name
    name: name_example,
  } satisfies GetSecretRequest;

  try {
    const data = await api.getSecret(body);
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
| **name** | `string` | Secret name | [Defaults to `undefined`] |

### Return type

[**GetSecretResponse**](GetSecretResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Secret metadata |  -  |
| **404** | Secret not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listSecrets

> ListSecretsResponse listSecrets()

List secrets

List all stored secrets. Only metadata (name, timestamps) is returned — secret values are never exposed.

### Example

```ts
import {
  Configuration,
  SecretsApi,
} from '@hotdata/sdk';
import type { ListSecretsRequest } from '@hotdata/sdk';

async function example() {
  console.log("🚀 Testing @hotdata/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SecretsApi(config);

  try {
    const data = await api.listSecrets();
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

[**ListSecretsResponse**](ListSecretsResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of secrets |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateSecret

> UpdateSecretResponse updateSecret(name, updateSecretRequest)

Update secret

### Example

```ts
import {
  Configuration,
  SecretsApi,
} from '@hotdata/sdk';
import type { UpdateSecretOperationRequest } from '@hotdata/sdk';

async function example() {
  console.log("🚀 Testing @hotdata/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SecretsApi(config);

  const body = {
    // string | Secret name
    name: name_example,
    // UpdateSecretRequest
    updateSecretRequest: ...,
  } satisfies UpdateSecretOperationRequest;

  try {
    const data = await api.updateSecret(body);
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
| **name** | `string` | Secret name | [Defaults to `undefined`] |
| **updateSecretRequest** | [UpdateSecretRequest](UpdateSecretRequest.md) |  | |

### Return type

[**UpdateSecretResponse**](UpdateSecretResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Secret updated |  -  |
| **404** | Secret not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

