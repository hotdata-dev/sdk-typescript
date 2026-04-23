
# CreateDatasetResponse

Response body for POST /v1/datasets

## Properties

Name | Type
------------ | -------------
`createdAt` | Date
`id` | string
`label` | string
`schemaName` | string
`status` | string
`tableName` | string

## Example

```typescript
import type { CreateDatasetResponse } from '@hotdata/sdk'

// TODO: Update the object below with actual values
const example = {
  "createdAt": null,
  "id": null,
  "label": null,
  "schemaName": null,
  "status": null,
  "tableName": null,
} satisfies CreateDatasetResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateDatasetResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


