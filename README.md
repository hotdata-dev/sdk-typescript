# @hotdata/sdk

Official TypeScript client for the [Hotdata](https://app.hotdata.dev) HTTP API: workspaces, connections, datasets, SQL queries, results, secrets, uploads, indexes, jobs, embedding providers, and workspace context.

The package is produced with [OpenAPI Generator](https://openapi-generator.tech) from the Hotdata OpenAPI spec. For the Python client, see [hotdata-dev/sdk-python](https://github.com/hotdata-dev/sdk-python).

## Requirements

A JavaScript runtime with a global **`fetch`** (for example Node.js 18+).

## Install

From npm (when published):

```sh
npm install @hotdata/sdk
```

From the GitHub repository:

```sh
npm install github:hotdata-dev/sdk-typescript
```

From a local checkout:

```sh
npm install
npm run build
```

## Authentication

The API uses **Bearer** JWTs and an **`X-Workspace-Id`** header on requests that are scoped to a workspace.

```ts
import { Configuration } from "@hotdata/sdk";

const configuration = new Configuration({
  accessToken: "YOUR_ACCESS_TOKEN",
  headers: {
    "X-Workspace-Id": "YOUR_WORKSPACE_ID",
  },
});
```

`basePath` defaults to `https://app.hotdata.dev`. Pass `basePath` in the configuration if you target another environment.

## Usage

```ts
import { Configuration, ResponseError, WorkspacesApi } from "@hotdata/sdk";

const configuration = new Configuration({
  accessToken: "YOUR_ACCESS_TOKEN",
  headers: {
    "X-Workspace-Id": "YOUR_WORKSPACE_ID",
  },
});

const workspaces = new WorkspacesApi(configuration);
try {
  const response = await workspaces.listWorkspaces();
  console.log(response);
} catch (e) {
  if (e instanceof ResponseError) {
    console.error(`${e.response.status} ${e.response.statusText}\n${await e.response.text()}`);
  } else {
    throw e;
  }
}
```

Each `*Api` class groups endpoints by resource. Construct a `Configuration`, pass it into the API class you need, then call the typed methods.

## API reference

Generated Markdown for every operation and model is in [`docs/`](docs/):

- Resource APIs: `docs/*Api.md` (for example [`docs/QueryApi.md`](docs/QueryApi.md))
- Request and response models: `docs/<ModelName>.md`

Use your editor or GitHub file search there instead of duplicating large tables in this file.

## Support

Questions and issues: [github.com/hotdata-dev/sdk-typescript](https://github.com/hotdata-dev/sdk-typescript).
