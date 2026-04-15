# InformationSchemaApi

All URIs are relative to *https://app.hotdata.dev*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**informationSchema**](InformationSchemaApi.md#informationschema) | **GET** /v1/information_schema | List tables |



## informationSchema

> InformationSchemaResponse informationSchema(connectionId, schema, table, includeColumns, limit, cursor)

List tables

List discovered tables with optional filtering and pagination. Supports wildcard patterns (SQL %) for schema and table name filters. Set include_columns&#x3D;true to include column definitions (omitted by default).

### Example

```ts
import {
  Configuration,
  InformationSchemaApi,
} from '@hotdata/sdk';
import type { InformationSchemaRequest } from '@hotdata/sdk';

async function example() {
  console.log("🚀 Testing @hotdata/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InformationSchemaApi(config);

  const body = {
    // string | Filter by connection ID (optional)
    connectionId: connectionId_example,
    // string | Filter by schema name (supports % wildcards) (optional)
    schema: schema_example,
    // string | Filter by table name (supports % wildcards) (optional)
    table: table_example,
    // boolean | Include column definitions (default: false) (optional)
    includeColumns: true,
    // number | Maximum number of tables per page (optional)
    limit: 56,
    // string | Pagination cursor from a previous response (optional)
    cursor: cursor_example,
  } satisfies InformationSchemaRequest;

  try {
    const data = await api.informationSchema(body);
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
| **connectionId** | `string` | Filter by connection ID | [Optional] [Defaults to `undefined`] |
| **schema** | `string` | Filter by schema name (supports % wildcards) | [Optional] [Defaults to `undefined`] |
| **table** | `string` | Filter by table name (supports % wildcards) | [Optional] [Defaults to `undefined`] |
| **includeColumns** | `boolean` | Include column definitions (default: false) | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of tables per page | [Optional] [Defaults to `undefined`] |
| **cursor** | `string` | Pagination cursor from a previous response | [Optional] [Defaults to `undefined`] |

### Return type

[**InformationSchemaResponse**](InformationSchemaResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Table metadata |  -  |
| **404** | Connection not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

