# @hotdata/sdk@1.0.0

A TypeScript SDK client for the app.hotdata.dev API.

## Usage

First, install the SDK from npm.

```bash
npm install @hotdata/sdk --save
```

Next, try it out.


```ts
import {
  Configuration,
  ConnectionsApi,
} from '@hotdata/sdk';
import type { CheckConnectionHealthRequest } from '@hotdata/sdk';

async function example() {
  console.log("🚀 Testing @hotdata/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ConnectionsApi(config);

  const body = {
    // string | Connection ID
    connectionId: connectionId_example,
  } satisfies CheckConnectionHealthRequest;

  try {
    const data = await api.checkConnectionHealth(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```


## Documentation

### API Endpoints

All URIs are relative to *https://app.hotdata.dev*

| Class | Method | HTTP request | Description
| ----- | ------ | ------------ | -------------
*ConnectionsApi* | [**checkConnectionHealth**](docs/ConnectionsApi.md#checkconnectionhealth) | **GET** /v1/connections/{connection_id}/health | Check connection health
*ConnectionsApi* | [**createConnection**](docs/ConnectionsApi.md#createconnectionoperation) | **POST** /v1/connections | Create connection
*ConnectionsApi* | [**deleteConnection**](docs/ConnectionsApi.md#deleteconnection) | **DELETE** /v1/connections/{connection_id} | Delete connection
*ConnectionsApi* | [**getConnection**](docs/ConnectionsApi.md#getconnection) | **GET** /v1/connections/{connection_id} | Get connection
*ConnectionsApi* | [**getTableProfile**](docs/ConnectionsApi.md#gettableprofile) | **GET** /v1/connections/{connection_id}/tables/{schema}/{table}/profile | Get table profile
*ConnectionsApi* | [**listConnections**](docs/ConnectionsApi.md#listconnections) | **GET** /v1/connections | List connections
*ConnectionsApi* | [**purgeConnectionCache**](docs/ConnectionsApi.md#purgeconnectioncache) | **DELETE** /v1/connections/{connection_id}/cache | Purge connection cache
*ConnectionsApi* | [**purgeTableCache**](docs/ConnectionsApi.md#purgetablecache) | **DELETE** /v1/connections/{connection_id}/tables/{schema}/{table}/cache | Purge table cache
*DatasetsApi* | [**createDataset**](docs/DatasetsApi.md#createdatasetoperation) | **POST** /v1/datasets | Create dataset
*DatasetsApi* | [**deleteDataset**](docs/DatasetsApi.md#deletedataset) | **DELETE** /v1/datasets/{id} | Delete dataset
*DatasetsApi* | [**getDataset**](docs/DatasetsApi.md#getdataset) | **GET** /v1/datasets/{id} | Get dataset
*DatasetsApi* | [**listDatasets**](docs/DatasetsApi.md#listdatasets) | **GET** /v1/datasets | List datasets
*DatasetsApi* | [**updateDataset**](docs/DatasetsApi.md#updatedatasetoperation) | **PUT** /v1/datasets/{id} | Update dataset
*InformationSchemaApi* | [**informationSchema**](docs/InformationSchemaApi.md#informationschema) | **GET** /v1/information_schema | List tables
*QueryApi* | [**query**](docs/QueryApi.md#queryoperation) | **POST** /v1/query | Execute SQL query
*QueryRunsApi* | [**listQueryRuns**](docs/QueryRunsApi.md#listqueryruns) | **GET** /v1/query-runs | List query runs
*RefreshApi* | [**refresh**](docs/RefreshApi.md#refreshoperation) | **POST** /v1/refresh | Refresh connection data
*ResultsApi* | [**getResult**](docs/ResultsApi.md#getresult) | **GET** /v1/results/{id} | Get result
*ResultsApi* | [**listResults**](docs/ResultsApi.md#listresults) | **GET** /v1/results | List results
*SavedQueriesApi* | [**createSavedQuery**](docs/SavedQueriesApi.md#createsavedqueryoperation) | **POST** /v1/queries | Create saved query
*SavedQueriesApi* | [**deleteSavedQuery**](docs/SavedQueriesApi.md#deletesavedquery) | **DELETE** /v1/queries/{id} | Delete saved query
*SavedQueriesApi* | [**executeSavedQuery**](docs/SavedQueriesApi.md#executesavedqueryoperation) | **POST** /v1/queries/{id}/execute | Execute saved query
*SavedQueriesApi* | [**getSavedQuery**](docs/SavedQueriesApi.md#getsavedquery) | **GET** /v1/queries/{id} | Get saved query
*SavedQueriesApi* | [**listSavedQueries**](docs/SavedQueriesApi.md#listsavedqueries) | **GET** /v1/queries | List saved queries
*SavedQueriesApi* | [**listSavedQueryVersions**](docs/SavedQueriesApi.md#listsavedqueryversions) | **GET** /v1/queries/{id}/versions | List saved query versions
*SavedQueriesApi* | [**updateSavedQuery**](docs/SavedQueriesApi.md#updatesavedqueryoperation) | **PUT** /v1/queries/{id} | Update saved query
*SecretsApi* | [**createSecret**](docs/SecretsApi.md#createsecretoperation) | **POST** /v1/secrets | Create secret
*SecretsApi* | [**deleteSecret**](docs/SecretsApi.md#deletesecret) | **DELETE** /v1/secrets/{name} | Delete secret
*SecretsApi* | [**getSecret**](docs/SecretsApi.md#getsecret) | **GET** /v1/secrets/{name} | Get secret
*SecretsApi* | [**listSecrets**](docs/SecretsApi.md#listsecrets) | **GET** /v1/secrets | List secrets
*SecretsApi* | [**updateSecret**](docs/SecretsApi.md#updatesecretoperation) | **PUT** /v1/secrets/{name} | Update secret
*UploadsApi* | [**listUploads**](docs/UploadsApi.md#listuploads) | **GET** /v1/files | List uploads
*UploadsApi* | [**uploadFile**](docs/UploadsApi.md#uploadfile) | **POST** /v1/files | Upload file
*WorkspacesApi* | [**createWorkspace**](docs/WorkspacesApi.md#createworkspaceoperation) | **POST** /v1/workspaces | Create a workspace
*WorkspacesApi* | [**listWorkspaces**](docs/WorkspacesApi.md#listworkspaces) | **GET** /v1/workspaces | List workspaces


### Models

- [ApiErrorDetail](docs/ApiErrorDetail.md)
- [ApiErrorResponse](docs/ApiErrorResponse.md)
- [CategoryValueInfo](docs/CategoryValueInfo.md)
- [ColumnDefinition](docs/ColumnDefinition.md)
- [ColumnInfo](docs/ColumnInfo.md)
- [ColumnProfileDetail](docs/ColumnProfileDetail.md)
- [ColumnProfileDetailOneOf](docs/ColumnProfileDetailOneOf.md)
- [ColumnProfileDetailOneOf1](docs/ColumnProfileDetailOneOf1.md)
- [ColumnProfileDetailOneOf2](docs/ColumnProfileDetailOneOf2.md)
- [ColumnProfileDetailOneOf3](docs/ColumnProfileDetailOneOf3.md)
- [ColumnProfileDetailOneOf4](docs/ColumnProfileDetailOneOf4.md)
- [ColumnProfileInfo](docs/ColumnProfileInfo.md)
- [ColumnTypeSpec](docs/ColumnTypeSpec.md)
- [ConnectionHealthResponse](docs/ConnectionHealthResponse.md)
- [ConnectionInfo](docs/ConnectionInfo.md)
- [ConnectionRefreshResult](docs/ConnectionRefreshResult.md)
- [ConnectionSchemaError](docs/ConnectionSchemaError.md)
- [CreateConnectionRequest](docs/CreateConnectionRequest.md)
- [CreateConnectionResponse](docs/CreateConnectionResponse.md)
- [CreateDatasetRequest](docs/CreateDatasetRequest.md)
- [CreateDatasetResponse](docs/CreateDatasetResponse.md)
- [CreateSavedQueryRequest](docs/CreateSavedQueryRequest.md)
- [CreateSecretRequest](docs/CreateSecretRequest.md)
- [CreateSecretResponse](docs/CreateSecretResponse.md)
- [CreateWorkspaceRequest](docs/CreateWorkspaceRequest.md)
- [CreateWorkspaceResponse](docs/CreateWorkspaceResponse.md)
- [DatasetSource](docs/DatasetSource.md)
- [DatasetSourceOneOf](docs/DatasetSourceOneOf.md)
- [DatasetSourceOneOf1](docs/DatasetSourceOneOf1.md)
- [DatasetSummary](docs/DatasetSummary.md)
- [DiscoveryStatus](docs/DiscoveryStatus.md)
- [ExecuteSavedQueryRequest](docs/ExecuteSavedQueryRequest.md)
- [GetConnectionResponse](docs/GetConnectionResponse.md)
- [GetDatasetResponse](docs/GetDatasetResponse.md)
- [GetResultResponse](docs/GetResultResponse.md)
- [GetSecretResponse](docs/GetSecretResponse.md)
- [InformationSchemaResponse](docs/InformationSchemaResponse.md)
- [InlineData](docs/InlineData.md)
- [ListConnectionsResponse](docs/ListConnectionsResponse.md)
- [ListDatasetsResponse](docs/ListDatasetsResponse.md)
- [ListQueryRunsResponse](docs/ListQueryRunsResponse.md)
- [ListResultsResponse](docs/ListResultsResponse.md)
- [ListSavedQueriesResponse](docs/ListSavedQueriesResponse.md)
- [ListSavedQueryVersionsResponse](docs/ListSavedQueryVersionsResponse.md)
- [ListSecretsResponse](docs/ListSecretsResponse.md)
- [ListUploadsResponse](docs/ListUploadsResponse.md)
- [ListWorkspacesResponse](docs/ListWorkspacesResponse.md)
- [ModelError](docs/ModelError.md)
- [QueryRequest](docs/QueryRequest.md)
- [QueryResponse](docs/QueryResponse.md)
- [QueryRunInfo](docs/QueryRunInfo.md)
- [RefreshRequest](docs/RefreshRequest.md)
- [RefreshResponse](docs/RefreshResponse.md)
- [RefreshWarning](docs/RefreshWarning.md)
- [ResultInfo](docs/ResultInfo.md)
- [SavedQueryDetail](docs/SavedQueryDetail.md)
- [SavedQuerySummary](docs/SavedQuerySummary.md)
- [SavedQueryVersionInfo](docs/SavedQueryVersionInfo.md)
- [SchemaRefreshResult](docs/SchemaRefreshResult.md)
- [SecretMetadataResponse](docs/SecretMetadataResponse.md)
- [TableInfo](docs/TableInfo.md)
- [TableProfileResponse](docs/TableProfileResponse.md)
- [TableRefreshError](docs/TableRefreshError.md)
- [TableRefreshResult](docs/TableRefreshResult.md)
- [UpdateDatasetRequest](docs/UpdateDatasetRequest.md)
- [UpdateDatasetResponse](docs/UpdateDatasetResponse.md)
- [UpdateSavedQueryRequest](docs/UpdateSavedQueryRequest.md)
- [UpdateSecretRequest](docs/UpdateSecretRequest.md)
- [UpdateSecretResponse](docs/UpdateSecretResponse.md)
- [UploadInfo](docs/UploadInfo.md)
- [UploadResponse](docs/UploadResponse.md)
- [WorkspaceDetail](docs/WorkspaceDetail.md)
- [WorkspaceListItem](docs/WorkspaceListItem.md)

### Authorization


Authentication schemes defined for the API:
<a id="BearerAuth"></a>
#### BearerAuth


- **Type**: HTTP Bearer Token authentication
<a id="WorkspaceId"></a>
#### WorkspaceId


- **Type**: API key
- **API key parameter name**: `X-Workspace-Id`
- **Location**: HTTP header

## About

This TypeScript SDK client supports the [Fetch API](https://fetch.spec.whatwg.org/)
and is automatically generated by the
[OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `1.0.0`
- Package version: `1.0.0`
- Generator version: `7.20.0`
- Build package: `org.openapitools.codegen.languages.TypeScriptFetchClientCodegen`

The generated npm module supports the following:

- Environments
  * Node.js
  * Webpack
  * Browserify
- Language levels
  * ES5 - you must have a Promises/A+ library installed
  * ES6
- Module systems
  * CommonJS
  * ES6 module system


## Development

### Building

To build the TypeScript source code, you need to have Node.js and npm installed.
After cloning the repository, navigate to the project directory and run:

```bash
npm install
npm run build
```

### Publishing

Once you've built the package, you can publish it to npm:

```bash
npm publish
```

## License

[]()
