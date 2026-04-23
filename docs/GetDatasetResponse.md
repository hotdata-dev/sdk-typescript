
# GetDatasetResponse

Response body for GET /v1/datasets/{id}

## Properties

Name | Type
------------ | -------------
`columns` | [Array&lt;ColumnInfo&gt;](ColumnInfo.md)
`createdAt` | Date
`id` | string
`label` | string
`latestVersion` | number
`pinnedVersion` | number
`schemaName` | string
`sourceType` | string
`tableName` | string
`updatedAt` | Date

## Example

```typescript
import type { GetDatasetResponse } from '@hotdata/sdk'

// TODO: Update the object below with actual values
const example = {
  "columns": null,
  "createdAt": null,
  "id": null,
  "label": null,
  "latestVersion": null,
  "pinnedVersion": null,
  "schemaName": null,
  "sourceType": null,
  "tableName": null,
  "updatedAt": null,
} satisfies GetDatasetResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetDatasetResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


