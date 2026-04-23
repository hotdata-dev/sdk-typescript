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
  ConnectionTypesApi,
} from '@hotdata/sdk';
import type { GetConnectionTypeRequest } from '@hotdata/sdk';

async function example() {
  console.log("🚀 Testing @hotdata/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ConnectionTypesApi(config);

  const body = {
    // string | Connection type name (e.g. postgres, mysql, snowflake)
    name: name_example,
  } satisfies GetConnectionTypeRequest;

  try {
    const data = await api.getConnectionType(body);
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
*ConnectionTypesApi* | [**getConnectionType**](docs/ConnectionTypesApi.md#getconnectiontype) | **GET** /v1/connection-types/{name} | Get connection type details
*ConnectionTypesApi* | [**listConnectionTypes**](docs/ConnectionTypesApi.md#listconnectiontypes) | **GET** /v1/connection-types | List connection types
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
*DatasetsApi* | [**listDatasetVersions**](docs/DatasetsApi.md#listdatasetversions) | **GET** /v1/datasets/{id}/versions | List dataset versions
*DatasetsApi* | [**listDatasets**](docs/DatasetsApi.md#listdatasets) | **GET** /v1/datasets | List datasets
*DatasetsApi* | [**updateDataset**](docs/DatasetsApi.md#updatedatasetoperation) | **PUT** /v1/datasets/{id} | Update dataset
*EmbeddingProvidersApi* | [**createEmbeddingProvider**](docs/EmbeddingProvidersApi.md#createembeddingprovideroperation) | **POST** /v1/embedding-providers | Create embedding provider
*EmbeddingProvidersApi* | [**deleteEmbeddingProvider**](docs/EmbeddingProvidersApi.md#deleteembeddingprovider) | **DELETE** /v1/embedding-providers/{id} | Delete embedding provider
*EmbeddingProvidersApi* | [**getEmbeddingProvider**](docs/EmbeddingProvidersApi.md#getembeddingprovider) | **GET** /v1/embedding-providers/{id} | Get embedding provider
*EmbeddingProvidersApi* | [**listEmbeddingProviders**](docs/EmbeddingProvidersApi.md#listembeddingproviders) | **GET** /v1/embedding-providers | List embedding providers
*EmbeddingProvidersApi* | [**updateEmbeddingProvider**](docs/EmbeddingProvidersApi.md#updateembeddingprovideroperation) | **PUT** /v1/embedding-providers/{id} | Update embedding provider
*IndexesApi* | [**createIndex**](docs/IndexesApi.md#createindexoperation) | **POST** /v1/connections/{connection_id}/tables/{schema}/{table}/indexes | Create an index on a table
*IndexesApi* | [**deleteIndex**](docs/IndexesApi.md#deleteindex) | **DELETE** /v1/connections/{connection_id}/tables/{schema}/{table}/indexes/{index_name} | Delete an index
*IndexesApi* | [**listIndexes**](docs/IndexesApi.md#listindexes) | **GET** /v1/connections/{connection_id}/tables/{schema}/{table}/indexes | List indexes on a table
*InformationSchemaApi* | [**informationSchema**](docs/InformationSchemaApi.md#informationschema) | **GET** /v1/information_schema | List tables
*JobsApi* | [**getJob**](docs/JobsApi.md#getjob) | **GET** /v1/jobs/{id} | Get job status
*JobsApi* | [**listJobs**](docs/JobsApi.md#listjobs) | **GET** /v1/jobs | List jobs
*QueryApi* | [**query**](docs/QueryApi.md#queryoperation) | **POST** /v1/query | Execute SQL query
*QueryRunsApi* | [**getQueryRun**](docs/QueryRunsApi.md#getqueryrun) | **GET** /v1/query-runs/{id} | Get query run
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
*WorkspaceContextApi* | [**getWorkspaceContext**](docs/WorkspaceContextApi.md#getworkspacecontext) | **GET** /v1/context/{name} | Get one workspace context
*WorkspaceContextApi* | [**listWorkspaceContexts**](docs/WorkspaceContextApi.md#listworkspacecontexts) | **GET** /v1/context | List workspace contexts
*WorkspaceContextApi* | [**upsertWorkspaceContext**](docs/WorkspaceContextApi.md#upsertworkspacecontextoperation) | **POST** /v1/context | Create or update workspace context
*WorkspacesApi* | [**createWorkspace**](docs/WorkspacesApi.md#createworkspaceoperation) | **POST** /v1/workspaces | Create a workspace
*WorkspacesApi* | [**listWorkspaces**](docs/WorkspacesApi.md#listworkspaces) | **GET** /v1/workspaces | List workspaces


### Models

- [ApiErrorDetail](docs/ApiErrorDetail.md)
- [ApiErrorResponse](docs/ApiErrorResponse.md)
- [AsyncQueryResponse](docs/AsyncQueryResponse.md)
- [BooleanProfileDetail](docs/BooleanProfileDetail.md)
- [CategoricalProfileDetail](docs/CategoricalProfileDetail.md)
- [CategoryValueInfo](docs/CategoryValueInfo.md)
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
- [ConnectionTypeDetail](docs/ConnectionTypeDetail.md)
- [ConnectionTypeSummary](docs/ConnectionTypeSummary.md)
- [CreateConnectionRequest](docs/CreateConnectionRequest.md)
- [CreateConnectionResponse](docs/CreateConnectionResponse.md)
- [CreateDatasetRequest](docs/CreateDatasetRequest.md)
- [CreateDatasetResponse](docs/CreateDatasetResponse.md)
- [CreateEmbeddingProviderRequest](docs/CreateEmbeddingProviderRequest.md)
- [CreateEmbeddingProviderResponse](docs/CreateEmbeddingProviderResponse.md)
- [CreateIndexRequest](docs/CreateIndexRequest.md)
- [CreateSavedQueryRequest](docs/CreateSavedQueryRequest.md)
- [CreateSecretRequest](docs/CreateSecretRequest.md)
- [CreateSecretResponse](docs/CreateSecretResponse.md)
- [CreateWorkspaceRequest](docs/CreateWorkspaceRequest.md)
- [CreateWorkspaceResponse](docs/CreateWorkspaceResponse.md)
- [DatasetSource](docs/DatasetSource.md)
- [DatasetSummary](docs/DatasetSummary.md)
- [DatasetVersionSummary](docs/DatasetVersionSummary.md)
- [DiscoveryStatus](docs/DiscoveryStatus.md)
- [EmbeddingProviderResponse](docs/EmbeddingProviderResponse.md)
- [ExecuteSavedQueryRequest](docs/ExecuteSavedQueryRequest.md)
- [GetConnectionResponse](docs/GetConnectionResponse.md)
- [GetDatasetResponse](docs/GetDatasetResponse.md)
- [GetResultResponse](docs/GetResultResponse.md)
- [GetSecretResponse](docs/GetSecretResponse.md)
- [GetWorkspaceContextResponse](docs/GetWorkspaceContextResponse.md)
- [IndexInfoResponse](docs/IndexInfoResponse.md)
- [IndexStatus](docs/IndexStatus.md)
- [InformationSchemaResponse](docs/InformationSchemaResponse.md)
- [InlineData](docs/InlineData.md)
- [InlineDatasetSource](docs/InlineDatasetSource.md)
- [JobResult](docs/JobResult.md)
- [JobStatus](docs/JobStatus.md)
- [JobStatusResponse](docs/JobStatusResponse.md)
- [JobType](docs/JobType.md)
- [ListConnectionTypesResponse](docs/ListConnectionTypesResponse.md)
- [ListConnectionsResponse](docs/ListConnectionsResponse.md)
- [ListDatasetVersionsResponse](docs/ListDatasetVersionsResponse.md)
- [ListDatasetsResponse](docs/ListDatasetsResponse.md)
- [ListEmbeddingProvidersResponse](docs/ListEmbeddingProvidersResponse.md)
- [ListIndexesResponse](docs/ListIndexesResponse.md)
- [ListJobsResponse](docs/ListJobsResponse.md)
- [ListQueryRunsResponse](docs/ListQueryRunsResponse.md)
- [ListResultsResponse](docs/ListResultsResponse.md)
- [ListSavedQueriesResponse](docs/ListSavedQueriesResponse.md)
- [ListSavedQueryVersionsResponse](docs/ListSavedQueryVersionsResponse.md)
- [ListSecretsResponse](docs/ListSecretsResponse.md)
- [ListUploadsResponse](docs/ListUploadsResponse.md)
- [ListWorkspaceContextsResponse](docs/ListWorkspaceContextsResponse.md)
- [ListWorkspacesResponse](docs/ListWorkspacesResponse.md)
- [ModelError](docs/ModelError.md)
- [NumericProfileDetail](docs/NumericProfileDetail.md)
- [QueryRequest](docs/QueryRequest.md)
- [QueryResponse](docs/QueryResponse.md)
- [QueryRunInfo](docs/QueryRunInfo.md)
- [RefreshDatasetResponse](docs/RefreshDatasetResponse.md)
- [RefreshRequest](docs/RefreshRequest.md)
- [RefreshResponse](docs/RefreshResponse.md)
- [RefreshWarning](docs/RefreshWarning.md)
- [ResultInfo](docs/ResultInfo.md)
- [SavedQueryDatasetSource](docs/SavedQueryDatasetSource.md)
- [SavedQueryDetail](docs/SavedQueryDetail.md)
- [SavedQuerySummary](docs/SavedQuerySummary.md)
- [SavedQueryVersionInfo](docs/SavedQueryVersionInfo.md)
- [SchemaRefreshResult](docs/SchemaRefreshResult.md)
- [SecretMetadataResponse](docs/SecretMetadataResponse.md)
- [SqlQueryDatasetSource](docs/SqlQueryDatasetSource.md)
- [SubmitJobResponse](docs/SubmitJobResponse.md)
- [TableInfo](docs/TableInfo.md)
- [TableProfileResponse](docs/TableProfileResponse.md)
- [TableRefreshError](docs/TableRefreshError.md)
- [TableRefreshResult](docs/TableRefreshResult.md)
- [TemporalProfileDetail](docs/TemporalProfileDetail.md)
- [TextProfileDetail](docs/TextProfileDetail.md)
- [UpdateDatasetRequest](docs/UpdateDatasetRequest.md)
- [UpdateDatasetResponse](docs/UpdateDatasetResponse.md)
- [UpdateEmbeddingProviderRequest](docs/UpdateEmbeddingProviderRequest.md)
- [UpdateEmbeddingProviderResponse](docs/UpdateEmbeddingProviderResponse.md)
- [UpdateSavedQueryRequest](docs/UpdateSavedQueryRequest.md)
- [UpdateSecretRequest](docs/UpdateSecretRequest.md)
- [UpdateSecretResponse](docs/UpdateSecretResponse.md)
- [UploadDatasetSource](docs/UploadDatasetSource.md)
- [UploadInfo](docs/UploadInfo.md)
- [UploadResponse](docs/UploadResponse.md)
- [UpsertWorkspaceContextRequest](docs/UpsertWorkspaceContextRequest.md)
- [UpsertWorkspaceContextResponse](docs/UpsertWorkspaceContextResponse.md)
- [UrlDatasetSource](docs/UrlDatasetSource.md)
- [WorkspaceContextEntry](docs/WorkspaceContextEntry.md)
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
- Generator version: `7.21.0`
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

[MIT]()
